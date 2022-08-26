const isValidPassword = (givenPassword) => {
  //tulis kode logic kamu didalam blok ini ya
  let regexAll = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  let regexSmall = /^(?=.*[a-z])/;
  let regexCapital = /^(?=.*[A-Z])/;
  let regexNumber = /^(?=.*[0-9])/;
  let regexMin = /^(?=.{8,})/;
  let pass;

  if (typeof givenPassword !== "string") {
    pass = "ERROR : Password is required !";
  } else {
    switch (true) {
      case regexCapital.test(givenPassword) == false:
        pass = false;
        break;

      case regexSmall.test(givenPassword) == false:
        pass = false;
        break;

      case regexMin.test(givenPassword) == false:
        pass = false;
        break;

      case regexNumber.test(givenPassword) == false:
        pass = false;
        break;

      case regexAll.test(givenPassword):
        pass = true;
        break;

      default:
        pass = "ERROR : Password is required !";
        break;
    }
  }

  return pass;
};

//EXPECTED RESULT

//Ketika Function tersebut dipanggil
console.log(isValidPassword("Meong2021"));
//EXPECTED OUTPUT => true

/*(Karena memenuhi requirement, Meong 2021 terdiri dari 8 huruf, 
    ada huruf besar, ada huruf kecil, ada angka) */

console.log(isValidPassword("meong2021"));
// EXPECTED OUTPUT => false (karena meong2021 tidak ada huruf besar)

console.log(isValidPassword("@eong"));
// EXPECTED OUTPUT => false (karena tidak ada angka dan terdiri hanya 5 huruf)

console.log(isValidPassword("Meong2"));
// EXPECTED OUTPUT => false (karena Meong2 hanya 6 huruf)

console.log(isValidPassword(0));
// EXPECTED OUTPUT => ERROR: (Teman - teman jelasin ini eror nya apa dan kenapa)

console.log(isValidPassword());
//EXPECTED OUTPUT => ERROR: (Teman- teman jelasinini eror nya apa dan kenapa)
