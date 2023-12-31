// sequelize.config.ts
import { Sequelize } from 'sequelize';
import './models';

const connectionInfo = {
  database: 'LearningAppDB',
  username: 'postgres',
  password: process.env.DB_PASSWORD || 'deauville', // Use process.env to get the password from an environment variable
  host: 'localhost',
  dialect: 'postgres', // Replace with your database dialect (e.g., 'mysql' or 'sqlite')
};

const sequelize = new Sequelize(connectionInfo);

async function initializeSequelize() {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

initializeSequelize();

export { connectionInfo, sequelize };
