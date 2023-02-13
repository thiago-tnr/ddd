import RepositoryInterface from '../../@shared/event/repository/repository-interface';
import Product from '../entity/product';
// aqui eu vou criar metodos que vão buscar daddos que so fazem sentido no contexto de produto
// cada um dos meus agregados podem ter suas propias necessidades quanto a respositorio, por isso
// eu crio um mais generico e depois eu crio uma mais voltado para o meu agregado, extendendo o mais generico
// depois eu implemnto o que preciso, se não precisar de nada, basta criar e usar
// isso se tornar uma declaração do meu repositorio ( screen architeture )
export default interface ProductRepositoryInterface
  extends RepositoryInterface<Product> { }