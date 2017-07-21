#!/bin/bash

# colors
IBlue="\033[0;94m"
BWhite="\033[1;37m"
BIRed='\033[1;91m'
BIGreen="\033[1;92m"
BIYellow='\033[1;93m'
BIBlue='\033[1;94m'
BIPurple='\033[1;95m'

# art
clear; echo ""
sleep 0.01 && echo -e "$IBlue"
sleep 0.2 && echo "████████╗██████╗ ███████╗███╗   ███╗██╗███╗   ██╗ █████╗ ██╗"
sleep 0.2 && echo "╚══██╔══╝██╔══██╗██╔════╝████╗ ████║██║████╗  ██║██╔══██╗██║"
sleep 0.2 && echo "   ██║   ██████╔╝█████╗  ██╔████╔██║██║██╔██╗ ██║███████║██║"
sleep 0.2 && echo "   ██║   ██╔══██╗██╔══╝  ██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║"
sleep 0.2 && echo "   ██║   ██║  ██║███████╗██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗"
sleep 0.2 && echo "   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝"

echo ""

sleep 0.1
echo -e $BWhite   "                Manage$BIRed Trello$BWhite from the$BIRed Terminal     "
sleep 0.1
echo ""
sleep 0.1
echo -e $BWhite   "        Another OS project by$BIGreen Enrique Benitez$BIYellow <@bntzio>   "
sleep 0.1

echo ""
echo ""

echo -e $BWhite "In order to continue, you must set your Trello API key and token."
echo -e $BWhite "You can find those in https://trello.com/app-key"
echo ""
echo -e $BIBlue "What's your Trello username?"$BIPurple
read user
echo ""
echo -e $BIBlue "What's your key?"$BIPurple
read key
echo ""
echo -e $BIBlue "What's your token?"$BIPurple
read token

echo ""

echo -e $BIBlue "Generating access file..."
NPMRoot="$(npm root -g)"
CredPath="$NPMRoot/treminal/credentials.js"
echo "const credentials = {" > "$CredPath"
echo "  user: '$user'," >> "$CredPath"
echo "  key: '$key'," >> "$CredPath"
echo "  token: '$token'" >> "$CredPath"
echo "}" >> "$CredPath"
echo "" >> "$CredPath"
echo "module.exports = credentials" >> "$CredPath"
sleep 3
echo -e $BIGreen "Done!"
echo ""
echo -e $BWhite "Now enjoy Treminal! Just type:$BIPurple taco --help"
