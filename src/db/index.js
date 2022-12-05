require('dotenv').config();
const { Sequelize, DataTypes, Op } = require('sequelize');
const modelUser = require('../models/User.js');
const modelMotocarro = require('../models/Motocarro.js');
const modelConductor = require('../models/Conductor.js');
const modelAdmin = require('../models/Admin.js');

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false
});

modelUser(sequelize, DataTypes);
modelMotocarro(sequelize, DataTypes);
modelConductor(sequelize, DataTypes);
modelAdmin(sequelize, DataTypes);

const {user, motocarro, conductor, admin} = sequelize.models;

conductor.hasMany(motocarro);
motocarro.belongsTo(conductor);

module.exports = {
    User: user,
    Motocarro: motocarro,
    Conductor: conductor,
    Admin: admin,
    db: sequelize,
    Op
};
