"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "regencies",
      [
        {
          province_id: 55,
          name: "KABUPATEN SIMEULUE",
        },
        {
          province_id: 55,
          name: "KABUPATEN ACEH SINGKIL",
        },
        {
          province_id: 55,
          name: "KABUPATEN ACEH SELATAN",
        },
        {
          province_id: 55,
          name: "KABUPATEN ACEH TENGGARA",
        },
        {
          province_id: 55,
          name: "KABUPATEN ACEH TIMUR",
        },
        {
          province_id: 55,
          name: "KABUPATEN ACEH TENGAH",
        },
        {
          province_id: 55,
          name: "KABUPATEN ACEH BARAT",
        },
        {
          province_id: 55,
          name: "KABUPATEN ACEH BESAR",
        },
        {
          province_id: 55,
          name: "KABUPATEN PIDIE",
        },
        {
          province_id: 55,
          name: "KABUPATEN BIREUEN",
        },
        {
          province_id: 55,
          name: "KABUPATEN ACEH UTARA",
        },
        {
          province_id: 55,
          name: "KABUPATEN ACEH BARAT DAYA",
        },
        {
          province_id: 55,
          name: "KABUPATEN GAYO LUES",
        },
        {
          province_id: 55,
          name: "KABUPATEN ACEH TAMIANG",
        },
        {
          province_id: 55,
          name: "KABUPATEN NAGAN RAYA",
        },
        {
          province_id: 55,
          name: "KABUPATEN ACEH JAYA",
        },
        {
          province_id: 55,
          name: "KABUPATEN BENER MERIAH",
        },
        {
          province_id: 55,
          name: "KABUPATEN PIDIE JAYA",
        },
        {
          province_id: 55,
          name: "KOTA BANDA ACEH",
        },
        {
          province_id: 55,
          name: "KOTA SABANG",
        },
        {
          province_id: 55,
          name: "KOTA LANGSA",
        },
        {
          province_id: 55,
          name: "KOTA LHOKSEUMAWE",
        },
        {
          province_id: 55,
          name: "KOTA SUBULUSSALAM",
        },
        {
          province_id: 56,
          name: "KABUPATEN JEMBRANA",
        },
        {
          province_id: 56,
          name: "KABUPATEN TABANAN",
        },
        {
          province_id: 56,
          name: "KABUPATEN BADUNG",
        },
        {
          province_id: 56,
          name: "KABUPATEN GIANYAR",
        },
        {
          province_id: 56,
          name: "KABUPATEN KLUNGKUNG",
        },
        {
          province_id: 56,
          name: "KABUPATEN BANGLI",
        },
        {
          province_id: 56,
          name: "KABUPATEN KARANG ASEM",
        },
        {
          province_id: 56,
          name: "KABUPATEN BULELENG",
        },
        {
          province_id: 56,
          name: "KOTA DENPASAR",
        },
        {
          province_id: 57,
          name: "KABUPATEN BANGKA",
        },
        {
          province_id: 57,
          name: "KABUPATEN BELITUNG",
        },
        {
          province_id: 57,
          name: "KABUPATEN BANGKA BARAT",
        },
        {
          province_id: 57,
          name: "KABUPATEN BANGKA TENGAH",
        },
        {
          province_id: 57,
          name: "KABUPATEN BANGKA SELATAN",
        },
        {
          province_id: 57,
          name: "KABUPATEN BELITUNG TIMUR",
        },
        {
          province_id: 57,
          name: "KOTA PANGKAL PINANG",
        },
        {
          province_id: 58,
          name: "KABUPATEN PANDEGLANG",
        },
        {
          province_id: 58,
          name: "KABUPATEN LEBAK",
        },
        {
          province_id: 58,
          name: "KABUPATEN TANGERANG",
        },
        {
          province_id: 58,
          name: "KABUPATEN SERANG",
        },
        {
          province_id: 58,
          name: "KOTA TANGERANG",
        },
        {
          province_id: 58,
          name: "KOTA CILEGON",
        },
        {
          province_id: 58,
          name: "KOTA SERANG",
        },
        {
          province_id: 58,
          name: "KOTA TANGERANG SELATAN",
        },
        {
          province_id: 59,
          name: "KABUPATEN BENGKULU SELATAN",
        },
        {
          province_id: 59,
          name: "KABUPATEN REJANG LEBONG",
        },
        {
          province_id: 59,
          name: "KABUPATEN BENGKULU UTARA",
        },
        {
          province_id: 59,
          name: "KABUPATEN KAUR",
        },
        {
          province_id: 59,
          name: "KABUPATEN SELUMA",
        },
        {
          province_id: 59,
          name: "KABUPATEN MUKOMUKO",
        },
        {
          province_id: 59,
          name: "KABUPATEN LEBONG",
        },
        {
          province_id: 59,
          name: "KABUPATEN KEPAHIANG",
        },
        {
          province_id: 59,
          name: "KABUPATEN BENGKULU TENGAH",
        },
        {
          province_id: 59,
          name: "KOTA BENGKULU",
        },
        {
          province_id: 60,
          name: "KOTA YOGYAKARTA",
        },
        {
          province_id: 60,
          name: "KABUPATEN BANTUL",
        },
        {
          province_id: 60,
          name: "KABUPATEN SLEMAN",
        },
        {
          province_id: 60,
          name: "KABUPATEN GUNUNGKIDUL",
        },
        {
          province_id: 60,
          name: "KABUPATEN KULON PROGO",
        },
        {
          province_id: 61,
          name: "KOTA JAKARTA SELATAN",
        },
        {
          province_id: 61,
          name: "KOTA JAKARTA TIMUR",
        },
        {
          province_id: 61,
          name: "KOTA JAKARTA PUSAT",
        },
        {
          province_id: 61,
          name: "KOTA JAKARTA UTARA",
        },
        {
          province_id: 61,
          name: "KOTA JAKARTA BARAT",
        },
        {
          province_id: 62,
          name: "KOTA GORONTALO",
        },
        {
          province_id: 62,
          name: "KABUPATEN GORONTALO",
        },
        {
          province_id: 63,
          name: "KOTA JAMBI",
        },
        {
          province_id: 63,
          name: "KABUPATEN TANJUNG JABUNG TIMUR",
        },
        {
          province_id: 63,
          name: "KABUPATEN TANJUNG JABUNG BARAT",
        },
        {
          province_id: 63,
          name: "KABUPATEN MUARO JAMBI",
        },
        {
          province_id: 63,
          name: "KABUPATEN BATANG HARI",
        },
        {
          province_id: 63,
          name: "KABUPATEN SAROLANGUN",
        },
        {
          province_id: 63,
          name: "KABUPATEN MERANGIN",
        },
        {
          province_id: 63,
          name: "KABUPATEN BUNGO",
        },
        {
          province_id: 63,
          name: "KABUPATEN TANJUNG JABUNG SELATAN",
        },
        {
          province_id: 64,
          name: "KOTA BANDUNG",
        },
        {
          province_id: 64,
          name: "KOTA BEKASI",
        },
        {
          province_id: 64,
          name: "KOTA BOGOR",
        },
        {
          province_id: 64,
          name: "KOTA CIMAHI",
        },
        {
          province_id: 64,
          name: "KOTA DEPOK",
        },
        {
          province_id: 64,
          name: "KOTA SUKABUMI",
        },
        {
          province_id: 64,
          name: "KOTA TASIKMALAYA",
        },
        {
          province_id: 64,
          name: "KABUPATEN BANDUNG",
        },
        {
          province_id: 64,
          name: "KABUPATEN BANDUNG BARAT",
        },
        {
          province_id: 64,
          name: "KABUPATEN BEKASI",
        },
        {
          province_id: 65,
          name: "KOTA SEMARANG",
        },
        {
          province_id: 65,
          name: "KOTA SURAKARTA",
        },
        {
          province_id: 65,
          name: "KOTA TEGAL",
        },
        {
          province_id: 65,
          name: "KABUPATEN BREBES",
        },
        {
          province_id: 65,
          name: "KABUPATEN CILACAP",
        },
        {
          province_id: 65,
          name: "KABUPATEN BANJARNEGARA",
        },
        {
          province_id: 65,
          name: "KABUPATEN KEBUMEN",
        },
        {
          province_id: 65,
          name: "KABUPATEN PURBALINGGA",
        },
        {
          province_id: 65,
          name: "KABUPATEN BANYUMAS",
        },
        {
          province_id: 65,
          name: "KABUPATEN KUDUS",
        },
        {
          province_id: 66,
          name: "KOTA SURABAYA",
        },
        {
          province_id: 66,
          name: "KOTA MALANG",
        },
        {
          province_id: 66,
          name: "KOTA MOJOKERTO",
        },
        {
          province_id: 66,
          name: "KABUPATEN SIDOARJO",
        },
        {
          province_id: 66,
          name: "KABUPATEN GRESIK",
        },
        {
          province_id: 66,
          name: "KABUPATEN LAMONGAN",
        },
        {
          province_id: 66,
          name: "KABUPATEN BANGKALAN",
        },
        {
          province_id: 66,
          name: "KABUPATEN MOJOKERTO",
        },
        {
          province_id: 66,
          name: "KABUPATEN JOMBANG",
        },
        {
          province_id: 66,
          name: "KABUPATEN MALANG",
        },
        {
          province_id: 67,
          name: "KOTA PONTIANAK",
        },
        {
          province_id: 67,
          name: "KOTA SINGKAWANG",
        },
        {
          province_id: 67,
          name: "KABUPATEN SAMBAS",
        },
        {
          province_id: 67,
          name: "KABUPATEN BENGKAYANG",
        },
        {
          province_id: 67,
          name: "KABUPATEN KAPUAS HULU",
        },
        {
          province_id: 67,
          name: "KABUPATEN LANDAK",
        },
        {
          province_id: 67,
          name: "KABUPATEN SEKADAU",
        },
        {
          province_id: 67,
          name: "KABUPATEN MELAWI",
        },
        {
          province_id: 67,
          name: "KABUPATEN KAYONG UTARA",
        },
        {
          province_id: 67,
          name: "KABUPATEN KUBU RAYA",
        },
        {
          province_id: 68,
          name: "KOTA BANJARMASIN",
        },
        {
          province_id: 68,
          name: "KOTA BANJARBARU",
        },
        {
          province_id: 68,
          name: "KABUPATEN TANAH LAUT",
        },
        {
          province_id: 68,
          name: "KABUPATEN TAPIN",
        },
        {
          province_id: 68,
          name: "KABUPATEN HULU SUNGAI SELATAN",
        },
        {
          province_id: 68,
          name: "KABUPATEN HULU SUNGAI TENGAH",
        },
        {
          province_id: 68,
          name: "KABUPATEN HULU SUNGAI UTARA",
        },
        {
          province_id: 68,
          name: "KABUPATEN TABALONG",
        },
        {
          province_id: 68,
          name: "KABUPATEN TANAH BUMBU",
        },
        {
          province_id: 68,
          name: "KABUPATEN BALANGAN",
        },
        {
          province_id: 69,
          name: "KOTA PALANGKA RAYA",
        },
        {
          province_id: 69,
          name: "KABUPATEN BARITO SELATAN",
        },
        {
          province_id: 69,
          name: "KABUPATEN BARITO UTARA",
        },
        {
          province_id: 69,
          name: "KABUPATEN KAPUAS",
        },
        {
          province_id: 69,
          name: "KABUPATEN KATINGAN",
        },
        {
          province_id: 69,
          name: "KABUPATEN KOTAWARINGIN BARAT",
        },
        {
          province_id: 69,
          name: "KABUPATEN KOTAWARINGIN TIMUR",
        },
        {
          province_id: 69,
          name: "KABUPATEN LAMANDAU",
        },
        {
          province_id: 69,
          name: "KABUPATEN MURUNG RAYA",
        },
        {
          province_id: 69,
          name: "KABUPATEN PULANG PISAU",
        },
        {
          province_id: 70,
          name: "KOTA BALIKPAPAN",
        },
        {
          province_id: 70,
          name: "KOTA SAMARINDA",
        },
        {
          province_id: 70,
          name: "KOTA BONTANG",
        },
        {
          province_id: 70,
          name: "KABUPATEN KUTAI KARTANEGARA",
        },
        {
          province_id: 70,
          name: "KABUPATEN BERAU",
        },
        {
          province_id: 70,
          name: "KABUPATEN PASER",
        },
        {
          province_id: 70,
          name: "KABUPATEN KUTAI BARAT",
        },
        {
          province_id: 70,
          name: "KABUPATEN KUTAI TIMUR",
        },
        {
          province_id: 70,
          name: "KABUPATEN PENAJAM PASER UTARA",
        },
        {
          province_id: 70,
          name: "KABUPATEN MAHAKAM ULU",
        },
        {
          province_id: 71,
          name: "KABUPATEN BULUNGAN",
        },
        {
          province_id: 71,
          name: "KABUPATEN MALINAU",
        },
        {
          province_id: 71,
          name: "KABUPATEN NUNUKAN",
        },
        {
          province_id: 71,
          name: "KABUPATEN TANA TIDUNG",
        },
        {
          province_id: 72,
          name: "KOTA BATAM",
        },
        {
          province_id: 72,
          name: "KOTA TANJUNG PINANG",
        },
        {
          province_id: 72,
          name: "KABUPATEN BINTAN",
        },
        {
          province_id: 72,
          name: "KABUPATEN KARIMUN",
        },
        {
          province_id: 72,
          name: "KABUPATEN LINGGA",
        },
        {
          province_id: 72,
          name: "KABUPATEN NATUNA",
        },
        {
          province_id: 73,
          name: "KOTA BANDAR LAMPUNG",
        },
        {
          province_id: 73,
          name: "KOTA METRO",
        },
        {
          province_id: 73,
          name: "KABUPATEN LAMPUNG SELATAN",
        },
        {
          province_id: 73,
          name: "KABUPATEN LAMPUNG TENGAH",
        },
        {
          province_id: 73,
          name: "KABUPATEN LAMPUNG UTARA",
        },
        {
          province_id: 73,
          name: "KABUPATEN LAMPUNG BARAT",
        },
        {
          province_id: 73,
          name: "KABUPATEN TULANG BAWANG",
        },
        {
          province_id: 73,
          name: "KABUPATEN TANGGAMUS",
        },
        {
          province_id: 73,
          name: "KABUPATEN LAMPUNG TIMUR",
        },
        {
          province_id: 73,
          name: "KABUPATEN WAY KANAN",
        },
        {
          province_id: 74,
          name: "KOTA AMBON",
        },
        {
          province_id: 74,
          name: "KABUPATEN KEPULAUAN ARU",
        },
        {
          province_id: 74,
          name: "KABUPATEN MALUKU BARAT DAYA",
        },
        {
          province_id: 74,
          name: "KABUPATEN BURU",
        },
        {
          province_id: 74,
          name: "KABUPATEN MALUKU TENGAH",
        },
        {
          province_id: 74,
          name: "KABUPATEN SERAM BAGIAN BARAT",
        },
        {
          province_id: 74,
          name: "KABUPATEN SERAM BAGIAN TIMUR",
        },
        {
          province_id: 75,
          name: "KOTA TERNATE",
        },
        {
          province_id: 75,
          name: "KOTA TIDORE KEPULAUAN",
        },
        {
          province_id: 75,
          name: "KABUPATEN HALMAHERA UTARA",
        },
        {
          province_id: 75,
          name: "KABUPATEN HALMAHERA TENGAH",
        },
        {
          province_id: 75,
          name: "KABUPATEN HALMAHERA TIMUR",
        },
        {
          province_id: 75,
          name: "KABUPATEN HALMAHERA SELATAN",
        },
        {
          province_id: 75,
          name: "KABUPATEN KEPULAUAN SULA",
        },
        {
          province_id: 75,
          name: "KABUPATEN HALMAHERA BARAT",
        },
        {
          province_id: 75,
          name: "KABUPATEN HALMAHERA SELATAN",
        },
        {
          province_id: 76,
          name: "KOTA MATARAM",
        },
        {
          province_id: 76,
          name: "KABUPATEN LOMBOK BARAT",
        },
        {
          province_id: 76,
          name: "KABUPATEN LOMBOK TENGAH",
        },
        {
          province_id: 76,
          name: "KABUPATEN LOMBOK TIMUR",
        },
        {
          province_id: 76,
          name: "KABUPATEN SUMBAWA",
        },
        {
          province_id: 76,
          name: "KABUPATEN DOMPU",
        },
        {
          province_id: 76,
          name: "KABUPATEN BIMA",
        },
        {
          province_id: 76,
          name: "KABUPATEN SUMBAWA BARAT",
        },
        {
          province_id: 77,
          name: "KOTA KUPANG",
        },
        {
          province_id: 77,
          name: "KABUPATEN TIMOR TENGAH SELATAN",
        },
        {
          province_id: 77,
          name: "KABUPATEN TIMOR TENGAH UTARA",
        },
        {
          province_id: 77,
          name: "KABUPATEN BELU",
        },
        {
          province_id: 77,
          name: "KABUPATEN ALOR",
        },
        {
          province_id: 77,
          name: "KABUPATEN FLORES TIMUR",
        },
        {
          province_id: 77,
          name: "KABUPATEN SIKKA",
        },
        {
          province_id: 77,
          name: "KABUPATEN ENDE",
        },
        {
          province_id: 77,
          name: "KABUPATEN NGADA",
        },
        {
          province_id: 77,
          name: "KABUPATEN MANGGARAI",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
