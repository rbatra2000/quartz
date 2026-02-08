#!/bin/bash

# Check if correct number of arguments provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <input.docx>"
    exit 1
fi

INPUT_DOCX="$1"

# Check if input file exists
if [ ! -f "$INPUT_DOCX" ]; then
    echo "Error: Input file '$INPUT_DOCX' not found"
    exit 1
fi

# Get the base filename without extension
BASENAME="$(basename "$INPUT_DOCX" .docx)"

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Create output directory structure in the script's directory
OUTPUT_DIR="$SCRIPT_DIR/outputs/$BASENAME"
mkdir -p "$OUTPUT_DIR"

# Set paths for markdown and assets
OUTPUT_MD="$OUTPUT_DIR/$BASENAME.md"
ASSETS_DIR="$OUTPUT_DIR/assets"

# Run pandoc conversion
pandoc \
  -t markdown_strict \
  --extract-media="$ASSETS_DIR" \
  "$INPUT_DOCX" \
  -o "$OUTPUT_MD"

echo "Conversion complete!"
echo "Output folder: $OUTPUT_DIR"
echo "  - Markdown: $BASENAME.md"
if [ -d "$ASSETS_DIR" ]; then
    echo "  - Assets: assets/"
fi