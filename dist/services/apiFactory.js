"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiFactory = void 0;
const kucoinService_1 = require("./kucoin/kucoinService");
class ApiFactory {
    createExchangeService(exchange) {
        switch (exchange) {
            case 'kucoin':
                return new kucoinService_1.KucoinService();
            // add more cases for other exchanges  
            default:
                throw new Error(`Exchange ${exchange} is not supported.`);
        }
    }
}
exports.apiFactory = new ApiFactory();
