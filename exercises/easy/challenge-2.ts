export function oneFor(name?: string): string {
    let who = name && name.length > 0 ? name : 'you';
    return `One for ${who}, one for me`;
}