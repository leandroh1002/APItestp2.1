const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Persona', {
      id:{
         type: DataTypes.INTEGER,
         allowNull:false,
         primaryKey: true,
         autoIncrement: true
      },
      Nombre:{
         type: DataTypes.STRING,
         allowNull:false,
      },
      DNI: {
         type: DataTypes.INTEGER,
         allowNull:false
      },
      FechaDeNacimiento: {
         type: DataTypes.DATE,
         allowNull:false
      }
   }, { timestamps: false });
};
