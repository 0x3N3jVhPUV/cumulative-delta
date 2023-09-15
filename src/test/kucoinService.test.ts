import { KucoinService } from '../services/kucoin/kucoinService';

describe('KucoinService', () => {
  let service: KucoinService;

  beforeEach(() => {
    service = new KucoinService();
  });

  it('should get symbols', async () => {
    const symbols = await service.getSymbols();
    expect(symbols).toBeDefined();
    // Add more assertions based on your expected output
  });

  it('should get trade history', async () => {
    const tradeHistory = await service.getTradeHistory('BTC-USDT');
    expect(tradeHistory).toBeDefined();
    // Add more assertions based on your expected output
  });

  it('should get cumulative delta', async () => {
    const cumulativeDelta = await service.getCumulativeDelta('BTC-USDT');
    expect(cumulativeDelta).toBeDefined();
    // Add more assertions based on your expected output
  });
});