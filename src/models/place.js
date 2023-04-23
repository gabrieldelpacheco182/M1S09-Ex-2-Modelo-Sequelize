const Sequelize = require("sequelize");//importando Sequelize para fazer o intermedio com o banco
const connection = require('../database');//importando connection para dar acesso o banco

const Place = connection.define("place", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,//gera id automaticament
        primaryKey: true
    },
    name: {//nome
        type: Sequelize.STRING,
        allownull: false//obrigado a preencher o campo
    },
    phone:{//telefone
        type: Sequelize.STRING,
        allownull: false//obrigado a preencher o campo
    },
    openingHours: {//horario de funcionamento
        type: Sequelize.STRING,
        allownull: false//obrigado a preencher o campo
    },
    description: {//descrição do local
        type: Sequelize.STRING,
        allownull: false//obrigado a preencher o campo
    },
    latitude: {
        type: Sequelize.STRING,
        allownull: false//obrigado a preencher o campo
    },
    longitude: {
        type: Sequelize.STRING,
    allownull: false//obrigado a preencher o campo 
    }
});

module.exports = Place;