function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // elemen ditemukan, kembalikan indeksnya
        } else if (arr[mid] < target) {
            low = mid + 1; // cari di separuh kanan array
        } else {
            high = mid - 1; // cari di separuh kiri array
        }
    }

    return -1; // elemen tidak ditemukan
}

// Test dengan sample test case
const arr1 = [1, 3, 5, 7, 9];
const target = 5;
console.log(binarySearch(arr1, target)); // Output: 2 (indeks elemen 5 dalam array)

