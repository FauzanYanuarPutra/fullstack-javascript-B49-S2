import DistrictController from '../controllers/DistrictController';
import BaseRoutes from './BaseRoutes'

class DistrictRoute extends BaseRoutes {
  public routes(): void {
    this.router.get('/', DistrictController.index)
    this.router.get('/:id', DistrictController.show)
    this.router.post('/', DistrictController.create)
    this.router.patch('/:id', DistrictController.edit)
    this.router.delete('/:id', DistrictController.delete)
  }
}

export default new DistrictRoute().router;