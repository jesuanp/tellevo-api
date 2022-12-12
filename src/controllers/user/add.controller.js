const {User, Document} = require('../../db/index.js');

module.exports = async (req, res) => {

    const {
        firstName,
        lastName,
        phoneNumber,
        documentNumber,
        documentType,
        dateExp,
        countryExp,
        cityExp
    } = req.body;

    const arrayData = [firstName, lastName, phoneNumber, documentNumber, documentType, dateExp, countryExp, cityExp]

    // Valido que nungun dato venga vacio
    for(let i = 0; i < arrayData.length; i++){
        if(arrayData[i] === undefined || arrayData[i].trim() === ''){
            return res.status(404).json({message: 'Faltan parametros'})
        }
    }

    try{
        const findUser = User.findOne({
            where: {
                phoneNumber
            }
        });
        const findDocument = Document.findOne({
            where: {
                documentNumber
            }
        });

        const [u, d] = await Promise.all([findUser, findDocument]);

        // Valido que no exista un usuario con el mismo numero de telefono o la misma cedula
        if(u || d){
            return res.status(404).json({message: 'Ya existen estos datos dentro de la base de datos'});
        }

        const newUser = User.create({
            firstName,
            lastName,
            phoneNumber,
        });

        const newDocument = Document.create({
            documentNumber,
            documentType,
            dateExp,
            countryExp,
            cityExp
        });

        const [user, document] = await Promise.all([newUser, newDocument]);

        user.documentId = document.id;
        await user.save();
    
        res.status(200).send({user, document});
    }
    catch(e){
        return res.status(404).json(e);
    }
}
