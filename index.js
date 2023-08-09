let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}

function appendCat(name) {
    let newArr = [...cats, name];
    return newArr;
}

function prependCat(name) {
    let newArr = [name, ...cats];
    return newArr;
}

function removeLastCat() {
    let newArr = [...cats];
    newArr.pop();
    return newArr;
}

function removeFirstCat() {
    let newArr1 = [...cats];
    newArr1.shift();
    return newArr1;
}