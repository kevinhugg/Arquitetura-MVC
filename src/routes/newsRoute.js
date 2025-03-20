//Importação dos módulos
const newsController = require('../controllers/newsController');
const express = require('express');
//Criação do roteador
const router = express.Router()

//Defini a rota do Index já chamando a função exibirNoticias
router.get('/', newsController.exibirNoticias);

//Exportação do Roteador
module.exports = router;