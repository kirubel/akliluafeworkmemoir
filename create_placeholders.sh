#!/bin/bash

# Create placeholder images for the memoir site
cd ~/Documents/dads-memoir/public/images/placeholders

# Create simple placeholder images with ImageMagick (if available) or use curl to download from placeholder services

# Function to create a placeholder image
create_placeholder() {
    local filename="$1"
    local text="$2"
    local width="${3:-800}"
    local height="${4:-600}"
    
    # Try to use a placeholder service
    curl -s "https://via.placeholder.com/${width}x${height}/8B4513/FFFFFF?text=${text// /+}" -o "$filename" || \
    curl -s "https://picsum.photos/${width}/${height}" -o "$filename"
}

# Create placeholders for each location
create_placeholder "debre-markos-town.jpg" "Debre Markos Historical View" 800 600
create_placeholder "addis-ababa-university-1960s.jpg" "Addis Ababa University 1960s" 800 600
create_placeholder "kofele-highlands.jpg" "Kofele Highlands Landscape" 800 600
create_placeholder "coffee-ceremony.jpg" "Ethiopian Coffee Ceremony" 800 600
create_placeholder "asmara-1970s.jpg" "Asmara Street View 1970s" 800 600
create_placeholder "abidjan-1990s.jpg" "Abidjan Skyline 1990s" 800 600

echo "Placeholder images created successfully!"
