const checkEmail = (email) => {
  //tulis kode logic kamu didalam blok ini ya
  // HINT => pake regex coba googling ya
  let alamat;
  let regex1 = /(\w+)@/;
  let regexAll = /(\w+)@[a-z]+(\.[a-z]+)?\.[a-z]{2,3}(\.[a-z]{2})?/;

  if (typeof email == "number") {
    alamat = `Error : ${email} email only contains numbers.  customize your email like "nadiaa1234@gmail.com"`;
  } else if (typeof email == null) {
    alamat = `Error : Email is required. You haven't entered email`;
  } else if (typeof email == "string") {
    if (email.match(regex1) == null) {
      alamat = `Error: Please include an '@' in the email address. ${email} is missing an '@'`;
    } else if (email.match(regexAll)) {
      alamat = "VALID";
    } else {
      alamat = "INVALID";
    }
  } else {
    alamat = `Error : Error : Email is required`;
  }
  return alamat;
};

// EXPECTED RESULT
// Ketika function tersebut dipanggil
console.log(checkEmail("apranata@binar.co.ic")); //OUTPUT yang keluar => "VALID"
console.log(checkEmail("apranata@binar.com")); //OUTPUT yang keluar => "VALID"
console.log(checkEmail("apranata@binar")); //OUTPUT yang keluar => "INVALID"
console.log(checkEmail("apranata")); //OUTPUT yang keluar => "ERROR: Jelaskan mengapa error dan kenapa"
console.log(checkEmail(3322)); //OUTPUT yang keluar => "ERROR: Jelaskan mengapa error dan kenapa"
console.log(checkEmail()); //OUTPUT yang keluar => "ERROR: Jelaskan mengapa error dan kenapa"
