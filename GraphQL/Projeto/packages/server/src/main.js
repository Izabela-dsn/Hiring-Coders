import express from 'express'
import cors from 'cors'
import { ApolloServer, gql } from 'apollo-server-express'
import typeDefs from './graphql/typeDefs'

const server =  new ApolloServer({ 
  typeDefs,
  resolvers
})


await server.start()
const app = express()
app.use(cors())

server.applyMiddleware({
  app,
  cors: {
    origin: 'http://localhost:3000 '
  }
})

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`)
})

/*
// rota que retorna status de okay
server.get('/status', (_, response) => {
  response.send({ status: 'Okay' })
})

const enableCors = cors({
  origin: 'http://localhost:3000 '
})

server
  .options('/authenticate', enableCors)
  .post('/authenticate', enableCors, express.json(), (request, response) => {
    console.log('E-mail', request.body.email, 'Senha', request.body.password)
    response.send({
      Okay: true
    })
  })
*/
