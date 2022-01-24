# Anagram Finder

The program should provide a command line prompt where a user can input a word of their choice. On hitting enter the program should find all anagrams, if any exist, of the word and print them out on the next line as a comma separated list. If no anagrams are found it should print out “No anagrams found for 'fjdksahfdjskl'”.

The program should continue to prompt for anagrams until “exit” is typed at the prompt.

## Installation

You need to install 

Node.js,
npm,
jest

After successful installation of Node.js be sure that node is added to your path. To check the successful installation of node.js type to your OS's commandline interface the following:

```bash
node -v
```
```bash
npm -v
```

Then:
```bash
npm install
```
## Usage

To start the Anagram Finder, type in command into your terminal on VSCode: 

```bash
node index
```

The program should load the dictionary.txt file and let you know how long it took in the pink box.
# A prompt will tell you to enter a word

Enter your word to find all anagrams: 'word'

# to exit
Simply type in exit

# tests

If you would like to test out the application, simply ensure jest is installed

```bash
npm install --save-dev jest
```

comment out readFile(); in the index.js file

then run the command: 
```bash
npm run test
```