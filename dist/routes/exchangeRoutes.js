import { Router } from 'express';
import { ExchangeController } from '../controllers/exchangeController';
const router = Router();
const exchangeController = new ExchangeController();
// Get a list of symbols available on the specified exchange
router.get('/:exchange/symbols', exchangeController.getSymbols);
// Get the trade history for the specified symbol on the specified exchange
router.get('/:exchange/trade-history/:symbol', exchangeController.getTradeHistory);
// Calculate the cumulative delta for the specified symbol on the specified exchange
router.get('/:exchange/cumulative-delta/:symbol', exchangeController.getCumulativeDelta);
export default router;
//# sourceMappingURL=exchangeRoutes.js.map