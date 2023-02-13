// o meu banco de dados não quer saber o que é value object, para ele pouco importa
// a forma como eu vou oersistir a modelagem de banco de dados, para o dominio pouco importa também
// o que não podemos fazer é modeloar o dominio pensando no banco de dados
// sendo que na verdade nos devemos modelar nosso banco de dados pensando no dominio
import {
    Table,
    Model,
    PrimaryKey,
    Column
  } from "sequelize-typescript";

  @Table({
    tableName: "customers",
    timestamps: false,
  })
  export default class CustomerModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;
  
    @Column({ allowNull: false })
    declare name: string;
  
    @Column({ allowNull: false })
    declare street: string;
  
    @Column({ allowNull: false })
    declare number: number;
  
    @Column({ allowNull: false })
    declare zipcode: string;
  
    @Column({ allowNull: false })
    declare city: string;
  
    @Column({ allowNull: false })
    declare active: boolean;
  
    @Column({ allowNull: false })
    declare rewardPoints: number;
  }