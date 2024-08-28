import { AllowNull, Column, DataType, Table, Model } from "sequelize-typescript";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "users"
})

export class User extends Model {
  @Column({
    type: DataType.STRING(50),
    allowNull: false
  })
  loginId: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  password: string;
}