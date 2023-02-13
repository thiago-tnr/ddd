import RepositoryInterface from '../../@shared/event/repository/repository-interface';
import { Order } from 'sequelize';

export default interface OrderRepositoryInterface
  extends RepositoryInterface<Order> { }
