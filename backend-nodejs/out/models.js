"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.User = exports.UserLearningFact = exports.UserPackageLearning = exports.LearningPackage = exports.LearningFact = void 0;
const sequelize_1 = require("sequelize");
const sequelize_config_1 = require("./sequelize.config");
const sequelize = new sequelize_1.Sequelize(Object.assign(Object.assign({}, sequelize_config_1.connectionInfo), { dialect: 'postgres' }));
exports.sequelize = sequelize;
// LearningFact Model
class LearningFact extends sequelize_1.Model {
    static associate(models) {
        LearningFact.belongsTo(models.LearningPackage, {
            foreignKey: 'learningPackageId',
            onDelete: 'CASCADE',
        });
    }
}
exports.LearningFact = LearningFact;
LearningFact.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    content: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    creationDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    learningPackageId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'LearningPackages',
            key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'LearningFact',
});
// LearningPackage Model
class LearningPackage extends sequelize_1.Model {
}
exports.LearningPackage = LearningPackage;
LearningPackage.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    targetAudience: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    difficultyLevel: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 20,
        },
    },
}, {
    sequelize,
    modelName: 'LearningPackage',
});
// UserPackageLearning Model
class UserPackageLearning extends sequelize_1.Model {
}
exports.UserPackageLearning = UserPackageLearning;
UserPackageLearning.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    startDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    expectedEndDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    minutesPerDayObjective: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    learningPackageId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'UserPackageLearning',
});
// UserLearningFact Model
class UserLearningFact extends sequelize_1.Model {
}
exports.UserLearningFact = UserLearningFact;
UserLearningFact.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    timesReviewed: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    confidenceLevel: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    lastReviewedDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    learningFactId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    userPackageLearningId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'UserLearningFact',
});
// User Model
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'User',
});
