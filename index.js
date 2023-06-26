// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats
}

function appendCat(name) {
    const newCats = [...cats];
    newCats.push(name);
    return newCats
}

function prependCat(name) {
    const newerCats = [...cats];
    newerCats.unshift(name);
    return newerCats
}

function removeLastCat() {
    const lessCats = [...cats];
    lessCats.pop();
    return lessCats
}

function removeFirstCat() {
    const lesserCats = [...cats];
    lesserCats.shift();
    return lesserCats
}