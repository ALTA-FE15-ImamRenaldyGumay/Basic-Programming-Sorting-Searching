console.log("Soal 1 - Bubble Sort")
function mengurutBuble(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elemen jika elemen saat ini lebih besar dari elemen berikutnya
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// Test dengan sample test case
const dd = [80, 65, 90, 75, 85, 70, 95, 60]
console.log(mengurutBuble(dd))