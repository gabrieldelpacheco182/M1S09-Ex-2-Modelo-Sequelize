const Place = require("../../src/models/place");


async function updatePlace(request,response) {
    try {
        const id = await Place.findByPk(request.params.id)

        if((!id)){
            return response.status(404).json({message: 'Lugar não encontrado no banco de dados.'})
        }

        id.name = request.body.name
        id.phone = request.body.phone
        id.openingHours = request.body.openingHours
        id.description = request.body.description
        id.latitude = request.body.latitude
        id.longitude = request.body.longitude
        await id.save()
        response.status(200).json(id)
    } catch (error) {
        response.status(500).json({message: 'Não possivel processar a solicitacao'})
    }
}

module.exports = updatePlace;
