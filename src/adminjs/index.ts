import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import { Database, Resource } from '@adminjs/sequelize'  // só importe assim
import { database } from '../database'
import { DataTypes, Model } from 'sequelize'

// registrar adaptador assim:
AdminJS.registerAdapter({ Database, Resource })

// Definir modelos

class Category extends Model {
  declare id: number
  declare name: string
  declare position: number
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    position: DataTypes.INTEGER,
  },
  {
    sequelize: database,
    modelName: 'category',
    underscored: true,
  }
)
//verificar
class Episode extends Model {
  declare id: number
  declare name: string
  declare synopsis: string
  declare order: number
  declare videoUrl?: string
  declare secondsLong?: number
  declare courseId: number
}
// verificar 
Episode.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    synopsis: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    order: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    secondsLong: {
      type: DataTypes.INTEGER,
      field: 'seconds_long',
      allowNull: true,
    },
    courseId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'course_id',
      references: { model: 'courses',key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
  },
  {
    sequelize: database,
    modelName: 'Episode',
    tableName: 'episodes',
    underscored: true,
    timestamps: false,
  }
)



class Course extends Model {
  declare id: number
  declare name: string
  declare synopsis?: string
  declare featured?: boolean
  declare categoryId?: number
}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: database,
    modelName: 'course',
    underscored: true,
  }
)

// Criar instância AdminJS

const adminJs = new AdminJS({
  databases: [database],
  rootPath: '/admin',
  resources: [
    { resource: Course },
    { resource: Category},
    { resource: Episode}
  ],
  branding: {
    companyName: 'budoyas',
    logo: '/ead-netflix.svg',
    theme: {
      colors: {
        primary100: '#ff0043',
        primary80: '#ff1a57',
        primary60: '#ff3369',
        primary40: '#ff4d7c',
        primary20: '#ff668f',
        grey100: '#151515',
        grey80: '#333333',
        grey60: '#4d4d4d',
        grey40: '#666666',
        grey20: '#dddddd',
        filterBg: '#333333',
        accent: '#151515',
        hoverBg: '#151515',
      }
    }
  }
})

const adminJsRouter = AdminJSExpress.buildRouter(adminJs)

export { adminJs, adminJsRouter }
