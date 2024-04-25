const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphqlSchema');

// Importar resolvers separados
const videoResolver = require('./resolvers/videosResolver');
const usuarioRestringidoResolver = require('./resolvers/perfilesResolver');
const registroResolver = require('./resolvers/registrosResolver');
const playlistResolver = require('./resolvers/playlistResolver');

require('dotenv').config();

const dbConectionString = process.env.DB_CONNECTION_STRING;

mongoose.connect(dbConectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Combinar resolvers
const resolvers = [
  videoResolver,
  usuarioRestringidoResolver,
  registroResolver,
  playlistResolver,
];

// Middleware para verificar el token en las solicitudes protegidas
function verifyToken(req, res, next) {
  if (req.headers["authorization"]) {
    const authToken = req.headers.authorization.split(" ")[1];
    try {
      jwt.verify(authToken, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err || !decodedToken) {
          return res.status(401).json({
            error: "Unauthorized",
          });
        }
        req.user = decodedToken;
        next();
      });
    } catch (e) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }
  } else {
    res.status(401);
    res.send({
      error: "Unauthorized ",
    });
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
