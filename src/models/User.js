module.exports = (sequelize, DataTypes) => {

    return sequelize.define('user', {
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
        }
    });
}
