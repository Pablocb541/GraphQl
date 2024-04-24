const UsuarioRestringido = require('../../BackEnd/models/perfilesModel');
const Playlist = require('../../BackEnd/models/playlistsModel');
const Registro = require('../../BackEnd/models/registrosModel');
const Video = require('../../BackEnd/models/videosModel');

const resolvers = {
  Query: {
    usuarioRestringido: async (_, { id }) => {
      return await UsuarioRestringido.findById(id);
    },
    playlist: async (_, { id }) => {
      return await Playlist.findById(id);
    },
    registro: async (_, { id }) => {
      return await Registro.findById(id);
    },
    video: async (_, { id }) => {
      return await Video.findById(id);
    },
  },
};

module.exports = resolvers;
