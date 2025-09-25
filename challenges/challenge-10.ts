// figure out if a sentence is a pangram.

// A pangram is a sentence using every letter of the alphabet at least once. It is case insensitive, 
// so it doesn't matter if a letter is lower-case (e.g. k) or upper-case (e.g. K).

// For this exercise, a sentence is a pangram if it contains each of the 26 letters in the English alphabet.

const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
export function isPangram(sentence: string): boolean
{
    sentence = sentence.toLowerCase();

    for (let i = 0; i < alphabet.length; i++) {
        if (!sentence.includes(alphabet[i])) {
            return false;
        }
    }

    return true;
}