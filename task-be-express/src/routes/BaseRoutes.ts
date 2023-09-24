import { Router } from "express"
import IRoutes from "./RouteInterface"

abstract class BaseRoutes implements IRoutes {
  public router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  abstract routes(): void;
}

export default BaseRoutes