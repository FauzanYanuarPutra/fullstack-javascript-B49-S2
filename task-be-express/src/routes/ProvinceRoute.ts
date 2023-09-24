import ProvinceController from '../controllers/ProvinceController';
import BaseRoutes from './BaseRoutes'

class ProvinceRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', ProvinceController.index)
    this.router.get('/:id', ProvinceController.show)
    this.router.post('/', ProvinceController.create)
    this.router.patch('/:id', ProvinceController.edit)
    this.router.delete('/:id', ProvinceController.delete)
  }
}

export default new ProvinceRoutes().router;