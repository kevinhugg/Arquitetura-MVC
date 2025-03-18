// // const { application } = require("express");

// const { carregarDados } = require('../models/newsModel');

//                     // //exporta a função index, deixando disponível para ser usada em outras partes do projeto
//                     // module.exports.index = function(application, req, res) {

//                     //     //cria uma ionstância de módulo news que será usado para acessar os dados da notícia
//                     //     var newsModel = new application.src.models.news();

//                     //     //chama o método getlastnews do modelo news model para buscar as últimas notícias, esse próximo método recebe a funçãode callback que será executada após a consulta ser concluída

//                     //     newsModel.getLastNews(function(err,result){
                            
//                     //         //se a consulta der certo, o result terá as notícias recuperadas do ''Banco de dados'', o método res.render é utilizado para rendenrizar a views - news/index e passa as notícias obtidas nos results para a view, onde será exibita para o usuário
//                     //         res.render("news/index", {news : result});
//                     //     });
//                     // }
// // console.log(application)

// // const CaminhoNewsModel = require('../models/newsModel');
                    
// // // Leva a página inicial
// // module.exports.index = function(req, res) {
// //     CaminhoNewsModel.carregarDados(function(err, result){
// //         res.render('index', { dados: result });
// //     })
    
// // }

// function exibirNoticias(req, res) {
//     carregarDados((err, noticias) => {
//         if (err) {
//             return res.status(500).send("Erro ao carregar as notícias.");
//         }

//         // Passa os dados para a view
//         res.render('index', { carregarDados: noticias });
//     });
// }

// console.log(carregarDados)
// module.exports = { exibirNoticias };

const { carregarDados } = require('../models/newsModel');

function exibirNoticias(req, res) {
    carregarDados((err, noticias) => {
        if (err) {
            return res.status(500).send("Erro ao carregar as notícias.");
        }
        
        // Passa as notícias como um objeto para o EJS
        res.render('index', { carregarDados: noticias });
    });
}

module.exports = { exibirNoticias };