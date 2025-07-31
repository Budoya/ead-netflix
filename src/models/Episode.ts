// src/models/Episode.ts

import { DataTypes, Model, Optional } from 'sequelize'
import { database } from '../database'

export interface Episode {
  id: number
  name: string
  synopsis: string
  order: number
  videoUrl: string
  secondsLong: number
  courseId: number
}

export interface EpisodeCreationAttributes
  extends Optional<Episode, 'id' | 'videoUrl' | 'secondsLong'> {}

export interface EpisodeInstance
  extends Model<Episode, EpisodeCreationAttributes>, Episode {}

export const Episode = database.define<EpisodeInstance, Episode>('Episode', {
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
    type: DataTypes.INTEGER, // ALTERADO de STRING para INTEGER, pois 'order' é numérico
  },
  videoUrl: {
    type: DataTypes.STRING,
    field: 'video_url',
  },
  secondsLong: {
    type: DataTypes.INTEGER,
    field: 'seconds_long',
  },
  courseId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'courses',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    field: 'course_id',
  },
}, {
  tableName: 'episodes', // Garante que o Sequelize use o nome correto da tabela
  underscored: true,     // Para manter os nomes snake_case no banco
})
