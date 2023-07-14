console.log("Searching Build In")
function BuildInSearch(arr: Array<number>, target: number): number{
    const result: number = arr.indexOf(target)
    return result
}

const rand: number[] = [11, 45, 60, 10, 22, 34, 56]
console.log(BuildInSearch(rand, 56))