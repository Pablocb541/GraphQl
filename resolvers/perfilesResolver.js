const { UsuarioRestringido } = require('../model/perfilesModel');

const usuarioRestringidoResolvers = {
  Query: {
    usuarioRestringido: async (_, { id }) => {
      try {
        const usuarioRestringido = await UsuarioRestringido.findById(id);
        return usuarioRestringido;
      } catch (error) {
        throw new Error(`Error al buscar el usuario restringido: ${error}`);
      }
    },
  },
};

module.exports = usuarioRestringidoResolvers;
