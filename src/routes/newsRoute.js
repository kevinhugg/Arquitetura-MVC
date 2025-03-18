const newsController = require('../controllers/newsController');
const express = require('express');
const router = express.Router()


                // //Exporta uma função que recebe o objeto 'application' como parâmetro
                // //Essa função configura uma rota na aplicação
                // Module.exports = function(application){
                //     //Define uma rota HTTP - GET para a raiz da aplicação('/')
                //                             application.get('/'.function(req,res) {
                //                                 //Quando a rota raiz(root) é acessada, chama o método 'index' do controller 'news'
                //                                 //Passa 'application'. 'req' (requisição) e 'res' (resposta) para o método 'index'
                //                                 application.src.controllers.news.index(application, req, res);
                //                             });
                // } 


// router.get('/', newsController.newsRoute); // Executa a função do Controller para levar a pagina principal
// router.get('/', newsController.index);

router.get('/', newsController.exibirNoticias);

module.exports = router;