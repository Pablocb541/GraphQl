const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Usuario {
    id: ID!
    nombre: String!
    apellido: String!
    correoElectronico: String!
    pais: String
    fechaNacimiento: String!
    telefono: Int!
    verificado: Boolean!
    codigoUnico: String!
  }

  type UsuarioRestringido {
    id: ID!
    nombreCompleto: String!
    pin: String!
    avatar: String!
    edad: Int!
    userId: String!
  }

  type Video {
    id: ID!
    name: String
    youtubeUrl: String
    descripcion: String
    userId: String
  }

  type Playlist {
    id: ID!
    name: String!
    associatedProfiles: [Usuario]
    videos: [Video]
  }

  type Query {
    usuarios: [Usuario]
    usuario(id: ID!): Usuario
    usuariosRestringidos: [UsuarioRestringido]
    usuarioRestringido(id: ID!): UsuarioRestringido
    videos: [Video]
    video(id: ID!): Video
    playlists: [Playlist]
    playlist(id: ID!): Playlist
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      correoElectronico: String!
      pais: String
      fechaNacimiento: String!
      telefono: Int!
      codigoUnico: String!
    ): Usuario

    crearUsuarioRestringido(
      nombreCompleto: String!
      pin: String!
      avatar: String!
      edad: Int!
      userId: String!
    ): UsuarioRestringido

    crearVideo(
      name: String
      youtubeUrl: String
      descripcion: String
      userId: String
    ): Video

    crearPlaylist(
      name: String!
      associatedProfiles: [ID]
      videos: [ID]
    ): Playlist
  }
`;

module.exports = typeDefs;