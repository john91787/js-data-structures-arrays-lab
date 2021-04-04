// Write your solution here!
const drivers = [`Milo`, `Otis`, `Garfield`]

function destructivelyAppendDriver(Ralph){
    drivers.push(Ralph);
}

function destructivelyPrependDriver(Bob){
    drivers.unshift(Bob);
}

function destructivelyRemoveLastDriver(Garfield){
    drivers.pop(Garfield);
}

function destructivelyRemoveFirstDriver(Milo){
    drivers.shift(Milo);
}

function appendDriver(Broom){
    const drivers2 = [...drivers, Broom];
    return drivers2;
}

function prependDriver(Arnold){
    const drivers3 = [Arnold, ...drivers];
    return drivers3;
}

function removeLastDriver(){
    const drivers4 = drivers.slice(0,2);
    return drivers4;
}

function removeFirstDriver(){
    const drivers5 = drivers.slice(1);
    return drivers5;
}