const fs = require("fs")

namaArtis = ["Wali", "Bondan Prakoso", "Tipe-X", "ST-12", "Ungu"]

fs.mkdir("Music", function(err, path){})

namaArtis.forEach(artis => {
    fs.mkdir(`./Music/${artis}`, function(err, path){})
    // console.log(artis)
});