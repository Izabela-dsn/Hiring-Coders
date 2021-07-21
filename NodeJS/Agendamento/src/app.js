import express, { json } from 'express'
import routes from './router'

class App {
  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
  }

  //métodos
  middlewares() {
    this.server.use(json())
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server
