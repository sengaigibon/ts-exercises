
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
    public tail: TrainStation | null = null;

    public addAtTheBeggining(name: string) {
        let newStation = new TrainStation(name);
        if (!this.head) {
            this.head = newStation;
            this.tail = newStation;
            return;
        }

        this.head.previous = newStation;
        newStation.next = this.head;
        this.head = newStation;
    }

    public addAtTheEnd(name: string) {
        let newStation = new TrainStation(name);
        if (!this.tail) {
            this.tail = newStation;
            this.head = newStation;
            return;
        }

        this.tail.next = newStation;
        newStation.previous = this.tail;
        this.tail = newStation;
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
        let current: TrainStation | null = this.tail;

        if (current === null) {
            return '';
        }

        let stations: string[] = [];

        do {
            stations.push(current.name);
        } while (current = current.previous)

        return stations.join(' -> ');
    }

    public removeFirst() {
        if (!this.head) {
            return;
        }

        let current = this.head;

        if (this.head = this.head.next) {
            this.head.previous = null;
        }

        if (this.tail === current) { // head and tail were pointing to the same node, clean up tail
            this.tail = null;
        }
    }

    public removeLast() {
        if (!this.tail) {
            return;
        }

        let current = this.tail;

        if (this.tail = this.tail.previous) {
            this.tail.next = null;
        }

        if (this.head === current) { // tail and head were pointing to the same node, clean up head
            this.head = null;
        }
    }

    public removeAny(name: string)
    {
        let station = this.find(name);
        
        if (!station) {
            return;
        }

        let previous = station.previous;
        let next = station.next;

        if (previous === next) { // case with only one element, clean head and tail
            this.head = this.tail = null;
            station = previous = next = null;
            return;
        }

        if (previous) {
            previous.next = next;
        }

        if (next) {
            next.previous = previous;
        }

        if (this.head === station) {
            this.head = next;
        }

        if (this.tail === station) {
            this.tail = previous;
        }

        station = null;
    }

    public find(name: string): TrainStation | null {
        let current: TrainStation | null = this.head;

        if (current === null) {
            return null;
        }

        while (true) {
            if (current.name === name) {
                return current
            } else if (current.next === null) {
                break;
            }
            
            current = current.next
        }

        return null;
    }
}