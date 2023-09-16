import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import exchangeRoutes from './routes/exchangeRoutes';
import { swaggerDef } from './swaggerDef';
const app = express();
const specs = swaggerJsDoc(swaggerDef);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/exchange', exchangeRoutes);
app.listen(3000, () => console.log('Server running on port 3000'));
//# sourceMappingURL=index.js.map