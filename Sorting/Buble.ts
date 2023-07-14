function bubbleSort(arr: number[]): number[] {
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
const arr = [4, 2, 7, 1, 5];
console.log(bubbleSort(arr)); // Output: [1, 2, 4, 5, 7]
