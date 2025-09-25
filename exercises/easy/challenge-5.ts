export function isLeapYear(year: number): boolean {
    switch (true) {
        case (year % 100 === 0) && (year % 400 === 0):
            return true;
        case year % 4 === 0:
            return true;
    }
    return false;
}