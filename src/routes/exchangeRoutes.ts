import { Router } from 'express';
import { ExchangeController } from '../controllers/exchangeController';

const router = Router();
const exchangeController = new ExchangeController();

router.get('/:exchange/symbols', exchangeController.getSymbols);
router.get('/:exchange/trade-history/:symbol', exchangeController.getTradeHistory);
router.get('/:exchange/cumulative-delta/:symbol', exchangeController.getCumulativeDelta);

export default router;
 