import express from 'express';
import { ExchangeAPIFactory } from './factories/exchangeAPIFactory';

const app = express();
const port = 3000;

app.get('/exchange/:exchange/symbols', async (req, res) => {
  try {
    const exchangeAPI = ExchangeAPIFactory.createExchangeAPI(req.params.exchange);
    const symbols = await exchangeAPI.getSymbols();
    res.json(symbols);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

app.get('/exchange/:exchange/trade-history/:symbol', async (req, res) => {
  try {
    const exchangeAPI = ExchangeAPIFactory.createExchangeAPI(req.params.exchange);
    const tradeHistory = await exchangeAPI.getTradeHistory(req.params.symbol);
    res.json(tradeHistory);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

app.get('/exchange/:exchange/cumulative-delta/:symbol', async (req, res) => {
  try {
    const exchangeAPI = ExchangeAPIFactory.createExchangeAPI(req.params.exchange);
    const cumulativeDelta = await exchangeAPI.getCumulativeDelta(req.params.symbol);
    res.json({ cumulativeDelta });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});