function builtInSort(arr: Array<number>){
    const result = arr.sort((a, b) => {
        return a - b
    })
    return result
}

const randArr: Array<number> = [11, 20, 33, 44, 55, 66, 77, 22, 444, 55]
console.log(builtInSort(randArr))