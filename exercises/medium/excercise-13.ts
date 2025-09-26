// Manage robot factory settings.

// When a robot comes off the factory floor, it has no name.

// The first time you turn on a robot, a random name is generated in the format 
// of two uppercase letters followed by three digits, such as RX837 or BC811.

// Every once in a while we need to reset a robot to its factory settings, 
// which means that its name gets wiped. The next time you ask, 
// that robot will respond with a new random name.

// The names must be random: they should not follow a predictable sequence. 
// Using random names means a risk of collisions. 
// Your solution must ensure that every existing robot has a unique name.

export class RobotControl {
    static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    static MAX_NUM = 1000;

    private robotNames: string[] = [];
    private static instance: RobotControl | null = null;

    public static getInstance(): RobotControl {
        if (!RobotControl.instance) {
            RobotControl.instance = new RobotControl();
        }
        return RobotControl.instance;
    }


    public getRobotNames(): string[] {
        return this.robotNames;
    }

    public resetRobot(name: string): string {
        let index: number = this.robotNames.indexOf(name);
        this.robotNames.splice(index)
        return this.createUniqueName();
    }

    public createUniqueName(): string {
        let rName: string = '';
        let index;
        do {
            rName = RobotControl.generateRandomName();
            index = this.robotNames.indexOf(rName);
        } while (index >= 0);

        this.robotNames.push(rName);

        return rName;
    }

    public static generateRandomName(): string {

        let pos1: string = RobotControl.ALPHABET[Math.floor(Math.random() * RobotControl.ALPHABET.length)];
        let pos2: string = RobotControl.ALPHABET[Math.floor(Math.random() * RobotControl.ALPHABET.length)];
        let number: number = Math.floor(Math.random() * RobotControl.MAX_NUM);
        let numberStr: string;

        if (number < 10) {
            numberStr = `00${number}`;
        } else if (number < 100) {
            numberStr = `0${number}`;
        } else {
            numberStr = number.toString();
        }

        let rname = `${pos1}${pos2}${numberStr}`;
        return rname;
    }
}

export class Robot {
    private name: string = '';
    private control: RobotControl;

    public constructor() {
        this.control = RobotControl.getInstance();
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public turnOn(): void {
        this.name = this.control.createUniqueName();
    }

    public resetToFactorySettings(): void {
        this.name = this.control.resetRobot(this.name);
    }
}