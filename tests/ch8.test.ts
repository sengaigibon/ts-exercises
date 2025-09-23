import * as challenge from '../challenges/challenge-8';

describe ("Randomly generate Dungeons & Dragons characters", () => {
    test("Simple mocking test", () => {
        const mockThrowDice = jest.spyOn(challenge, 'throwDice');
        mockThrowDice.mockReturnValueOnce(5).mockReturnValueOnce(3).mockReturnValueOnce(1).mockReturnValueOnce(6);

        let result = challenge.throwDice();
        expect(result).toBe(5);

        result = challenge.throwDice();
        expect(result).toBe(3);

        result = challenge.throwDice();
        expect(result).toBe(1);

        result = challenge.throwDice();
        expect(result).toBe(6);
    });

    test("List of abilities is complete", () => {
        let characterAbilities = challenge.generateCharacter();

        expect(characterAbilities).toHaveProperty('strength');
        expect(characterAbilities).toHaveProperty('dexterity');
        expect(characterAbilities).toHaveProperty('constitution');
        expect(characterAbilities).toHaveProperty('intelligence');
        expect(characterAbilities).toHaveProperty('wisdom');
        expect(characterAbilities).toHaveProperty('charisma');
    });

    test("Given known dice results, the list of character abilities must match", () => {
        const mockThrowDice = jest.spyOn(challenge, 'throwDice');
        mockThrowDice.mockReturnValueOnce(5).mockReturnValueOnce(3).mockReturnValueOnce(1).mockReturnValueOnce(6)
                     .mockReturnValueOnce(3).mockReturnValueOnce(2).mockReturnValueOnce(5).mockReturnValueOnce(3)
                     .mockReturnValueOnce(1).mockReturnValueOnce(1).mockReturnValueOnce(1).mockReturnValueOnce(1)
                     .mockReturnValueOnce(2).mockReturnValueOnce(1).mockReturnValueOnce(6).mockReturnValueOnce(6)
                     .mockReturnValueOnce(3).mockReturnValueOnce(5).mockReturnValueOnce(3).mockReturnValueOnce(4)
                     .mockReturnValueOnce(6).mockReturnValueOnce(6).mockReturnValueOnce(6).mockReturnValueOnce(6);
        
        let characterAbilities = challenge.generateCharacter();

        expect(characterAbilities['strength']).toBe(14);
        expect(characterAbilities['dexterity']).toBe(11);
        expect(characterAbilities['constitution']).toBe(-4);
        expect(characterAbilities['intelligence']).toBe(14);
        expect(characterAbilities['wisdom']).toBe(12);
        expect(characterAbilities['charisma']).toBe(18);
    });
});