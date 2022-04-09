const dbConfig= require("../config/config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.server,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.subjective = require("./subjective")(sequelize, Sequelize);
db.objective= require("./objective")(sequelize, Sequelize);
db.admin = require('./admin')(sequelize,Sequelize)
module.exports = db;