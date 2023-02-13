// aqui nos vamos implementar os modelos do nosso orm
// que ira representar nosso modelo de dados que fará relação com tabela do banco de dados
import { Table, Model, PrimaryKey, Column } from "sequelize-typescript";

@Table({
  tableName: "products",
  timestamps: false,
})
export default class ProductModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;

  @Column({ allowNull: false })
  declare name: string;

  @Column({ allowNull: false })
  declare price: number;
}

