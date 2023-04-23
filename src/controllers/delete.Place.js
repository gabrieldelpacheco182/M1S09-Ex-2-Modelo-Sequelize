const Place = require('../../src/models/place')

async function deletePlace(request,response) {
    try {
        const id = request.params.id;
        const placeInDatabase = await Place.findByPk(id);

        if(!placeInDatabase){
        return response.status(404).json({message: 'Lugar não encontrado'});
    }
    await placeInDatabase.destroy();
    return response.status(204).json({message: 'Deletado com sucesso.'});

    } catch (error) {
        return response.status(500).json({message: 'Erro inesperado.'});
    }    
}
module.exports = deletePlace;