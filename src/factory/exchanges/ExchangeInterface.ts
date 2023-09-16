import { ITradeHistory, ISymbolDetails } from '../../types';

export interface ExchangeInterface {
  getSymbols(): Promise<ISymbolDetails[]>;
  getTradeHistory(symbol: string): Promise<ITradeHistory[]>;
  getCumulativeDelta(symbol: string): Promise<number>;
}