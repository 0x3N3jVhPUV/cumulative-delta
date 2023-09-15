var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as API from 'kucoin-node-sdk';
import config from './config';
API.init(config);
export class KucoinService {
    constructor() { }
    getSymbols() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield API.rest.Market.Symbols.getSymbolsList();
            return response.data.map((item) => ({
                symbol: item.symbol,
                baseCurrency: item.baseCurrency,
                quoteCurrency: item.quoteCurrency,
                feeCurrency: item.feeCurrency,
                market: item.market
            }));
        });
    }
    getTradeHistory(symbol) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield API.rest.Trade.Orders.getRecentOrders({ symbol });
            return response.data.items.map((item) => ({
                id: item.sequence,
                timestamp: item.time,
                price: parseFloat(item.price),
                amount: parseFloat(item.size),
                side: item.side,
            }));
        });
    }
    getCumulativeDelta(symbol) {
        return __awaiter(this, void 0, void 0, function* () {
            const tradeHistory = yield this.getTradeHistory(symbol);
            let cumulativeDelta = 0;
            tradeHistory.forEach(trade => {
                cumulativeDelta += trade.side === 'buy' ? trade.amount : -trade.amount;
            });
            return cumulativeDelta;
        });
    }
}
//# sourceMappingURL=kucoinService.js.map