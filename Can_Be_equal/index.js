var canBeEqual = function (target, arr) {
    target = target.sort((a, b) => a - b)
    arr = arr.sort((a, b) => a - b)

    return arr.every((ele, i) => target === arr[i])

}
