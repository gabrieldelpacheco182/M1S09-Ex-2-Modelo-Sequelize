const express = require('express');//importando express
const connection = require('./src/database/index');//importando variavel que da acesso ao servidor.

    //Variavie de importação
const createPlace = require('./src/controllers/createPlace');

const app = express();//variavel recebendo os poderes de express

app.use(express.json());//para retornar os status

//----Criando rotas----
app.post('/api/places', createPlace);

    //----Atualizando automaticament cada alteração no servidor.----
connection.sync({alter:true});

    //----Criando a porta do servidor----
app.listen(2222,() =>{
    console.log("Servidor online");//teste interno para saber que servidor esta funcionando
});