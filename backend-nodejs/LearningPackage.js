const Sequelize = require('sequelize');
const sequelize = require('../sequelize'); 

const LearningPackage = sequelize.define('LearningPackage', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    targetAudience: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    difficultyLevel: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    // options
});

module.exports = LearningPackage;
