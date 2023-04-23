const Sequelize  = require ('sequelize');//importando sequelize


//----variavel usando a função de sequelize para acessar o banco postgres-
const connection = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'senai',
    port: 5432,
    database: 'api_places',
    define: {
        timestamps: true,
        underscored: true,
        undercoredAll: true,
    }
})

module.exports = connection;//exportando variavel que vai dar acesso ao servidor.