import { RobotFactory } from '../exercises/medium/excercise-13';

describe('Check random robot names', () => {

    test('verify random name format', () => {
        let randomName: string  = RobotFactory.generateRandomName();
        expect(randomName).toMatch(/[A-Z]{2}[0-9]{3}/);
    });

    const factory = new RobotFactory(100);

    test('verify format of robot names', () => {
        factory.getRobots().forEach((robotName) => {
            expect(robotName).toMatch(/[A-Z]{2}[0-9]{3}/);
        });
    });

    test('verify names are unique', () => {
        let uniqueNames: Set<string> = new Set(factory.getRobots()); // it will remove duplications
        expect(uniqueNames.size).toBe(100); // therefore, there must be 100 names
    });

    test('verify names are unique, even after rebooting a robot', () => {
        let uniqueNames: Set<string> = new Set(factory.getRobots()); 
        // variation of the previous way to test the same:
        expect(uniqueNames).toHaveProperty('size', 100);

        factory.rebootRobot(55);
        factory.rebootRobot(10);

        uniqueNames = new Set(factory.getRobots());
        expect(uniqueNames).toHaveProperty('size', 100);
    });
});