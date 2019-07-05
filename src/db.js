// Import requirements
const Sequelize = require('sequelize');

// Define database url and initialize sequelize
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres';
const sequelize = new Sequelize(databaseUrl);

// Configure Sequelize without sync
sequelize
    .sync()
    .then(() => console.log('Database schema updated'))
    .catch(console.error);

// Export sequelize
module.exports = sequelize;