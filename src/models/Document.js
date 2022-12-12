module.exports = (sequelize, DataTypes) => {

    return sequelize.define('document', {
        documentNumber: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        documentType: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        dateExp: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        countryExp: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        cityExp: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    });
}
