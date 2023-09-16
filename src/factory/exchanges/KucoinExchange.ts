import axios from 'axios';
import { IExchangeService, ITradeHistory, ISymbolDetails, IKucoinSymbolItem, IKucoinTradeHistoryItem } from '../../types/index';

const baseUrl = 'https://api.kucoin.com';

export class KucoinService implements IExchangeService {
  constructor() {
  }

  async getSymbols(): Promise<ISymbolDetails[]> {
    const response = await axios.get(`${baseUrl}/api/v1/symbols`);
    return response.data.data.map((item: IKucoinSymbolItem) => ({
      symbol: item.symbol,
      baseCurrency: item.baseCurrency,
      quoteCurrency: item.quoteCurrency,
      feeCurrency: item.feeCurrency,
      market: item.market
    }));
  }

  async getTradeHistory(symbol: string): Promise<ITradeHistory[]> {
    const response = await axios.get(`${baseUrl}/api/v1/market/histories?symbol=${symbol}`);
    return response.data.data.map((item: IKucoinTradeHistoryItem) => ({
      id: item.sequence,
      timestamp: item.time,
      price: parseFloat(item.price),
      amount: parseFloat(item.size),
      side: item.side,
    }));
  }

  async getCumulativeDelta(symbol: string): Promise<number> {
    const tradeHistory = await this.getTradeHistory(symbol);
    let cumulativeDelta = 0;
    tradeHistory.forEach(trade => {
      cumulativeDelta += trade.side === 'buy' ? trade.amount : -trade.amount;
    });
  
    return cumulativeDelta;
  }
}