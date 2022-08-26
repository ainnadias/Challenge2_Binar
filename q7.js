const dataPenjualanPakAldi = [
    {
        namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },

    {
        namaProduct : 'Sepatu Warrior Trsitan Black Brown High - Original',
        hargaSatuan : 960000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37,
    },

    {
        namaProduct : 'Sepatu Warrior Trsitan Maroon High - Original',
        hargaSatuan : 360000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },

    {
        namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original',
        hargaSatuan : 120000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
]

function getTotalPenjualan(dataPenjualanPakAldi) { 
    //tulis kode logic kamu didalam blok ini ya
    let total;

    total = dataPenjualanPakAldi.reduce((val, element) => {
        return val + element.totalTerjual
    }, 0)

    return total;

};
    /*EXPECTED RESULT
    Ketika function tersebut dipanggil dengan variabel dataPenjualanPakAldi */

    console.log(getTotalPenjualan(dataPenjualanPakAldi))
    /*EXPECTED RESULT =>307
    307 dari mana? dari setiap value propert 'totalTerjual', yaitu 90 + 37 + 90 + 90 */


