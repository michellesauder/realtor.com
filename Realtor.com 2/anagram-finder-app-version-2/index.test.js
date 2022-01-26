var Anagram = require('./index');

describe("Anagram", () => {
    var anagram;
    beforeAll(() => {
        anagram = new Anagram({
            'estt': ['test', 'test', 'test', 'etst', 'ttse'],
        });
    });

    it("should sanitizeWord() correct sort", () => {
        var word = anagram.sanitizeWord('test');
        expect(word).toBe('estt');
    });

    it("should not sanitizeWord() correct sort", () => {
        var word = anagram.sanitizeWord('test');
        expect(word).not.toBe('test');
    });

    it("should correct findAnagrams(string)", () => {
        var result = anagram.findAnagrams('test')
        var resultToBe = ["test", "test", "test", "etst", "ttse"];
        expect(result).toStrictEqual(resultToBe);
    });

    it("should correct findAnagrams(searchWord) no anagrams", () => {
        var result = anagram.findAnagrams('fhfjdksahfdjklshfjk')
        expect(result).toStrictEqual(false);
    });

    it("should findAnagrams(input) with no input", () => {
        var result = anagram.findAnagrams('')
        expect(result).toStrictEqual(false);
    });

    it("should correct findAnagrams(input) caseSensitive", () => {
        var result = anagram.findAnagrams('TEST')
        var resultToBe = ["test", "test", "test", "etst", "ttse"];
        expect(result).toStrictEqual(resultToBe);
    });
});