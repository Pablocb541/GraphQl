const { Playlist, UsuarioRestringido, Video } = require('../model/playlistsModel');

const playlistResolvers = {
  Query: {
    playlist: async (_, { id }) => {
      try {
        const playlist = await Playlist.findById(id);
        return playlist;
      } catch (error) {
        throw new Error(`Error al buscar la playlist: ${error}`);
      }
    },
  },
  Playlist: {
    associatedProfiles: async (playlist) => {
      const associatedProfiles = await UsuarioRestringido.find({ _id: { $in: playlist.associatedProfiles } });
      return associatedProfiles;
    },
    videos: async (playlist) => {
      const videos = await Video.find({ _id: { $in: playlist.videos } });
      return videos;
    },
  },
};

module.exports = playlistResolvers;