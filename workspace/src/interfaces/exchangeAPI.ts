export interface ExchangeAPI {
  getSymbols(): Promise<string[]>;
  getTradeHistory(symbol: string): Promise<TradeHistory[]>;
  getCumulativeDelta(symbol: string): Promise<number>;
}

export interface TradeHistory {
  price: number;
  volume: number;
  time: number;
  isBuyerMaker: boolean;
}
