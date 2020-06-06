var busyStudent = function (startTime, endTime, queryTime) {
    let pointerOne = 0;
    let pointerTwo = 0;
    let busyStudent = 0;

    while (pointerOne < endTime.length && pointerTwo < endTime.length) {
        if (startTime[pointerOne] <= queryTime && endTime[pointerTwo] >= queryTime) {
            busyStudent++;
        }
        pointerOne++;
        pointerTwo++;
    }
    return busyStudent;
};

module.exports = busyStudent;