import { RobotControl, Robot } from '../exercises/medium/excercise-02';

describe('Check random robot names', () => {

    test('verify random name format', () => {
        let randomName: string  = RobotControl.generateRandomName();
        expect(randomName).toMatch(/[A-Z]{2}[0-9]{3}/);
    });

    let robotsBand: Robot[] = [];

    for (let i = 0; i < 10; i++) {
        robotsBand.push(new Robot());
    }

    test('robots have no name after they come off the factory', () => {
        robotsBand.forEach((robot) => {
            expect(robot.getName()).toBe('');
        });
    });

    test('verify format of robot names after they are turned on', () => {
        robotsBand[1].turnOn();
        robotsBand[3].turnOn();
        robotsBand[5].turnOn();

        robotsBand.forEach((robot) => {
            let name: string = robot.getName();
            if (name) {
                expect(name).toMatch(/[A-Z]{2}[0-9]{3}/);
            }
        });
    });

    test('verify names are unique', () => {
        robotsBand[7].turnOn();
        robotsBand[9].turnOn();

        let robotNames: string[] = robotsBand.map((robot) => { return robot.getName() });
        let uniqueNames: Set<string> = new Set(robotNames); // it will remove duplications

        uniqueNames.delete('');

        expect(uniqueNames.size).toBe(5); 
    });

    test('verify names are unique, even after reseting a robot', () => {
        robotsBand[7].resetToFactorySettings();
        robotsBand[9].resetToFactorySettings();

        let robotNames: string[] = robotsBand.map((robot) => { return robot.getName() });

        let uniqueNames: Set<string> = new Set(robotNames); 
        uniqueNames.delete('');

        // variation of the previous way to test the same:
        expect(uniqueNames).toHaveProperty('size', 5);

        robotsBand[1].resetToFactorySettings();
        robotsBand[5].resetToFactorySettings();

        robotNames = robotsBand.map((robot) => { return robot.getName() });

        uniqueNames = new Set(robotNames);
        uniqueNames.delete('');

        expect(uniqueNames).toHaveProperty('size', 5);
    });
});