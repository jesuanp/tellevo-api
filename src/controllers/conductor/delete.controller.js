const {Conductor, Motocarro} = require('../../db/index.js');

module.exports = async (req, res) => {

    const {id} = req.params;

    try{

        let deleteConductor = Conductor.destroy({
            where: {
                id: id
            }
        });

        let deleteMotocarro = Motocarro.destroy({
            where: {
                conductorId: id
            }
        });

        await Promise.all([deleteConductor, deleteMotocarro]);

        res.json({deleted: true});
    }
    catch(e){
        console.log(e);
        res.status(404).json(e);
    }
}