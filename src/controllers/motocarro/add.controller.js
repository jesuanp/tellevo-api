const {Motocarro} = require('../../db/index.js');

module.exports = async (req, res) => {

    const {placa, fotosMotocarro, conductorId} = req.body;

    try{

        const newMotocarro = await Motocarro.create({
            placa,
            fotosMotocarro,
            conductorId
        });

        res.json(newMotocarro);
    }
    catch(e){
        console.log(e);
        res.status(404).send(e);
    }
}