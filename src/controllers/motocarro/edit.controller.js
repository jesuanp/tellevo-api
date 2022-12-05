const {Motocarro} = require('../../db/index.js');

module.exports = async (req, res) => {

    const {id} = req.params;
    const {placa, fotosMotocarro} = req.body;

    try{

        const motocarro = await Motocarro.findOne({
            where: {
                id: id
            }
        });

        motocarro.placa = placa ? placa : motocarro.placa;
        motocarro.fotosMotocarro = fotosMotocarro ? fotosMotocarro : motocarro.fotosMotocarro;

        await motocarro.save();

        res.json(motocarro);

    }catch(e){
        console.log(e);
        res.status(404).json(e);
    }
}
