import { DnDCharacter } from '../exercises/easy/challenge-8-alternative';

describe ("Randomly generate Dungeons & Dragons characters", () => {
    test("Simple mocking test", () => {
        const mockThrowDice = jest.spyOn(DnDCharacter, 'throwDice');
        mockThrowDice.mockReturnValueOnce(5).mockReturnValueOnce(3).mockReturnValueOnce(1).mockReturnValueOnce(6);

        let result = DnDCharacter.throwDice();
        expect(result).toBe(5);

        result = DnDCharacter.throwDice();
        expect(result).toBe(3);

        result = DnDCharacter.throwDice();
        expect(result).toBe(1);

        result = DnDCharacter.throwDice();
        expect(result).toBe(6);
    });

    test("List of abilities is complete", () => {
        let character = new DnDCharacter();

        expect(character).toHaveProperty('hitpoints');
        expect(character).toHaveProperty('strength');
        expect(character).toHaveProperty('dexterity');
        expect(character).toHaveProperty('constitution');
        expect(character).toHaveProperty('intelligence');
        expect(character).toHaveProperty('wisdom');
        expect(character).toHaveProperty('charisma');
    });

    test("Given known dice results, the list of character abilities must match", () => {
        const mockThrowDice = jest.spyOn(DnDCharacter, 'throwDice');
        mockThrowDice.mockReturnValueOnce(5).mockReturnValueOnce(3).mockReturnValueOnce(1).mockReturnValueOnce(6)
                     .mockReturnValueOnce(3).mockReturnValueOnce(2).mockReturnValueOnce(5).mockReturnValueOnce(3)
                     .mockReturnValueOnce(1).mockReturnValueOnce(1).mockReturnValueOnce(1).mockReturnValueOnce(1)
                     .mockReturnValueOnce(2).mockReturnValueOnce(1).mockReturnValueOnce(6).mockReturnValueOnce(6)
                     .mockReturnValueOnce(3).mockReturnValueOnce(5).mockReturnValueOnce(3).mockReturnValueOnce(4)
                     .mockReturnValueOnce(6).mockReturnValueOnce(6).mockReturnValueOnce(6).mockReturnValueOnce(6);
        
        let character = new DnDCharacter();

        expect(character.getHitpoints()).toBe(10 + character.getConstitution());
        expect(character.getStrength()).toBe(14);
        expect(character.getDexterity()).toBe(11);
        expect(character.getConstitution()).toBe(-4);
        expect(character.getIntelligence()).toBe(14);
        expect(character.getWisdom()).toBe(12);
        expect(character.getCharisma()).toBe(18);
    });
});