const {Conductor, Op} = require('../../db/index.js');

module.exports = async (req, res) => {

    const {id} = req.params;
    let {firstName, lastName, phoneNumber, cedula, address, photo, license} = req.body;

    try{

        let auxPhoneNumber = phoneNumber ? phoneNumber : '¡hello world!';
        let auxCedula = cedula ? cedula : '¡hello world!';
        let auxLicense = license ? license : '¡hello world!';

        // Conpruebo si ya existe otro conductor con los mismo datos
        const c2 = Conductor.findOne({
            where: {
                [Op.or]: [{phoneNumber: auxPhoneNumber}, {cedula: auxCedula}, {license: auxLicense}]
            }
        });

        const c1 = Conductor.findOne({
            where: {
                id: id
            }
        });

        const [conductor, conductor2] = await Promise.all([c1, c2]);

        if(conductor2){
            res.json({message: 'Los datos ingresados ya están en uso por otro conductor'});
            return;
        }

        conductor.firstName = firstName ? firstName : conductor.firstName;
        conductor.lastName = lastName ? lastName : conductor.lastName;
        conductor.phoneNumber = phoneNumber ? phoneNumber : conductor.phoneNumber;
        conductor.cedula = cedula ? cedula : conductor.cedula;
        conductor.address = address ? address : conductor.address;
        conductor.photo = photo ? photo : conductor.photo;
        conductor.license = license ? license : conductor.license;

        conductor.save();

        res.json(conductor);

    }catch(e){
        console.log(e);
        res.status(404).json(e);
    }
}
