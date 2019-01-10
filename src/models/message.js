const message = (sequelize, DataTypes) => {
    const Message = sequelize.define('message',{
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      authorId:{
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },);
  
    Message.associate = models => {
      Message.belongsTo(models.user);
    };
  
    return Message;
  };
  
  export default message;