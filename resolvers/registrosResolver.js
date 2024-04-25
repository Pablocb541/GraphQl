const { Registro } = require('../model/registrosModel');

const registroResolvers = {
  Query: {
    registro: async (_, { id }) => {
      try {
        const registro = await Registro.findById(id);
        return registro;
      } catch (error) {
        throw new Error(`Error al buscar el registro: ${error}`);
      }
    },
  },
};

module.exports = registroResolvers;
