import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const DB_CONNECTION = process.env.DB_CONNECTION

const sequelize = new Sequelize(DB_CONNECTION, { dialect: 'postgres'})

export { sequelize, Sequelize }
