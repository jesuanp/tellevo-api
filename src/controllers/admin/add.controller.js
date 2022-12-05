const {Admin} = require('../../db/index.js');

module.exports = async (req, res) => {

    const {userName} = req.body;

    try{

        const newAdmin = await Admin.create({
            userName
        });

        res.json(newAdmin);
    }
    catch(e){
        console.log(e);
        res.status(404).send(e);
    }
}