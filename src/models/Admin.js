module.exports = (sequelize, DataTypes) => {

    return sequelize.define('admin', {
        userName: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
}