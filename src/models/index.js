
import Sequelize from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, 
    {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    // operatorsAliases: false,
    // pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
});

const models = {
    User: sequelize.import('./user'),
    Message: sequelize.import('./message'),
  };
  
  Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });
  
  export { sequelize };
  
  export default models;