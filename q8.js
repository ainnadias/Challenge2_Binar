const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

  const getInfoPenjualan = (dataPenjualan) => {
    //tulis kode logic kamu didalam blok ini yaa
    let totalKeuntungan = 0 
    let totalModal = 0
    let persentaseKeuntungan 
    let penulisTerlaris = 0
    let produkBukuTerlaris = 0

      dataPenjualan.
  }
  
  //EXPECTED RESULT 
  //Ketika function tersebut dipanggil dengan variabel dataPenjualanPakAldi

  console.log(getInfoPenjualan(dataPenjualanNovel));
  //EXPECTED OUTPUT => OBJECT dengan format seperti yang disebutkan diatas











/*BERIKUT ADALAH CONTOH PROJECT YANG HARUS DI RETURN PADA FUNCTION YANG AKAN KAMU BUAT
SEMUA VALUE PADA PROPERTI OBJECT INI ADALAH CONTOH DATA SAJA, 
JADI ITU BUKAN HASIL PERHITUNGAN YANG SEBENERNYA */

/*PADA PROPERTI totalKeuntungan dan totalModal, NILAI YANG DIHASILKAN HARUS DALAM
BERUPA FORMAT RUPIAH, CONTOH totalKeuntungan 14650000 DIJADIKAN FORMAT RUPIAH
MENJADI Rp. 14. 650.000 */
// {
//     totalKeuntungan: 'Rp. 10.000.000', //Harus dalam format rupiah
//     totalModal: 'Rp. 6.000.000', //Harus dalam format rupiah
//     persentaseKeuntungan: '60%', // Persentasi keuntungan berdasarkan totalModal dan totalJual
//     produkBukuTerlaris : 'BUKU TERLARIS BERDASARKAN DATA DIATAS', //namaProduct yang paling banyak dijual
//     penulisTerlaris : 'PENULIS TERLARIS BERDASARKAN DATA DIATAS' // nama penulis yang bukunya paling banyak dijaul
// }