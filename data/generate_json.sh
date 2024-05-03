#!/bin/bash

# Get list of directories in the current directory and sort them
directories=$(find . -maxdepth 1 -type d ! -path . | sort)

# Initialize JSON output
json_output="const data = {"

# Loop through each directory
while IFS= read -r dir; do
    # Get directory name
    dir_name=$(basename "$dir")

    # Skip the current directory
    if [ "$dir_name" != "." ]; then
        # Get list of files in the directory and sort them
        files=$(find "$dir" -maxdepth 1 -type f -printf "%f\n" | sort -R)

        # Prepare JSON output for the directory
        json_output+=" \"$dir_name\" : ["
        for file in ${files[@]}; do
            json_output+=' "'"$file"'",'
        done
        # Remove the last comma and add closing bracket
        json_output=${json_output%,}'],'
    fi
done <<< "$directories"

# Remove the last comma and add closing bracket for the entire JSON output
json_output=${json_output%,}'}'
echo "$json_output"
