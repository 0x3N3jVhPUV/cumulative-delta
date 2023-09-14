import express from "express";
import Controller from "./interfaces/controller.interface";
import * as swaggerUi from "swagger-ui-express";
import * as YAML from "yamljs";
import * as path from "path";
import { ExchangeController } from './controllers/exchangeController';

class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.initializeControllers(controllers);
    this.initializeSwagger();
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private initializeSwagger() {
    const swaggerFilePath = path.resolve(__dirname, "../swagger.yaml");
    const swaggerDocument = YAML.load(swaggerFilePath);

    this.app.use("/api-docs", swaggerUi.serve);
    this.app.get("/api-docs", swaggerUi.setup(swaggerDocument));
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on port ${process.env.PORT}`);
    });
  }

  public getServer() {
    return this.app;
  }
}

const app = new App([new ExchangeController()]);
app.listen();