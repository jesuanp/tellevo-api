const {Motocarro, Conductor} = require('../../db/index.js');

module.exports = {
    getAll: async (req, res) => {

        try{
    
            const motocarros =  await Motocarro.findAll({
                include: [{model: Conductor}]
            });
        
            res.status(200).json(motocarros);
        }
        catch(e){
            console.log(e);
            res.status(404).send(e);
        }
    },

    getById: async (req, res) => {

        const {id} = req.params;

        try{
    
            const response = await Motocarro.findByPk(id, {
                include: [{model: Conductor}]
            });
        
            res.status(200).json(response);
        }
        catch(e){
            console.log(e);
            res.status(404).send(e);
        }
    }
}
