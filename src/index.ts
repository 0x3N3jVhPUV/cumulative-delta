import express from 'express';
import exchangeRoutes from './routes/exchangeRoutes';

const app = express();

app.use('/exchange', exchangeRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));