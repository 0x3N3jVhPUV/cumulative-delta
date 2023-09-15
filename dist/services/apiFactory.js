import { KucoinService } from './kucoin/kucoinService';
class ApiFactory {
    createExchangeService(exchange) {
        switch (exchange) {
            case 'kucoin':
                return new KucoinService();
            // add more cases for other exchanges  
            default:
                throw new Error(`Exchange ${exchange} is not supported.`);
        }
    }
}
export const apiFactory = new ApiFactory();
//# sourceMappingURL=apiFactory.js.map