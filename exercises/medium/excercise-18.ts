
export class TrainStation {
    public previous: TrainStation | null = null;
    public name: string;
    public next: TrainStation | null = null;

    public constructor(name: string) {
        this.name = name;
        this.previous = null;
        this.next = null;
    }
}

export class TrainRoute {
    public head: TrainStation | null = null;

    public addAtTheBeggining(name: string) {
        let newStation = new TrainStation(name);
        if (!this.head) {
            this.head = newStation;
            return;
        }

        this.head.previous = newStation;
        newStation.next = this.head;
        this.head = newStation;
    }

    public addAtTheEnd(name: string) {
        let newStation = new TrainStation(name);
        if (!this.head) {
            this.head = newStation;
            return;
        }

        let current: TrainStation | null = this.head;

        //traverseForward
        while (current.next) {
            current = current.next;
        }

        current.next = newStation;
        newStation.previous = current;
    }

    public closeStation(name: string) { //remove

    }

    public getSize(): number {
        return 0;
    }

    public travelForward(): string {
        let current: TrainStation | null = this.head;

        if (current === null) {
            return '';
        }

        let stations: string[] = [];

        do {
            stations.push(current.name);
        } while (current = current.next)

        return stations.join(' -> ');
    }

    public travelBarckwards(): string {
        let stations: string[] = [];

        let current = this.findLast();

        if (!current) { 
            return '';
        }

        do {
            stations.push(current.name);
        } while (current = current.previous);

        return stations.join(' -> ');
    }

    public findLast(): TrainStation | null{
        let current: TrainStation | null = this.head;

        if (current === null) {
            return null;
        }

         while (true) {
            if (current.next === null) {
                break;
            }
            current = current.next
         }

         return current;
    }
}