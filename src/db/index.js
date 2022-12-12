require('dotenv').config();
const { Sequelize, DataTypes, Op } = require('sequelize');
const modelUser = require('../models/User.js');
const modelMotocarro = require('../models/Motocarro.js');
const modelConductor = require('../models/Conductor.js');
const modelAdmin = require('../models/Admin.js');
const modelDocument = require('../models/Document.js');

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  })

modelUser(sequelize, DataTypes);
modelMotocarro(sequelize, DataTypes);
modelConductor(sequelize, DataTypes);
modelAdmin(sequelize, DataTypes);
modelDocument(sequelize, DataTypes);

const {user, motocarro, conductor, admin, document} = sequelize.models;

// Relacion uno a uno
document.hasOne(user);
user.belongsTo(document);

// Relación unos a muchos. Muchos motocarros pueden perteneser a una persona
conductor.hasMany(motocarro);
motocarro.belongsTo(conductor);

module.exports = {
    User: user,
    Motocarro: motocarro,
    Conductor: conductor,
    Document: document,
    Admin: admin,
    db: sequelize,
    Op
};
