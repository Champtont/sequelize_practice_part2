import { DataType } from "sequelize";
import sequelize from "../../db";

const CategoriesModel = sequelize.define("category", {
  categoryId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.String,
    allowNull: false,
  },
});

export default CategoriesModel;
