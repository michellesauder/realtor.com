const fs = require("fs");


let word;

// if(process.argv.length != 3){
//     console.log("Usage: node <script-file> <word>")
//     process.exit(1);
// }
// else {
//     word = process.argv[2]
// }

module.exports = {
    anagramFinder: function(word){
        // process.stdin.resume();
        var anagramsFound = [];
        var time = '';
        fs.readFile('dictionary.txt', 'utf8', (err,data) => {
            console.time('time');
            if(err){
                console.error(err);
                return;
            }
            console.log('dictionary loaded in ') + console.timeEnd('time');
            //put information in the array
            dict = data.split("\n");

            function isAnagram(str) {
                const sanitizeString = function (str) {
                    return str.toLowerCase().replace(/[^a-zd]/g, '').split('').sort().join('');
                }
                return (sanitizeString(str) == sanitizeString(word) && !(str === word))
            }

            //count the number of words 
            var countedWords = dict.filter(dictWord => dictWord.length === word.length);

            let reformattedWords = countedWords.map(countedWord => {

                // check each to see if it is an anagram
                if(isAnagram(countedWord)){
                 anagramsFound.push(countedWord);
                }
             });
             if(anagramsFound.length == 0){
                 console.log('No Anagram Found for ' + word)
             }else {
                console.log(anagramsFound)
             }
            
        });
        console.log('Welcome to the Anagram Finder');
    }
};

require('make-runnable');
