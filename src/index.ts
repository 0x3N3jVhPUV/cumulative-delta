import express from 'express';
import swaggerUi from 'swagger-ui-express';
import exchangeRoutes from './routes/exchangeRoutes';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your routes!
app.use(express.json());

// Swagger setup
const swaggerDocument = require('../swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/exchange', exchangeRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
