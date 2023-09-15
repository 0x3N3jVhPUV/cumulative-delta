import { ApiFactory } from '../services/apiFactory';
import { KucoinService } from '../services/kucoin/kucoinService';

describe('ApiFactory', () => {
  let apiFactory: ApiFactory;

  beforeEach(() => {
    apiFactory = new ApiFactory();
  });

  it('creates a KucoinService instance for "kucoin"', () => {
    const service = apiFactory.createExchangeService('kucoin');
    expect(service).toBeInstanceOf(KucoinService);
  });

  it('throws an error for unsupported exchanges', () => {
    expect(() => {
      apiFactory.createExchangeService('unsupported');
    }).toThrow('Exchange unsupported is not supported.');
  });
});