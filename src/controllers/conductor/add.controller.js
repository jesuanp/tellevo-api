const {Conductor} = require('../../db/index.js');

module.exports = async (req, res) => {

    const {firstName, lastName, phoneNumber, cedula, address, photo, license} = req.body;

    try{

        const newConductor = await Conductor.create({
            firstName,
            lastName,
            phoneNumber,
            cedula,
            address,
            photo,
            license
        });

        res.json(newConductor);
    }
    catch(e){
        console.log(e);
        res.status(404).send(e);
    }


}