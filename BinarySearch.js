const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function binarySearch(arr, value) {
    let midIndex = Math.round(arr.length / 2)
    let startIndex = 0
    let endIndex = arr.length
    console.log (startIndex, endIndex, startIndex !== endIndex)
        
    while ((startIndex !== endIndex) + 1){
        if (value === arr[midIndex]){
            return arr[midIndex]
        }
        
        if (value < arr[midIndex]){
            endIndex = midIndex - 1
            midIndex = Math.round((startIndex + endIndex) / 2)
            if (midIndex === startIndex){
                return null
            }
        }

        if (value > arr[midIndex]){
            startIndex = midIndex   
            midIndex = Math.round((startIndex + endIndex) / 2)
            if (midIndex === endIndex){
                return null
            }
        }
        console.log(midIndex, startIndex, endIndex)
    }
}

const a = binarySearch(sortedArr, 1000)
console.log(a)
