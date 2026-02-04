import { QuartzTransformerPlugin } from "../types"
import { CSSResource } from "../../util/resources"
import fs from "fs"
import path from "path"

// @ts-ignore
import galleryStyle from "../../components/styles/gallery.inline.scss"

export interface Options {
  /** Enable the gallery plugin */
  enabled: boolean
}

const defaultOptions: Options = {
  enabled: true,
}

// Matches ::gallery{folder/path} on its own line, then :: on its own line
const galleryFolderRegex = /^::gallery\{([^}]+)\}\s*\n::$/gm

const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".bmp"]

export const Gallery: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "Gallery",
    textTransform(ctx, src) {
      if (!opts.enabled) return src

      const contentDir = ctx.argv.directory

      // Transform ::gallery{folder} blocks
      return src.replace(galleryFolderRegex, (_match, folderPath: string) => {
        const fullPath = path.join(contentDir, folderPath.trim())

        // Check if folder exists
        if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isDirectory()) {
          console.warn(`[Gallery] Folder not found: ${fullPath}`)
          return `<div class="gallery-container" data-gallery="true"><p>Gallery folder not found: ${folderPath}</p></div>`
        }

        // Read all image files from the folder
        const files = fs.readdirSync(fullPath)
        const images = files
          .filter((file) => {
            const ext = path.extname(file).toLowerCase()
            return imageExtensions.includes(ext)
          })
          .sort() // Sort alphabetically for consistent ordering

        if (images.length === 0) {
          return `<div class="gallery-container" data-gallery="true"><p>No images found in: ${folderPath}</p></div>`
        }

        // Generate HTML img tags directly (markdown inside HTML blocks isn't processed)
        const imageHtml = images
          .map((img) => {
            const alt = path.basename(img, path.extname(img))
            const src = `${folderPath}/${img}`
            return `<div class="gallery-item"><img src="${src}" alt="${alt}" /></div>`
          })
          .join("\n")

        return `<div class="gallery-container" data-gallery="true">\n${imageHtml}\n</div>`
      })
    },
    htmlPlugins() {
      // HTML structure is generated directly in textTransform, no additional processing needed
      return []
    },
    externalResources() {
      if (!opts.enabled) return { js: [], css: [] }

      const css: CSSResource[] = [
        {
          content: galleryStyle,
          inline: true,
        },
      ]

      return { js: [], css }
    },
  }
}
