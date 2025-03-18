const fs = require('fs');
const path = require('path')
const noticiasPath = path.join(__dirname, '../data/noticias.json');

// console.log(noticias) AQUI FUNCIONA

// fs.readFile(noticias, function(err, data){
//     writeHead(200,{'Content-Type': 'text/json'});
//     write(data)
// })

function carregarDados(callback) {
    fs.readFile(noticiasPath, 'UTF-8', (err, dados) => {
        if (err) {
            return callback(err, null);
        }

        try {
            // Parse o JSON e verifique se é um objeto
            const noticias = JSON.parse(dados);

            // Certifique-se de que 'noticias' é um objeto e tem a propriedade 'noticias' (um array)
            if (noticias && noticias.noticias && Array.isArray(noticias.noticias)) {
                callback(null, noticias.noticias);  // Retorna o array de notícias
            } else {
                callback(new Error("Dados não estão no formato esperado."), null);
            }
        } catch (error) {
            callback(error, null);
        }
    })
} 

    // const dados = {}
    // console.log(dados);
    // return JSON.parse(dados);

// console.log(dados);

module.exports = {
    carregarDados
}





// exports.getNoticias = () => {
//     return noticias;
// }