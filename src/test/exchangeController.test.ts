import { ExchangeController } from '../controllers/exchangeController';
import { IRequestWithExchangeService } from '../types';
import { ApiFactory } from '../services/apiFactory';

// Mock the ApiFactory class
jest.mock('../services/apiFactory');

describe('ExchangeController', () => {
  let controller: ExchangeController;
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;

  beforeEach(() => {
    // Create a new instance of ExchangeController for each test
    controller = new ExchangeController();

    // Mock the createExchangeService method
    const mockExchangeService = { 
      getSymbols: jest.fn().mockResolvedValue(['BTC-USDT']),
      getTradeHistory: jest.fn().mockResolvedValue([{ id: '1', timestamp: 1622558842, price: 50000, amount: 0.01, side: 'buy' }]),
      getCumulativeDelta: jest.fn().mockResolvedValue(0.01)
    };
    (ApiFactory.prototype.createExchangeService as jest.Mock).mockImplementation(() => mockExchangeService);
    
    // Other setup code...
  });

  describe('getSymbols', () => {
    it('should return symbols from the exchange service', async () => {
      //const req = { params: { exchange: 'kucoin' } } as IRequestWithExchangeService;
      const res = { json: jest.fn() } as any;
      const req = { params: { exchange: 'kucoin' } } as any;
      await controller.getSymbols(req, res);
      expect(res.json).toHaveBeenCalledWith(['BTC-USDT']);
    });
  });
  
  describe('getTradeHistory', () => {
    it('should return trade history from the exchange service', async () => {
      const req = { params: { exchange: 'kucoin', symbol: 'BTC-USDT' } } as IRequestWithExchangeService;
      const res = { json: jest.fn() } as any;
  
      await controller.getTradeHistory(req, res);
      expect(res.json).toHaveBeenCalledWith([{ id: '1', timestamp: 1622558842, price: 50000, amount: 0.01, side: 'buy' }]);
    });
  });
  
  describe('getCumulativeDelta', () => {
    it('should return cumulative delta from the exchange service', async () => {
      const req = { params: { exchange: 'kucoin', symbol: 'BTC-USDT' } } as IRequestWithExchangeService;
      const res = { json: jest.fn() } as any;
  
      await controller.getCumulativeDelta(req, res);
      expect(res.json).toHaveBeenCalledWith({ cumulativeDelta: 0.01 });
    }); 
  });
});