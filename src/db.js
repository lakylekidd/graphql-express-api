// Import requirements
const Sequelize = require('sequelize');

// Define database url and initialize sequelize
const databaseUrl = 'postgres://postgres:secret@localhost:5432/postgres';
const sequelize = new Sequelize(databaseUrl);

// Configure Sequelize
sequelize
    .sync()
    .then(() => console.log('Database schema updated'))
    .catch(console.error);

// Export sequelize
module.exports = sequelize;