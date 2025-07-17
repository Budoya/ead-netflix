// src/server.ts

import express from 'express'
import { database } from './database'
import { adminJs, adminJsRouter } from './admimjs'

const app = express()

const PORT = process.env.port || 3000

app.use(express.static('public'))

app.use(adminJs.options.rootPath,adminJsRouter)

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log('DB connection successfull.')
  })

  console.log(`Server started successfuly at port ${PORT}.`)
})