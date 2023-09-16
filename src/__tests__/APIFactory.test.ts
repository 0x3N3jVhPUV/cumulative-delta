import { AIFactory } from '../factory/APIFactory';
import { KucoinService } from '../factory/exchanges/KucoinExchange';

describe('AIFactory', () => {
  describe('createExchangeService', () => {
    it('should return a KucoinService instance when "kucoin" is passed', () => {
      const service = AIFactory.createExchangeService('kucoin');
      expect(service).toBeInstanceOf(KucoinService);
    });

    it('should throw an error when an unsupported exchange is passed', () => {
      expect(() => AIFactory.createExchangeService('unsupported')).toThrowError('Unsupported exchange: unsupported');
    });

    // Uncomment and add this test when BinanceExchange is supported
    // it('should return a BinanceExchange instance when "binance" is passed', () => {
    //   const service = AIFactory.createExchangeService('binance');
    //   expect(service).toBeInstanceOf(BinanceExchange);
    // });
  });
});