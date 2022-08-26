function getAngkaTerbesarKedua(dataNumbers) {
  //tulis kode logic kamu di dalam blok ini ya
  if (Array.isArray(dataNumbers) && dataNumbers.length >= 2) {
    let angka = new Set(
      dataNumbers
        .sort((a, b) => {
          return a - b;
        })
        .reverse()
    );

    return Array.from(angka)[1];
  }

  return "Invalid input ! Numerical data is required !";
}

//EXPECTED RESULT
//Ketika function tersebut dipanggil

const dataAngka = [9, 4, 7, 7, 4, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
//EXPECTED OUTPUT :
//8

console.log(getAngkaTerbesarKedua(0));
//EXPECTED OUTPUT :
//ERROR: (kamu jelasin apa dan kenapa)

console.log(getAngkaTerbesarKedua());
//EXPECTED OUTPUT :
//ERROR: (kamu jelasin apa dan kenapa)
