module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('conductor', {
        firstName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        cedula: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        photo: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        license: {
            type: DataTypes.TEXT,
            unique: true
        }
    })
}