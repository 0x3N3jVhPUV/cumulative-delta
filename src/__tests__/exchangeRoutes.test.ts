import request from 'supertest';
import express, { Router } from 'express';
import exchangeRoutes from '../routes/exchangeRoutes';
import { AIFactory } from '../factory/APIFactory';

describe('Exchange Routes', () => {
  let app: express.Express;
  let apiFactory: AIFactory;

  beforeEach(() => {
    app = express();
    app.use('/exchange', exchangeRoutes);
    apiFactory = new AIFactory();
    // Initialize your routes here
  });

  it('should fetch symbols', async () => {
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
    const response = await request(app).get(`/exchange/${exchange}/symbols`);

    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockSymbols);
    expect(AIFactory.createExchangeService).toHaveBeenCalledWith(exchange);
    expect(mockGetSymbols).toHaveBeenCalled();
  });

  it('should fetch trade history', async () => {
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
    const response = await request(app).get(`/exchange/${exchange}/trade-history/${symbol}`);

    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockTradeHistory);
    expect(AIFactory.createExchangeService).toHaveBeenCalledWith(exchange);
    expect(mockGetTradeHistory).toHaveBeenCalledWith(symbol);
  });

  it('should fetch cumulative delta', async () => {
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
    const response = await request(app).get(`/exchange/${exchange}/cumulative-delta/${symbol}`);

    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ cumulativeDelta: mockCumulativeDelta });
    expect(AIFactory.createExchangeService).toHaveBeenCalledWith(exchange);
    expect(mockGetCumulativeDelta).toHaveBeenCalledWith(symbol);
    });
});