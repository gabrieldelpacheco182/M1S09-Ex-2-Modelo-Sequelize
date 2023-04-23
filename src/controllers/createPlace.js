const Place = require("../models/place");

async function createPlace(request,response) {
    try {
        const place = {
            name: request.body.name,
            phone: request.body.phone,
            openingHours: request.body.openingHours,
            description: request.body. description,
            latitude: request.body.latitude,
            longitude: request.body.longitude,
        };

        const existingLatitude = await Place.findOne({
            where: {
                latitude: request.body.latitude
            }
        });
        if(!existingLatitude){
            
            const newPlace = await Place.create(place)
            return  response.status(201).json(newPlace);
        }else{
            response.status(409).json({message: 'Lugar já cadastrado no banco'})
        }

    } catch (error) {
        return response.status(500).json({message: error.message})
    }
}

module.exports = createPlace;