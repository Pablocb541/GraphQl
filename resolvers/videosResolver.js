const { Video } = require('../model/videosModel');

const videoResolvers = {
  Query: {
    video: async (_, { id }) => {
      try {
        const video = await Video.findById(id);
        return video;
      } catch (error) {
        throw new Error(`Error al buscar el video: ${error}`);
      }
    },
  },
};

module.exports = videoResolvers;
