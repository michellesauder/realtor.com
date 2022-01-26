const fs = require("fs");

let word;

module.exports = {
    anagramFinder: function(word){
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
