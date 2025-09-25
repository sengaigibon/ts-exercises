// figure out if a sentence is a pangram.

// A pangram is a sentence using every letter of the alphabet at least once. It is case insensitive, 
// so it doesn't matter if a letter is lower-case (e.g. k) or upper-case (e.g. K).

// For this exercise, a sentence is a pangram if it contains each of the 26 letters in the English alphabet.

const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
export function isPangram(sentence: string): boolean
{
    sentence = sentence.toLowerCase();

    for (let letter of alphabet) {
        if (!sentence.includes(letter)) {
            return false;
        }
    }

    // another more efficient solution is:
    // const uniqueLetters = new Set(sentence.match(/[a-z]/g));
    // return uniqueLetters.size === 26;
    
    return true;
}