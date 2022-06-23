// const Sequelize = require('sequelize');

// require('dotenv').config();
// let sequelize;
// if(process.env.JAWSDB_URL) {
//   sequelize=new sequelize(process.env.JAWSDB_URL);

// } else {
//   sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3006
//   });
// }
const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
