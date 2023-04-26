const Place = require("../models/place");//importando o arquivo que possui todos os itens que formam a tabela.

async function createPlace(request,response) {//função assicrona, pois necessito atraves do await esperar as informações serem colocadas ao banco de dados.
    try {// usei try e catch para tratar minhas requisições e respostas.
        const place = {//varaivel recebendo as informações pelo body
            name: request.body.name,
            phone: request.body.phone,
            openingHours: request.body.openingHours,
            description: request.body. description,
            latitude: request.body.latitude,
            longitude: request.body.longitude,
        };
            const newPlace = await Place.create(place)
            return  response.status(201).json(newPlace);// retornando o resultado da criação do dado na tabela place

    } catch (error) {//Erro generico.
        return response.status(500).json({message: "Não foi possivel processar solicitação"})
    }
}

module.exports = createPlace;// exportando variavel a qual vai ser usada em outros lugares da API.