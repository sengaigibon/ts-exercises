// Given an age in seconds, calculate how old someone is in terms of a given planet's solar years.

// This was the first approach:
type Planet = {name: string, earthYears: number};
const Planets: Array<Planet> = [
    { name:"Mercury", earthYears: 0.2408467 },
    { name:"Venus", earthYears: 0.61519726 },
    { name:"Earth", earthYears: 1.0 },
    { name:"Mars", earthYears: 1.8808158 },
    { name:"Jupiter", earthYears: 11.862615 },
    { name:"Saturn", earthYears: 29.447498 },
    { name:"Uranus", earthYears: 84.016846 },
    { name:"Neptune", earthYears: 164.79132 },
];

// But I like more this one:
const orbitRatio: Record<string, number> = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132 
}

export const secondsInEarthYear: number = 31_557_600;

export function getAge(ageInSeconds: number, planetName: string): number {

    let thisPlanet = Planets.find(planet => {
        return planet.name === planetName
    })

    if (typeof(thisPlanet) === 'undefined') {
        return 0;
    }

    let ageInYears: number = ageInSeconds / secondsInEarthYear;

    return Math.round(ageInYears / thisPlanet.earthYears * 100) / 100;
}

export function getAge2(ageInSeconds: number, planetName: string): number {
    let ratio: number = orbitRatio[planetName] ?? 0;
    if (!ratio) {
        return 0;
    }

    let ageInYears: number = ageInSeconds / secondsInEarthYear;

    return Math.round(ageInYears / ratio * 100) / 100;
}