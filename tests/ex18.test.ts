import { TrainRoute } from "../exercises/medium/excercise-18";

describe("double linked lists", () => {
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
    });

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
    });
});