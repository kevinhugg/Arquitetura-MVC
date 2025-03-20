//Importa o módulo 'express', que é um framework web para o node.js
const express = require('express');

//Criar uma instância do express
const app = express();

//Variavel para porta a ser utilizada
const PORT = 3000;

//variavel para o newsRoute
const newsRoute = require('./src/routes/newsRoute')

//Configura a engine de visualização como 'ejs' para rendenrizar arquivos .ejs
app.set('view engine', 'ejs');

//Entrega a pasta src como arquivo estático para funcionamento do CSS
app.use(express.static(__dirname + '/src'));

//Define o diretório onde estão localizadoas as views (template EJS)
app.set('views', './src/views');

//Página principal
app.use('/', newsRoute); 

//Passando a variavel PORT como porta
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});