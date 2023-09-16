import { IExchangeService } from '../types';
import { KucoinService } from './exchanges/KucoinExchange';
//import { BinanceExchange } from './exchanges/BinanceExchange';

export class AIFactory {
  static createExchangeService(exchange: string): IExchangeService {
    switch (exchange) {
      case 'kucoin':
        return new KucoinService();
    //   case 'binance':
    //     return new BinanceExchange();
      // add other exchanges here...
      default:
        throw new Error(`Unsupported exchange: ${exchange}`);
    }
  }
}