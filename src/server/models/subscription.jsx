import { sequelize, Sequelize } from './sequelize-loader.jsx'

export const Subscription = sequelize.define('subscription', {
    endpoint: {
      type: Sequelize.STRING,
      allowNull: false
    },
    auth: {
      type: Sequelize.STRING,
      allowNull: false
    },
    p256dh: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)
