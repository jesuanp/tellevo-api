module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('motocarro', {
        placa: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        fotosMotocarro: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    })
}