var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class MockExchange {
    getSymbols() {
        const mockSymbols = [
            {
                symbol: 'AVA-USDT',
                baseCurrency: 'AVA',
                quoteCurrency: 'USDT',
                feeCurrency: 'USDT',
                market: 'USDS'
            },
            {
                symbol: 'BTC-USDT',
                baseCurrency: 'BTC',
                quoteCurrency: 'USDT',
                feeCurrency: 'USDT',
                market: 'USDS'
            }
        ];
        return Promise.resolve(mockSymbols);
    }
    getTradeHistory(symbol) {
        const mockTradeHistory = [
            {
                id: 5286253956710401,
                timestamp: 1694876622857000000,
                price: 26513.4,
                amount: 0.0025431,
                side: "buy"
            },
            {
                id: 5286253956710402,
                timestamp: 1694876622857000001,
                price: 26513.5,
                amount: 0.0025432,
                side: "sell"
            }
        ];
        return Promise.resolve(mockTradeHistory);
    }
    getCumulativeDelta(symbol) {
        const mockDelta = 123; // Replace with your mock delta for the given symbol
        return Promise.resolve(mockDelta);
    }
}
describe('ExchangeInterface', () => {
    let exchange;
    beforeEach(() => {
        // Before each test, we initialize our exchange with the mock implementation
        exchange = new MockExchange();
    });
    it('should get symbols', () => __awaiter(void 0, void 0, void 0, function* () {
        const symbols = yield exchange.getSymbols();
        expect(symbols).toHaveLength(2); // Replace with the number of mock symbols
    }));
    it('should get trade history', () => __awaiter(void 0, void 0, void 0, function* () {
        const tradeHistory = yield exchange.getTradeHistory('symbol');
        expect(tradeHistory).toHaveLength(2); // Replace with the number of mock trade histories
    }));
    it('should get cumulative delta', () => __awaiter(void 0, void 0, void 0, function* () {
        const delta = yield exchange.getCumulativeDelta('symbol');
        expect(delta).toBe(123); // Replace with your mock delta
    }));
});
export {};
//# sourceMappingURL=ExchangeInterface.test.js.map