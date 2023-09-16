import express from 'express';
import { AIFactory } from '../factory/APIFactory';

const router = express.Router();

/**
 * @swagger
 * /exchange/{exchange}/symbols:
 *   get:
 *     summary: Retrieve a list of symbols
 *     parameters:
 *       - in: path
 *         name: exchange
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of symbols
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Symbol'
 */
router.get('/:exchange/symbols', async (req, res) => {
  try {
    const exchangeService = AIFactory.createExchangeService(req.params.exchange);
    const symbols = await exchangeService.getSymbols();
    res.json(symbols);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

/**
 * @swagger
 * /exchange/{exchange}/trade-history/{symbol}:
 *   get:
 *     summary: Retrieve the trade history of a symbol
 *     parameters:
 *       - in: path
 *         name: exchange
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: symbol
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The trade history of the symbol
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TradeHistory'
 */
router.get('/:exchange/trade-history/:symbol', async (req, res) => {
  try {
    const exchangeService = AIFactory.createExchangeService(req.params.exchange);
    const tradeHistory = await exchangeService.getTradeHistory(req.params.symbol);
    res.json(tradeHistory);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

/**
 * @swagger
 * /exchange/{exchange}/cumulative-delta/{symbol}:
 *   get:
 *     summary: Retrieve the cumulative delta of a symbol
 *     parameters:
 *       - in: path
 *         name: exchange
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: symbol
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The cumulative delta of the symbol
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CumulativeDelta'
 */
router.get('/:exchange/cumulative-delta/:symbol', async (req, res) => {
  try {
    const exchangeService = AIFactory.createExchangeService(req.params.exchange);
    const cumulativeDelta = await exchangeService.getCumulativeDelta(req.params.symbol);
    res.json({ cumulativeDelta });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
