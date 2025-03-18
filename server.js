//importa o módulo 'express', que é um framework web para o node.js
const express = require('express');

// //Importa o módulo 'consign' que é usado para autoload (autocarregamento) de scripts, facilitando o gerenciamento de rotas, models e controllers
// const consign = require('consign');

//criar uma instância do express
const app = express();

// Variavel para porta a ser utilizada
const PORT = 3000;

//configura a engine de visualização como 'ejs' para rendenrizar arquivos .ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/src'));

//define o diretório onde estão localizadoas as views (template EJS)
app.set('views', './src/views');

                                        // app.get('/', (req, res)=>{
                                        //     res.render('index')
                                        // })

const newsRoute = require('./src/routes/newsRoute')

app.use('/', newsRoute); // página principal

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});



// //configura o 'consign' para incluir automáticamente as rotas, models e controllers na aplicação
// consign()
//     .include('src/routes')  //inclui as rotas, carregando os arquivos da pasta 'src/routes'
//     .then('src/models') //inclui os models, carregando os arquivos da pasta 'src/models'
//     .then('src/controllers') //inclui os controllers, carregando os arquivos da pasta 'src/controllers'
//     .into(app); //injeta essas indeopendências na instância do express(app)