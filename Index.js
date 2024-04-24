const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const resolvers = require('./GraphQl/resolvers');

const typeDefs = gql`
  type UsuarioRestringido {
    _id: ID!
    nombreCompleto: String!
    pin: String!
    avatar: String!
    edad: Int!
    userId: String
  }

  type Playlist {
    _id: ID!
    name: String!
    associatedProfiles: [Usuario]
    videos: [Video]
  }

  type Registro {
    _id: ID!
    nombre: String!
    apellido: String!
    
    pin: Int!
    correoElectronico: String!
    pais: String
    fechaNacimiento: String!
    telefono: Int!
    verificado: Boolean!
    codigoUnico: String!
  }

  type Video {
    _id: ID!
    name: String!
    youtubeUrl: String!
    descripcion: String
    userId: String
  }

  type Query {
    usuarioRestringido(id: ID!): UsuarioRestringido
    playlist(id: ID!): Playlist
    registro(id: ID!): Registro
    video(id: ID!): Video
  }
`;

mongoose.connect('mongodb://localhost:27017/tu_basedatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Servidor GraphQL listo en ${url}`);
});
