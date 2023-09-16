import { ExchangeInterface } from '../factory/exchanges/ExchangeInterface';
import { ISymbolDetails, ITradeHistory } from '../types';

class MockExchange implements ExchangeInterface {
  getSymbols(): Promise<ISymbolDetails[]> {
    const mockSymbols: ISymbolDetails[] = [
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

  getTradeHistory(symbol: string): Promise<ITradeHistory[]> {
    const mockTradeHistory: ITradeHistory[] = [
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

  getCumulativeDelta(symbol: string): Promise<number> {
    const mockDelta = 123; // Replace with your mock delta for the given symbol
    return Promise.resolve(mockDelta);
  }
}

describe('ExchangeInterface', () => {
  let exchange: ExchangeInterface;

  beforeEach(() => {
    // Before each test, we initialize our exchange with the mock implementation
    exchange = new MockExchange();
  });

  it('should get symbols', async () => {
    const symbols = await exchange.getSymbols();
    expect(symbols).toHaveLength(2); // Replace with the number of mock symbols
  });

  it('should get trade history', async () => {
    const tradeHistory = await exchange.getTradeHistory('symbol');
    expect(tradeHistory).toHaveLength(2); // Replace with the number of mock trade histories
  });

  it('should get cumulative delta', async () => {
    const delta = await exchange.getCumulativeDelta('symbol');
    expect(delta).toBe(123); // Replace with your mock delta
  });
});