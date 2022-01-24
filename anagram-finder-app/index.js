var fs = require('fs');
var readline = require('readline');

//Full list of Anagrams found
var anagrams = {};

//Set List of Anagrams into obj
function getAnagrams(listOfAnagrams) {
    anagrams = listOfAnagrams
}

//Rearrange word to be unified
var sanitizeWord = getAnagrams.prototype.sanitizeWord = function (word) {
    return word.toLowerCase().split("").sort().join("");
}

//finds all possible anagrams
var findAnagrams = getAnagrams.prototype.findAnagrams = function (searchWord) {
    let sanitizedWord = sanitizeWord(searchWord);
    if (anagrams[sanitizedWord]) {
        return anagrams[sanitizedWord];
    } else {
        return `No anagrams found for ${searchWord}`;
    }
}

//read dictionary file and sets up CLI prompt
var readFile = getAnagrams.prototype.readFile = function () {
    console.log('Welcome to the Anagram Finder');
    fs.readFile('dictionary.txt', 'utf8', (err, data) => {
        console.time('time');
        if (err) {
            console.log("Unable to read the dictionary, please try again.")
            console.log(err)
            return;
        }
        var dictionary = data.split('\n');

        //map through each word in the dictionary
        dictionary.map(word => {
            var sanitizedWord = sanitizeWord(word);
            if (anagrams[sanitizedWord] != null) {
                anagrams[sanitizedWord].push(word);
            }
            else {
                anagrams[sanitizedWord] = [word];
            }
         });
         
        console.log('dictionary loaded in ') + console.timeEnd('time');
        var rl = readline.createInterface(process.stdin, process.stdout);
        rl.setPrompt('Enter your word to find all anagrams: ');
        rl.prompt();
        rl.on('line', (word) => {
            if(word !== 'exit'){
                console.time('');
                console.log(findAnagrams(word));
                console.log(findAnagrams(word).length + ` Anagrams found for ${word} in `);
                console.timeEnd('');
                rl.prompt();
            }else{
                console.log("Closed the interatcion session")
                rl.close();
            }
        });
    });
}

module.exports = getAnagrams;
readFile();
