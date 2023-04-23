const Place = require("../../src/models/place")

async function findAllPlace(request,response) {
    try {
       const place = await Place.findAll();
       response.status(200).json(place);
    } catch (error) {
        return response.status(500).json({message: 'Erro inesperado'})
    }
}
module.exports = findAllPlace;