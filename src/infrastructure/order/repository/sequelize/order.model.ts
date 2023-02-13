import { Model, BelongsTo, Column, ForeignKey, HasMany, PrimaryKey, Table } from 'sequelize-typescript';
import CustomerModel from '../../../costumer/repository/sequelize/customer.model';
import OrderItemModel from './order-item.model';

@Table({
  tableName: "orders",
  timestamps: false,
})

export default class OrderModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;
  // aqui está sendo feito relacionamento somente do id
  @ForeignKey(() => CustomerModel)
  @Column({ allowNull: false })
  declare costumer_id: string

  @BelongsTo(() => CustomerModel)
  declare costumer: CustomerModel

  @HasMany(() => OrderItemModel)
  declare items: OrderItemModel[];

  @Column({ allowNull: false })
  declare total: number;
}
