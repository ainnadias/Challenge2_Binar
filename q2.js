const checkTypeNumber = (givenNumber) => {
    let angka;
    if (typeof givenNumber == "number") {
        angka = givenNumber % 2 == 0 ? "GENAP" : "GANJIL";
    } else if (givenNumber == null) {
        angka = "Error : Bro where is the parameter? ";
    } else {
        angka = "Error : Invalid Data Type";
    }
    return angka;
};

// EXPECTED RESULT 
// Ketika function tersebut dipanggil
console.log(checkTypeNumber(10)) //OUTPUT yang keluar => "GENAP"
console.log(checkTypeNumber(3)) //OUTPUT yang keluar => "GANJIL"
console.log(checkTypeNumber("3")) // OUTPUT yang keluar => "Eror: Invalid data type"
console.log(checkTypeNumber({})) // OUTPUT yang keluar => "Eror: Invalid data type"
console.log(checkTypeNumber([])) // OUTPUT yang keluar => "Eror: Invalid data type"
console.log(checkTypeNumber()) //OUTPUT yang keluar => "Error: Bro where is the parameter?"