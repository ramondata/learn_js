#! /usr/bin/env node

const fs = require('fs');
const archiver = require('archiver')

const output = fs.createWriteStream(`teste_file.zip`);

const file = archiver('zip', {
    zlib: { level: 9 }
});

output.on('close', () => {
    console.log(`Arquivo criado com sucesso`);
});

file.pipe(output);
file.file("file_file.csv.txt", { name: "file_file.csv" });
file.finalize();