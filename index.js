// Minitask node1
// membuat folder Music/artis

const fs = require("fs").promises

const data = [
    {
        namaArtis: "Wali",
        lagu: ["Ada-Gajah-Dibalik-Batu.mp3", "Nenekku-Pahlawanku.mp3", "Setia-Jujur-dan-Takwa.mp3", "Ya-Allah.mp3", "Yank.mp3"]
    },
    {
        namaArtis: "Bondan Prakoso",
        lagu: ["Bunga.mp3", "not-with-me.mp3", "RIP.mp3", "tetap-semangat.mp3", "yasudahlah.mp3"]
    },
    {
        namaArtis: "Tipe-X",
        lagu: ["Boyband.mp3", "Kamu-Ngga-Sendirian.mp3", "Mawar-Hitam.mp3", "Pria-Tampan.mp3", "Selamat-Jalan.mp3"]
    },
    {
        namaArtis: "ST-12",
        lagu: ["Isabella.mp3", "KebesaranMu.mp3", "memujaMu.mp3", "Puspa.mp3", "Putri-Iklan.mp3"]
    },
    {
        namaArtis: "Iwan Fals",
        lagu: ["Bento.mp3", "Bongkar.mp3", "Ibu.mp3", "Tikus-tikus-kantor.mp3", "Yang-Terlupakan.mp3"]
    },
]

fs.mkdir("./Music/", function(){})

for (i=0; i<data.length; i++) {
    let obj = data[i]
    let artis = obj.namaArtis
    let namaLagu = obj.lagu
    // console.log(artis)
    // console.log(namaLagu)
    
    fs.mkdir(`./Music/${artis}`, function(){})

    namaLagu.forEach(lagu => {
        console.log("ini lagu: ", lagu)
        fs.writeFile(`./Music/${artis}/${lagu}`, "")
    });
}