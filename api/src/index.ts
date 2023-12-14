import express, { json } from 'express'
import mongoose from 'mongoose'
import http from 'node:http'
import path from 'node:path'
import { router } from './router'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
export const io = new Server(server)

mongoose.connect('mongodb://localhost:27017')
  .then(res => {
    const port = 3001

    app.use((req, res, next) => {
      res.setHeader('access-control-allow-origin', '*')
      res.setHeader('access-control-allow-methods', '*')
      res.setHeader('access-control-allow-headers', '*')
      next()
    })
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    app.use(json())
    app.use(router)

    app.get('/', (req, res) => {
      res.send('<h1>Welcome to WaiterApp api</h1>')
    })

    server.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`)
    })
  })
  .catch(err => { console.log('error ao conectar ao mongo') })
