import express from 'express'
import { database } from './database'
import { adminJs, adminJsRouter } from './adminjs'

const app = express()
const PORT = process.env.PORT || 3000

app.use(adminJs.options.rootPath, adminJsRouter)

app.listen(PORT, async () => {
  try {
    await database.authenticate()
    await database.sync()
    console.log(`DB conectado e sincronizado com sucesso.`)
    console.log(`AdminJS rodando em http://localhost:${PORT}${adminJs.options.rootPath}`)
  } catch (error) {
    console.error('Erro ao conectar com o banco:', error)
  }
})
