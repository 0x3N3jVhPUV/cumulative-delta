var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { KucoinService } from '../factory/exchanges/KucoinExchange';
const mockData = {
    data: { data: [] },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {
        headers: {},
    },
};
jest.mock('axios');
const mockedAxios = axios;
describe('KucoinService', () => {
    let service;
    beforeEach(() => {
        service = new KucoinService();
        mockedAxios.get.mockClear();
    });
    it('should get symbols', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedAxios.get.mockResolvedValue(mockData);
        const result = yield service.getSymbols();
        expect(result).toEqual([]);
        expect(mockedAxios.get).toHaveBeenCalledWith('https://api.kucoin.com/api/v1/symbols');
    }));
    it('should get trade history', () => __awaiter(void 0, void 0, void 0, function* () {
        mockedAxios.get.mockResolvedValue(mockData);
        const result = yield service.getTradeHistory('BTC');
        expect(result).toEqual([]);
        expect(mockedAxios.get).toHaveBeenCalledWith('https://api.kucoin.com/api/v1/market/histories?symbol=BTC');
    }));
    it('should get cumulative delta', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockDataForCumulativeDelta = {
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
                headers: {},
            },
        };
        mockedAxios.get.mockResolvedValue(mockDataForCumulativeDelta);
        const result = yield service.getCumulativeDelta('BTC');
        expect(result).toEqual(1);
        expect(mockedAxios.get).toHaveBeenCalledWith('https://api.kucoin.com/api/v1/market/histories?symbol=BTC');
    }));
});
//# sourceMappingURL=KucoinExchange.test.js.map