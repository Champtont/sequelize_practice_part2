import { DataTypes, SMALLINT } from "sequelize";
import sequelize from "../../db.js";

const ReviewsModel = sequelize.define("review", {
  reviewId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    validate: {
      is: SMALLINT > 0 && SMALLINT <= 5,
    },
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default ReviewsModel;
