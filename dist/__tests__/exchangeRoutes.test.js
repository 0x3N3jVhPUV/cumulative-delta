var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from 'supertest';
import express from 'express';
import exchangeRoutes from '../routes/exchangeRoutes';
import { AIFactory } from '../factory/APIFactory';
describe('Exchange Routes', () => {
    let app;
    let apiFactory;
    beforeEach(() => {
        app = express();
        app.use('/exchange', exchangeRoutes);
        apiFactory = new AIFactory();
        // Initialize your routes here
    });
    it('should fetch symbols', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const exchange = 'testExchange';
        const mockSymbols = [{ symbol: 'testSymbol' }];
        const mockGetSymbols = jest.fn().mockResolvedValue(mockSymbols);
        const mockGetTradeHistory = jest.fn();
        const mockGetCumulativeDelta = jest.fn();
        // Mock the static method directly on the class
        jest.spyOn(AIFactory, 'createExchangeService').mockReturnValue({
            getSymbols: mockGetSymbols,
            getTradeHistory: mockGetTradeHistory,
            getCumulativeDelta: mockGetCumulativeDelta,
        });
        // Act
        const response = yield request(app).get(`/exchange/${exchange}/symbols`);
        // Assert
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockSymbols);
        expect(AIFactory.createExchangeService).toHaveBeenCalledWith(exchange);
        expect(mockGetSymbols).toHaveBeenCalled();
    }));
    it('should fetch trade history', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const exchange = 'testExchange';
        const symbol = 'testSymbol';
        const mockTradeHistory = [{ trade: 'testTrade' }];
        const mockGetSymbols = jest.fn();
        const mockGetTradeHistory = jest.fn().mockResolvedValue(mockTradeHistory);
        const mockGetCumulativeDelta = jest.fn();
        jest.spyOn(AIFactory, 'createExchangeService').mockReturnValue({
            getSymbols: mockGetSymbols,
            getTradeHistory: mockGetTradeHistory,
            getCumulativeDelta: mockGetCumulativeDelta,
        });
        // Act
        const response = yield request(app).get(`/exchange/${exchange}/trade-history/${symbol}`);
        // Assert
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockTradeHistory);
        expect(AIFactory.createExchangeService).toHaveBeenCalledWith(exchange);
        expect(mockGetTradeHistory).toHaveBeenCalledWith(symbol);
    }));
    it('should fetch cumulative delta', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const exchange = 'testExchange';
        const symbol = 'testSymbol';
        const mockCumulativeDelta = { delta: 'testDelta' };
        const mockGetSymbols = jest.fn();
        const mockGetTradeHistory = jest.fn();
        const mockGetCumulativeDelta = jest.fn().mockResolvedValue(mockCumulativeDelta);
        jest.spyOn(AIFactory, 'createExchangeService').mockReturnValue({
            getSymbols: mockGetSymbols,
            getTradeHistory: mockGetTradeHistory,
            getCumulativeDelta: mockGetCumulativeDelta,
        });
        // Act
        const response = yield request(app).get(`/exchange/${exchange}/cumulative-delta/${symbol}`);
        // Assert
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ cumulativeDelta: mockCumulativeDelta });
        expect(AIFactory.createExchangeService).toHaveBeenCalledWith(exchange);
        expect(mockGetCumulativeDelta).toHaveBeenCalledWith(symbol);
    }));
});
//# sourceMappingURL=exchangeRoutes.test.js.map