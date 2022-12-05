const {Motocarro} = require('../../db/index.js');

module.exports = async (req, res) => {

    const {id} = req.params;

    try{

        await Motocarro.destroy({
            where: {
                id: id
            }
        });

        res.json({deleted: true});
    }
    catch(e){
        console.log(e);
        res.status(404).json(e);
    }
}