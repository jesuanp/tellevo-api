const {User} = require('../../db/index.js');

module.exports = async (req, res) => {

    const {id} = req.params;
    const {firstName, lastName, phoneNumber, cedula} = req.body;

    try{

        const user = await User.findOne({
            where: {
                id: id
            }
        });

        user.firstName = firstName ? firstName : user.firstName;
        user.lastName = lastName ? lastName : user.lastName;
        user.phoneNumber = phoneNumber ? phoneNumber : user.phoneNumber;
        user.cedula = cedula ? cedula : user.cedula;

        await user.save();

        res.json(user);

    }catch(e){
        console.log(e);
        res.status(404).json(e);
    }
}
