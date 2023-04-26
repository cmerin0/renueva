import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { User } from "./User.js";

export const UserType = sequelize.define(
  "types_users",
  {
    id_type_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_user: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
  },
  {
    timestamps: false,
  }
);

UserType.hasMany(User, {
  foreinkey: "id_type_user",
  sourceKey: "id_type_user"
});

User.belongsTo(UserType, { 
  foreinkey: "id_type_user", 
  targetId: "id_type_user" 
});
