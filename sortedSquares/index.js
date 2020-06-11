var sortedSquares = function (A) {
    let newArray = A.map(num => {
        return num ** 2
    })
    return newArray.sort((a, b) => a - b)
};