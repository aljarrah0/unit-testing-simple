divid = (x, y) => {

    if (x === 0 && y !== 0)
        return `Invaild`;
    if (x !== 0 && y === 0) return `NotAllowed`;
    if (x === 0 && y === 0) return `NotAllowed`;
    return x / y;
}


canDivid = (x, y, res) => {
    console.log(`----> It can divid ${x} by ${y} to be equal to ${res}.`);
    if (divid(x, y) === res) {
        console.log(`Succeed`);
    } else {
        console.error(`Faild`);
    }
}

canDivid(12, 2, 6);
canDivid(0, 1, `Invaild`);
canDivid(1, 0, `NotAllowed`);
canDivid(0, 0, `NotAllowed`);