import { IExchangeService, ITradeHistory, ISymbolDetails, IKucoinSymbolItem, IKucoinTradeHistoryItem } from '../../types/index';
import * as API from 'kucoin-node-sdk';
import config from './config';

API.init(config);

export class KucoinService implements IExchangeService {
  constructor() {}

  async getSymbols(): Promise<ISymbolDetails[]> {
    const response = await API.rest.Market.Symbols.getSymbolsList();
    return response.data.map((item: IKucoinSymbolItem) => ({
      symbol: item.symbol,
      baseCurrency: item.baseCurrency,
      quoteCurrency: item.quoteCurrency,
      feeCurrency: item.feeCurrency,
      market: item.market
    }));
  }

  async getTradeHistory(symbol: string): Promise<ITradeHistory[]> {
    const response = await API.rest.Trade.Orders.getRecentOrders({ symbol });
    return response.data.items.map((item: IKucoinTradeHistoryItem) => ({
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