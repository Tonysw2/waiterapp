import path from 'node:path'
import express, { json } from 'express'
import mongoose from 'mongoose'
import { router } from './router'

mongoose.connect('mongodb://localhost:27017')
  .then(res => {
    const app = express()
    const port = 3001

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    app.use(json())
    app.use(router)

    app.get('/', (req, res) => {
      res.send('<h1>Welcome to WaiterApp api</h1>')
    })

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`)
    })
  })
  .catch(err => { console.log('error ao conectar ao mongo') })
