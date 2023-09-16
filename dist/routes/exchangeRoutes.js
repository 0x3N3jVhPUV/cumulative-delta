var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
router.get('/:exchange/symbols', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exchangeService = AIFactory.createExchangeService(req.params.exchange);
        const symbols = yield exchangeService.getSymbols();
        res.json(symbols);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
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
router.get('/:exchange/trade-history/:symbol', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exchangeService = AIFactory.createExchangeService(req.params.exchange);
        const tradeHistory = yield exchangeService.getTradeHistory(req.params.symbol);
        res.json(tradeHistory);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
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
router.get('/:exchange/cumulative-delta/:symbol', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exchangeService = AIFactory.createExchangeService(req.params.exchange);
        const cumulativeDelta = yield exchangeService.getCumulativeDelta(req.params.symbol);
        res.json({ cumulativeDelta });
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
export default router;
//# sourceMappingURL=exchangeRoutes.js.map