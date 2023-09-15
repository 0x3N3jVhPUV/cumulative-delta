/**
 * Type definitions for the Cumulative Delta Calculator project
 */

// Type for trade history
export type ITradeHistory = {
  id: string;
  timestamp: number;
  price: number;
  amount: number;
  side: 'buy' | 'sell';
};

// Type for symbol details
export type ISymbolDetails = {
  symbol: string;
  baseCurrency: string;
  quoteCurrency: string;
  feeCurrency: string;
  market: string;
};

// Type for exchange service
export interface IExchangeService {
  getTradeHistory(symbol: string): Promise<ITradeHistory[]>;
  getSymbols(): Promise<ISymbolDetails[]>;
  getCumulativeDelta(symbol: string): Promise<number>;
}

// Type for API factory
export interface IApiFactory {
  createExchangeService(exchange: string): IExchangeService;
}

// Type for error handling middleware
export interface IError {
  status?: number;
  message?: string;
}

// Type for request with exchange service
export interface IRequestWithExchangeService extends Express.Request {
    params: {
        exchange: string;
        symbol?: string;
      }
}

// Type for symbol item from Kucoin API
export type IKucoinSymbolItem = {
  symbol: string;
  baseCurrency: string;
  quoteCurrency: string;
  feeCurrency: string;
  market: string;
  // add other properties as needed
};

// Type for trade history item from Kucoin API
export type IKucoinTradeHistoryItem = {
  sequence: string;
  time: number;
  price: string;
  size: string;
  side: 'buy' | 'sell';
  // add other properties as needed
};