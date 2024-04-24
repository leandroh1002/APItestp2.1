require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const PersonaModel = require ('./models/Persona')

// Recuerda pasarle la información de tu archivo '.env'.
// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/persona`, // donde se conecta postgres
   { logging: false, native: false }
);
// Debajo de este comentario puedes ejecutar la función de los modelos.
PersonaModel(sequelize);

// ¡Relaciona tus modelos aquí abajo!
const { Persona } = sequelize.models;
// User.belongsToMany(Favorite, {through : "userFavorite"})
// Favorite.belongsToMany(User, {through : "userFavorite"})

module.exports = {
   Persona,
   conn: sequelize,
};
