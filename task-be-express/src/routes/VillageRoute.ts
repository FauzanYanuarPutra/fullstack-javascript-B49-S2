import VillageController from '../controllers/VillageController';
import BaseRoutes from './BaseRoutes'

class DistrictRoute extends BaseRoutes {
  public routes(): void {
    this.router.get('/', VillageController.index)
    this.router.get('/:id', VillageController.show)
    this.router.post('/', VillageController.create)
    this.router.patch('/:id', VillageController.edit)
    this.router.delete('/:id', VillageController.delete)
  }
}

export default new DistrictRoute().router;