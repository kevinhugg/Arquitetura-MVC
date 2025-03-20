//Importação de módulos
const fs = require('fs');
const path = require('path')
//Definição do caminho do arquivo JSON
const noticiasPath = path.join(__dirname, '../data/noticias.json');


function carregarDados(callback) {
    //Lê o arquivo json no formato UTF-8
    fs.readFile(noticiasPath, 'UTF-8', (err, dados) => {
        //Se houver erro, passa o erro para o callback e retorna
        if (err) {
            return callback(err, null);
        }
        try {
            //Parse o JSON e verifique se é um objeto
            const noticias = JSON.parse(dados);

            //Certifica que 'noticias' é um objeto e tem a propriedade 'noticias' (um array)
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

//Exportação do módulo para uso do controller
module.exports = {
    carregarDados
}