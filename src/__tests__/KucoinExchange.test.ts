import axios, { AxiosRequestHeaders } from 'axios';
import { KucoinService } from '../factory/exchanges/KucoinExchange';
import { AxiosResponse } from 'axios';
import { IKucoinSymbolItem, IKucoinTradeHistoryItem } from '../types/index';

type MockDataType = AxiosResponse<{ data: IKucoinSymbolItem[] | IKucoinTradeHistoryItem[] }>;

const mockData: MockDataType = {
    data: { data: [] },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {
      headers: {} as AxiosRequestHeaders,
    },
};

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('KucoinService', () => {
  let service: KucoinService;

  beforeEach(() => {
    service = new KucoinService();
    mockedAxios.get.mockClear();
  });

  it('should get symbols', async () => {
    mockedAxios.get.mockResolvedValue(mockData);

    const result = await service.getSymbols();

    expect(result).toEqual([]);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://api.kucoin.com/api/v1/symbols');
  });

  it('should get trade history', async () => {
    mockedAxios.get.mockResolvedValue(mockData);

    const result = await service.getTradeHistory('BTC');

    expect(result).toEqual([]);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://api.kucoin.com/api/v1/market/histories?symbol=BTC');
  });

  it('should get cumulative delta', async () => {
    const mockDataForCumulativeDelta: MockDataType = { 
      data: { 
        data: [{ 
          sequence: 1, 
          time: 123456789, 
          price: '1', 
          size: '1', 
          side: 'buy' 
        }] 
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        headers: {} as AxiosRequestHeaders,
      },
    };
    mockedAxios.get.mockResolvedValue(mockDataForCumulativeDelta);
  
    const result = await service.getCumulativeDelta('BTC');
  
    expect(result).toEqual(1);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://api.kucoin.com/api/v1/market/histories?symbol=BTC');
  });
});