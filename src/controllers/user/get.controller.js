const {User} = require('../../db/index.js');

module.exports = {
    getAll: async (req, res) => {

        try{
    
            const users =  await User.findAll();
        
            res.status(200).json(users);
        }
        catch(e){
            console.log(e);
            res.status(404).send(e);
        }
    },

    getById: async (req, res) => {

        const {id} = req.params;

        try{
    
            const response = await User.findByPk(id);
        
            res.status(200).json(response);
        }
        catch(e){
            console.log(e);
            res.status(404).send(e);
        }
    }
}
