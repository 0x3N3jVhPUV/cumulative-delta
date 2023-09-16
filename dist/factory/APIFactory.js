import { KucoinService } from './exchanges/KucoinExchange';
//import { BinanceExchange } from './exchanges/BinanceExchange';
export class AIFactory {
    static createExchangeService(exchange) {
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
//# sourceMappingURL=APIFactory.js.map