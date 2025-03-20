//Cria a variavel para utilizar a exportação da função exibitNoticias do newsModel
const { carregarDados } = require('../models/newsModel');

//Função para exibição das notícias na view Index
function exibirNoticias(req, res) {
    carregarDados((err, noticias) => {
        //Em caso de erro:
        if (err) {
            return res.status(500).send("Erro ao carregar as notícias.");
        }
        
        //Se não, passa as notícias como um objeto para o EJS
        res.render('index', { carregarDados: noticias });
    });
}

//Exportação da função para o Models
module.exports = { exibirNoticias };