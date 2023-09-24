import RegencieController from '../controllers/RegencieController';
import BaseRoutes from './BaseRoutes'

class RegencieRoute extends BaseRoutes {
  public routes(): void {
    this.router.get('/', RegencieController.index)
    this.router.get('/:id', RegencieController.show)
    this.router.post('/', RegencieController.create)
    this.router.patch('/:id', RegencieController.edit)
    this.router.delete('/:id', RegencieController.delete)
  }
}

export default new RegencieRoute().router;