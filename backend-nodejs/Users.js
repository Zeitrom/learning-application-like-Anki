const Sequelize = require('sequelize');
const sequelize = require('../sequelize'); // Assurez-vous que le chemin est correct

const User = sequelize.define('User', {
    // Remplacez les attributs ci-dessous par ceux de votre table Users
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
    // Ajoutez d'autres attributs selon votre schéma de base de données
}, {
    // options
});

module.exports = User;
