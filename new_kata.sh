#!/bin/bash
# This scripts generates the dummy template for storing my kata solutions
# In its current stage, the script is really barebones & code can be improved tremendously
# What you see here is the MVP. Updates to this will come eventually

# Check if the user provided a kata ID or not
if [[ -z "$1" ]]; then
    echo "You must provide a kata ID."
    exit 1
fi

# CodeWars API URL
readonly API="https://www.codewars.com/api/v1/code-challenges/$1"

# Fetch the code challenge details from API
data=$(curl "$API")

# Check if API response returned a failure, exit the script
[[ $(jq .success <<< $data) == "false" ]] && echo "Invalid kata ID" && exit 1

# Store the required data in variables
# TODO: Improve this shit pile of code
name=$(jq .name <<< "$data" | tr -d "\'\"")
slug=$(tr -s " " "_" <<< "$name")
url=$(jq .url <<< "$data" | tr -d "\'\"")
rank=$(jq .rank.name <<< "$data" | tr -d "\" ")
description=$(jq -r .description <<< "$data" | tr -d "\'\"")
tags=$(jq .tags <<< "$data" | tr -d "\"\n[] " | sed -E 's/,/, /g')
creator=$(jq .createdBy.username <<< "$data" | tr -d "\'\"")
creator_url=$(jq .createdBy.url <<< "$data" | tr -d "\'\"")

# Create a directory for the kata
mkdir -p ./src/"$rank"/"${foo:="JavaScript"}"/"${slug}"

# Create a file called app.js in the target directory
touch ./src/"$rank"/"${foo:="JavaScript"}"/"${slug}"/app.js

# Generate a README using heredoc 
cat <<README >> ./src/"$rank"/"${foo:="JavaScript"}"/"${slug}"/README.md
## [$name]($url)
---
### Description

$description

<br>

###### Tags: \`${tags[@]}\`

###### Creator: [$creator]($creator_url)

###### Completed On: \`$(date +%d-%m-%Y)\`

###### Last Attempt On: \`$(date +%d-%m-%Y)\`

---

### Takeaways
- Breaking the problem down on a paper is recommended
README