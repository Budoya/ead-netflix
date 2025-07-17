import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 42069,
  database: 'EAD-NETFLIX',
  username: 'budas',
  password: 'BUDAS',
  define: {
    underscored: true
  }
})
