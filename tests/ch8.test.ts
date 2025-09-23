import * as challenge from '../challenges/challenge-8';

describe ("Randomly generate Dungeons & Dragons characters", () => {
    test("Given known dice results, the list of character abilities must match", () => {
        const mockThrowDice = jest.spyOn(challenge, 'throwDice').mockReturnValue(1);

        let result = challenge.generateCharacter();
        console.log(result);
        
        expect(mockThrowDice).toHaveBeenCalled();
        expect(mockThrowDice).toHaveReturnedWith(1);

        expect(result).toBeTruthy();
    });
});