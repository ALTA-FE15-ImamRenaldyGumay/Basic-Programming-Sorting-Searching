console.log("Soal 2 - Binary Search")
interface Karyawan {
    id: number;
    name: string;
}
function pencarianBiner(arr: Karyawan[], targetId: number): Karyawan | null {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid].id === targetId) {
            return arr[mid]; // objek ditemukan, kembalikan indeksnya
        } else if (arr[mid].id < targetId) {
            low = mid + 1; // cari di separuh kanan array
        } else {
            high = mid - 1; // cari di separuh kiri array
        }
    }

    return null; // objek tidak ditemukan
}

// Test dengan sample test case
const dataKaryawan: Karyawan[] = [
    { id: 101, name: "Rani"},
    { id: 102, name: "Andi"},
    { id: 103, name: "Budi"},
    { id: 104, name: "Cindy"},
    { id: 105, name: "Dodi"},
    { id: 106, name: "Eka"}
];
const targetId = 106;
const foundPerson = pencarianBiner(dataKaryawan, targetId);
if (foundPerson !== null) {
    console.log("ID:", foundPerson.id);
    console.log("Name:", foundPerson.name);
} else {
    console.log("Person not found.");
}