
const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
      },
    });
  
    User.associate = models => {
      User.hasMany(models.message );
    };
  
    return User;
  };
  
  export default user;

  // { onDelete: 'CASCADE' }