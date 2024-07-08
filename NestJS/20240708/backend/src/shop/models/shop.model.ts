// 테이블 구조

import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';

@Table({
    timestamps: true,
    paranoid: true,
    tableName: "shops", 
})
export class Shop extends Model {
    // @Table 시퀄라이즈 객체의 매핑

    // @Column
    // 컬럼 이름 : 데이터 타입

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.INTEGER
    })
    price: number;

    // @ForeignKey(() => User)
    // @Column
    // userId: number

    // @BelongsTo(() => User)
    // user: User;
}

// export class User extends Model {
//     @Column({
//         type: DataType.STRING,
//         allowNull: false
//     })
//     name: string;

//     @Column({
//         type: DataType.INTEGER
//     })
//     age: number;

//     @HasMany(() => Shop)

// }