import { ExchangeAPI, TradeHistory } from '../interfaces/exchangeAPI';
import { Kucoin } from 'kucoin-node-sdk';

export class KucoinAPI implements ExchangeAPI {
  private kucoin: Kucoin;

  constructor() {
    this.kucoin = new Kucoin();
  }

  async getSymbols(): Promise<string[]> {
    // Implement the method to fetch symbols from Kucoin API
  }

  async getTradeHistory(symbol: string): Promise<TradeHistory[]> {
    // Implement the method to fetch trade history from Kucoin API
  }

  async getCumulativeDelta(symbol: string): Promise<number> {
    // Implement the method to calculate cumulative delta from trade history
  }
}
