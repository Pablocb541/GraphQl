const { gql } = require('apollo-server');

const typeDefs = gql`

  # UsuarioRestringido Schema
type UsuarioRestringido {
  id: ID!
  nombreCompleto: String!
  pin: String!
  avatar: String!
  edad: Int!
  userId: String
}

# Playlist Schema
type Playlist {
  id: ID!
  name: String!
  associatedProfiles: [UsuarioRestringido]!
  videos: [Video]!
}

# Registro Schema
type Registro {
  id: ID!
  nombre: String!
  apellido: String!
  contrasena: String!
  pin: Int!
  correoElectronico: String!
  pais: String
  fechaNacimiento: String!
  telefono: Int!
  verificado: Boolean!
  codigoUnico: String!
}

# Video Schema
type Video {
  id: ID!
  name: String
  youtubeUrl: String
  descripcion: String
  userId: String
}

# Query
# Query
type Query {
  usuarioRestringido(id: ID!): UsuarioRestringido
  playlist(id: ID!): Playlist
  registro(id: ID!): Registro
  video(id: ID!): Video
}



`;

module.exports = typeDefs;
