const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {

    id: {
      primaryKey: true,
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate:{
        notNull:{
          msg:'El campo no puede ser nulo'
        },
        isAlpha: {
          args:true,
          msg:'El nombre sólo puede contener letras'
        },
        len:{
          args:[3,25],
          msg:'el nombre debe ser entre 3 y 25 caracteres'
        },
      }
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull:{
          msg:'El campo no puede ser nulo'
        },
        isInt: {
          args: true,
          msg:'La vida debe ser un número'
        },
      }
    },
    attack : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull:{
          msg:'El campo no puede ser nulo'
        },
        isInt: {
          args: true,
          msg:'La fuerza debe ser un número'
        },
      }
    },
    defense:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull:{
          msg:'El campo no puede ser nulo'
        },
        isInt: {
          args: true,
          msg:'La fuerza debe ser un número'
        },
      }
    },
    speed:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull:{
          msg:'El campo no puede ser nulo'
        },
        isInt: {
          args: true,
          msg:'La fuerza debe ser un número'
        },
      }
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull:{
          msg:'El campo no puede ser nulo'
        },
        isInt: {
          args: true,
          msg:'La Altura debe ser un número'
        }
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull:{
          msg:'El campo no puede ser nulo'
        },
        isInt: {
          args: true,
          msg:'El Peso debe ser un número'
        },
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg:'Este campo no puede ser nulo'
        }
      }
    },
    createdDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};
