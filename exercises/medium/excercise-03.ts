// Implement a binary search algorithm.

// The algorithm looks like this:

// Find the middle element of a sorted list and compare it with the item we're looking for.
// If the middle element is our item, then we're done!
// If the middle element is greater than our item, we can eliminate that element and all the elements after it.
// If the middle element is less than our item, we can eliminate that element and all the elements before it.
// If every element of the list has been eliminated then the item is not in the list.
// Otherwise, repeat the process on the part of the list that has not been eliminated.

export function find(list: number[], elem: number): number | null {

    list.sort((a, b) => a - b);

    return subFind(list, elem)
}

function subFind(list: number[], elem: number): number | null {

    let length: number = list.length;

    if (!length) { 
        return null;
    }

    let middle: number = Math.floor(length / 2);
    if (list[middle] === elem) {
        return elem;
    } else if (list[middle] > elem) {
        return subFind(list.slice(0, middle), elem);
    } else {
        return subFind(list.slice(middle + 1), elem);
    }
}
