import express from "express";
import { ExchangeController } from './controllers/exchangeController';
import 'dotenv/config';
export class App {
    constructor(controllers) {
        this.app = express();
        this.initializeControllers(controllers);
        this.initializeCSP();
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use("/", controller.router);
        });
    }
    initializeCSP() {
        this.app.use((req, res, next) => {
            res.setHeader("Content-Security-Policy", "default-src 'none'; font-src 'self' data:;");
            return next();
        });
    }
    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on port ${process.env.PORT}`);
        });
    }
    getServer() {
        return this.app;
    }
}
const app = new App([new ExchangeController()]);
app.listen();
//# sourceMappingURL=index.js.map