import { TrainRoute, TrainStation } from "../exercises/medium/excercise-18";

describe("double linked lists", () => {
    test("add at the beginning and travel in both directions", () => {
        let route = new TrainRoute();

        route.addAtTheBeggining('a1');
        route.addAtTheBeggining('a2');
        route.addAtTheBeggining('a3');
        route.addAtTheBeggining('a4');
        route.addAtTheBeggining('a5');
        route.addAtTheBeggining('a6');

        expect(route.travelForward()).toBe('a6 -> a5 -> a4 -> a3 -> a2 -> a1');
        expect(route.travelBarckwards()).toBe('a1 -> a2 -> a3 -> a4 -> a5 -> a6');

        route.removeFirst();
        expect(route.travelForward()).toBe('a5 -> a4 -> a3 -> a2 -> a1');

        route.removeLast();
        expect(route.travelForward()).toBe('a5 -> a4 -> a3 -> a2');
    });

    test("add at the end and travel in both directions", () => {
        let route = new TrainRoute();

        route.addAtTheEnd('a1');
        route.addAtTheEnd('a2');
        route.addAtTheEnd('a3');
        route.addAtTheEnd('a4');
        route.addAtTheEnd('a5');
        route.addAtTheEnd('a6');

        expect(route.travelForward()).toBe('a1 -> a2 -> a3 -> a4 -> a5 -> a6');
        expect(route.travelBarckwards()).toBe('a6 -> a5 -> a4 -> a3 -> a2 -> a1');

        route.removeAny('a5');
        expect(route.travelBarckwards()).toBe('a6 -> a4 -> a3 -> a2 -> a1');

        route.removeAny('a3');
        expect(route.travelBarckwards()).toBe('a6 -> a4 -> a2 -> a1');

        route.removeAny('a6');
        expect(route.travelBarckwards()).toBe('a4 -> a2 -> a1');
        expect(route.travelForward()).toBe('a1 -> a2 -> a4');

        route.removeAny('a1');
        expect(route.travelForward()).toBe('a2 -> a4');

        route.removeAny('a4');
        expect(route.travelForward()).toBe('a2');
        expect(route.travelBarckwards()).toBe('a2');

        route.removeAny('a2');
        expect(route.travelForward()).toBe('');
        expect(route.travelBarckwards()).toBe('');
    });

    test('case with only one station, remove from head', () => {
        let route = new TrainRoute();

        route.addAtTheBeggining('a1');
        expect(route.travelForward()).toBe('a1');
        expect(route.travelBarckwards()).toBe('a1');

        route.removeFirst();
        expect(route.travelForward()).toBe('');
        expect(route.travelBarckwards()).toBe('');
    });

    test('case with only one station, remove from tail', () => {
        let route = new TrainRoute();

        route.addAtTheBeggining('a1');
        expect(route.travelForward()).toBe('a1');
        expect(route.travelBarckwards()).toBe('a1');

        route.removeLast();
        expect(route.travelForward()).toBe('');
        expect(route.travelBarckwards()).toBe('');
    });
});
