import { ExchangeInterface } from '../factory/exchanges/ExchangeInterface';
import { ISymbolDetails, ITradeHistory } from '../types';

// Mock implementation of the ExchangeInterface
class MockExchange implements ExchangeInterface {
  getSymbols(): Promise<ISymbolDetails[]> {
    // Here we're returning a mock array of ISymbolDetails
    // Replace this with the actual mock data you want to test with
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
    // Here we're returning a mock array of ITradeHistory for a given symbol
    // Replace this with the actual mock data you want to test with
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
    // Here we're returning a mock cumulative delta for a given symbol
    // Replace this with the actual mock data you want to test with
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
    // Here we're asserting that the returned symbols match our mock data
    // Update this to match your actual test conditions
    expect(symbols).toHaveLength(2); // Replace with the number of mock symbols
    // Add more assertions if needed
  });

  it('should get trade history', async () => {
    const tradeHistory = await exchange.getTradeHistory('symbol');
    // Here we're asserting that the returned trade history matches our mock data
    // Update this to match your actual test conditions
    expect(tradeHistory).toHaveLength(2); // Replace with the number of mock trade histories
    // Add more assertions if needed
  });

  it('should get cumulative delta', async () => {
    const delta = await exchange.getCumulativeDelta('symbol');
    // Here we're asserting that the returned cumulative delta matches our mock data
    // Update this to match your actual test conditions
    expect(delta).toBe(123); // Replace with your mock delta
    // Add more assertions if needed
  });
});