const Place = require("../../src/models/place");


async function updatePlace(request,response) {
    try {
        const {id} = request.params;
        const {
            name,
            phone,
            openingHours,
            description,
            latitude,
            longitude,
        } = request.body;

        const idExisting = await Place.findByPk(id);

        if (!idExisting) {
            return response.statu(404).json({message: "Lugar não encontrado."})
        }
        
        const latitudeExisting = await Place.findOne({
            where: {
                latitude,
            },
        });

        if (latitudeExisting) {
            const place = await Place.findByPk(id);
            place.name = name;
            place.phone = phone,
            place.openingHours = openingHours;
            place.description = description;
            place.latitude = latitude;
            place.longitude = longitude;
            
            const placeUpdate = await place.save();
            
            return response.status(409).json({ message: "Feito." });
            

            response.status(200).json({message: 'Alteração feita com sucesso.'})

/*         }else{ */
        }
        
    } catch (error) {
        return response.status(400).json({ message: "Não possivel processar a solicitacao" });
    }
}

module.exports = updatePlace;