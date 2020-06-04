// let selectionSort = function(arr){

//     /*
//         create a variable to hold the smallest value
//         loop through the arr 
//     */
// }

// console.log(selectionSort([45,3,67,1,9,100,25,4]))


function bubbleSort(arr) {
    let noSwaps = true;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}

console.log(bubbleSort([12, 4, 25, 100, 35]))