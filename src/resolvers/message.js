
import uuidv4 from 'uuid/v4';

export default {
  Query: {
    messages: async (parent, args, { models }) => {
      return await models.Message.findAll();
    },
    message: async (parent, { id }, { models }) => {
      return await models.Message.findById(id);
    },
  },

  Mutation: {
    createMessage: async (parent, { text, authorId }, { models }) => {
      return await models.Message.create({
        text,
        authorId: authorId,
      });
    },
    updateMessage: async (parent ,{ content, id}, info)=>
      models.Message.update({
        content,
      },{
        where:{
          id:id
        }
      }),
    deleteMessage: async (parent, { id }, { models }) => {
      return await models.Message.destroy({ where: { id } });
    },
  },

  Message: {
    user: async (message, args, { models }) => {
      return await models.User.findById(message.userId);
    },
  },
};