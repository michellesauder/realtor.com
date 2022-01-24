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
        return false
    }
}

//read dictionary file and sets up CLI prompt
var readFile = getAnagrams.prototype.readFile = function () {
    console.log('--------------------------------');
    console.log('\x1b[36m%s\x1b[0m', 'Welcome to the Anagram Finder');
    console.log('--------------------------------');

    fs.readFile('dictionary.txt', 'utf8', (err, data) => {
        console.time('time');
        if (err) {
            console.log("Unable to read the dictionary, please try again.")
            console.error(err)
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

        console.log('\x1b[45m')
        console.log('--------------------------------');
        console.log('dictionary loaded in ') + console.timeEnd('time') ;
        console.log('--------------------------------', '\x1b[0m');

        var rl = readline.createInterface(process.stdin, process.stdout);

        console.log("\x1b[32m")
        rl.setPrompt('Enter your word to find all anagrams: ');
        rl.prompt();
        rl.on('line', (word) => {
            if(word !== 'exit'){
                console.time('timer');
                if(findAnagrams(word)){
                    var wordsFound = findAnagrams(word).join(", ");
                    console.log(findAnagrams(word).length + ` Anagrams found for ${word} in `);
                    console.timeEnd('timer');
                    console.log(wordsFound);
                }else{
                    console.log('\x1b[33m%s\x1b[0m', `No Anagrams found for ${searchWord}`);
                }
                console.log("\x1b[32m")
                rl.prompt();
            }else{
                console.log("\x1b[4m")
                console.log("Exited the Anagram Finder")
                rl.close();
            }
        });
    });
}

module.exports = getAnagrams;
readFile();
