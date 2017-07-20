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
echo -e $BWhite   "          Display your$BIRed Trello$BWhite tasks in the$BIRed Terminal     "
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
echo -e $BIBlue "What's your token?"$BIPurple
read token

echo ""

echo -e $BIBlue "Generating access file..."
echo "export const user = '$user'" > credentials.js
echo "export const key = '$key'" >> credentials.js
echo "export const token = '$token'" >> credentials.js
sleep 3
echo -e $BIGreen "Done!"
echo ""
echo -e $BWhite "Now enjoy Treminal! Just type:$BIPurple taco --help"
