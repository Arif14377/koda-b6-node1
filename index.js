const fs = require("fs")

namaArtis = ["Wali", "Bondan Prakoso", "Tipe-X", "ST-12", "Ungu"]

namaArtis.forEach(artis => {
    fs.mkdir(artis, function(err, path){})
});