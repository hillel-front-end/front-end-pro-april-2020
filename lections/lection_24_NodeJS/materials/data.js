function arraySum(source) {
    return source.reduce((prev, item) => prev + item);
}

function decorateObjects(listOfObjects){
    return listOfObjects.map(obj => {
        let newObj = obj;
        newObj.arraySum = arraySum;
        return newObj;
    })
}

module.exports = {
    value: 2000,
    // arraySum: arraySum
    arraySum,
    decorateObjects,
};
