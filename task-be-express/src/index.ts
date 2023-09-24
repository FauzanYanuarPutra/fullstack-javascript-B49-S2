import express, { Application, Request, Response } from "express";
import ProvinceRoutes from "./routes/ProvinceRoute";
import RegencieRoute from "./routes/RegencieRoute";
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import DistrictRoute from "./routes/DistrictRoute";
import VillageRoute from "./routes/VillageRoute";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugin();
    this.routes();
  }

  protected plugin(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors())
    this.app.use(compression())
    this.app.use(helmet())
  }

  protected routes(): void {
    this.app.use('/api/v1/provinces', ProvinceRoutes)
    this.app.use('/api/v1/regencies', RegencieRoute)
    this.app.use('/api/v1/districts', DistrictRoute)
    this.app.use('/api/v1/vilages', VillageRoute)
  }
}

const app = new App().app;
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
})