const getSplitName = (givenNumber) => {
  //tulis kode logic kamu didalam blok ini ya
  let nama;

  if (typeof givenNumber !== "string") {
    nama = "Error: This input only accepts string data types!";
  } 
  else {
    let splitName = givenNumber.split(" ");

    if (splitName.length >= 4) 
    {
      nama = "This function is only for 3 characters name !";
    } 
    else if (splitName.length >= 2) 
    {
      let [firstName, lastName = null, middleName = null] = splitName;
      nama = { firstName, middleName, lastName };
    } 
    else 
    {
      let [firstName, middleName = null, lastName = null] = splitName;
      nama = { firstName, middleName, lastName };
    }
  }
  return nama;
};

//EXPECTED RESULT
//Ketika Function tersebut dipanggil

console.log(getSplitName("Aldi Daniela Pranata"));
/*EXPECTED OUTPUT: 
{firstName: 'Aldi, middleName: 'Daniela', lastName: 'Pranata'} */

console.log(getSplitName("Dwi Kuncoro"));
/*EXPECTED OUTPUT: 
{firstName: 'Dwi, middleName: 'null', lastName: 'Kuncoro'} */

console.log(getSplitName("Aurora"));
/*EXPECTED OUTPUT: 
{firstName: 'Aurora', middleName: 'null', lastName: 'null'} */

console.log(getSplitName("Aurora Aureliya Sukma Darma"));
/*EXPECTED OUTPUT: 
This function is only for 3 characters name */

console.log(getSplitName(0));
/*EXPECTED OUTPUT: 
ERORR : Temen temen jelasin kenapa */
