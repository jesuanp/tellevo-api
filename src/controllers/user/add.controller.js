const {User} = require('../../db/index.js');

module.exports = async (req, res) => {

    const {firstName, lastName, phoneNumber, cedula} = req.body;

    try{

        const newUser = await User.create({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            cedula: cedula
        });
    
        res.status(200).send(newUser);
    }
    catch(e){
        console.log(e);
        res.status(404).send(e);
    }
}
