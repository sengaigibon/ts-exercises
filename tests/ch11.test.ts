import { bobsAnswerTo } from "../challenges/challenge-11";

describe ("Bob's answers to different sentences", () => {
    test('he answers "Sure"', () => {
        let sentence: string = "How are you?";

        expect(bobsAnswerTo(sentence)).toBe('Sure.');
    });

    test('he answers "Whoa, chill out!"', () => {
        let sentence: string = "YELL AT HIM";

        expect(bobsAnswerTo(sentence)).toBe('Whoa, chill out!');
    });

    test('he answers "Calm down"', () => {
        let sentence: string = "YELL A QUESTION?";

        expect(bobsAnswerTo(sentence)).toBe("Calm down, I know what I'm doing!");
    });

    test('he answers "Fine"', () => {
        let answer: string = 'Fine. Be that way!';
        expect(bobsAnswerTo()).toBe(answer);
        expect(bobsAnswerTo(' ')).toBe(answer);
        expect(bobsAnswerTo('       ')).toBe(answer);
    });

    test('he answers "Whatever"', () => {
        let sentence: string = "anything else";

        expect(bobsAnswerTo(sentence)).toBe("Whatever.");
    });
});