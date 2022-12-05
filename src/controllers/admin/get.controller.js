const {Admin} = require('../../db/index.js');

module.exports = {
    getAll: async (req, res) => {

        try{
    
            const admins =  await Admin.findAll();
        
            res.status(200).json(admins);
        }
        catch(e){
            console.log(e);
            res.status(404).send(e);
        }
    },

    getById: async (req, res) => {

        const {id} = req.params;

        try{
    
            const response = await Admin.findByPk(id);
        
            res.status(200).json(response);
        }
        catch(e){
            console.log(e);
            res.status(404).send(e);
        }
    }
}
