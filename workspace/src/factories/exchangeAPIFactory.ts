import { ExchangeAPI } from '../interfaces/exchangeAPI';
import { KucoinAPI } from '../exchanges/kucoinAPI';

export class ExchangeAPIFactory {
  static createExchangeAPI(exchange: string): ExchangeAPI {
    switch (exchange) {
      case 'kucoin':
        return new KucoinAPI();
      // Add cases for other exchanges as you integrate them
      default:
        throw new Error('Exchange not supported');
    }
  }
}
