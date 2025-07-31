// src/models/course.ts
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

// tipagem
export interface CourseAttributes {
  id: number;
  name: string;
  synopsis: string;
  thumbnailUrl?: string;
  featured?: boolean;
  categoryId: number;
}

export interface CourseCreationAttributes
  extends Optional<CourseAttributes, 'id' | 'thumbnailUrl' | 'featured'> {}

// classe que implementa
export class Course extends Model<CourseAttributes, CourseCreationAttributes> implements CourseAttributes {
  public id!: number;
  public name!: string;
  public synopsis!: string;
  public thumbnailUrl?: string;
  public featured?: boolean;
  public categoryId!: number;

  // se tiver associações, pode criar método estático aqui
  static associate(models: any) {
    // ex: this.belongsTo(models.Category, { foreignKey: 'categoryId' });
  }
}

// função de inicialização idempotente
export function initCourseModel(sequelize: Sequelize): typeof Course {
  if (sequelize.models.Course) {
    return sequelize.models.Course as typeof Course; // já registrado
  }

  Course.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      synopsis: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      thumbnailUrl: {
        type: DataTypes.STRING
      },
      featured: {
        defaultValue: false,
        type: DataTypes.BOOLEAN
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      }
    },
    {
      sequelize,
      tableName: 'courses',
      timestamps: false
    }
  );

  return Course;
}
