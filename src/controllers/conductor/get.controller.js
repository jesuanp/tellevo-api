const {Conductor} = require('../../db/index.js');

module.exports = {
    getAll: async (req, res) => {

        try{
    
            const conductores =  await Conductor.findAll();
        
            res.status(200).json(conductores);
        }
        catch(e){
            console.log(e);
            res.status(404).send(e);
        }
    },

    getById: async (req, res) => {

        const {id} = req.params;

        try{
    
            const response = await Conductor.findByPk(id);
        
            res.status(200).json(response);
        }
        catch(e){
            console.log(e);
            res.status(404).send(e);
        }
    }
}
