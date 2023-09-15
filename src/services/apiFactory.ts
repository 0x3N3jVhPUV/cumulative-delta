import { IApiFactory, IExchangeService } from '../types';
import { KucoinService } from './kucoin/kucoinService';

class ApiFactory implements IApiFactory {
  createExchangeService(exchange: string): IExchangeService {
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


