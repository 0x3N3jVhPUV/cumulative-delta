"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeController = void 0;
const apiFactory_1 = require("../services/apiFactory");
const express_1 = require("express");
class ExchangeController {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getSymbols = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const exchangeService = this.apiFactory.createExchangeService(req.params.exchange);
            const symbols = yield exchangeService.getSymbols();
            res.json(symbols);
        });
        this.getTradeHistory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const exchangeService = this.apiFactory.createExchangeService(req.params.exchange);
            const tradeHistory = yield exchangeService.getTradeHistory(req.params.symbol);
            res.json(tradeHistory);
        });
        this.getCumulativeDelta = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const exchangeService = this.apiFactory.createExchangeService(req.params.exchange);
            const cumulativeDelta = yield exchangeService.getCumulativeDelta(req.params.symbol);
            res.json({ cumulativeDelta });
        });
        this.apiFactory = apiFactory_1.apiFactory;
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/:exchange/symbols', this.getSymbols);
        this.router.get('/:exchange/trade-history/:symbol', this.getTradeHistory);
        this.router.get('/:exchange/cumulative-delta/:symbol', this.getCumulativeDelta);
    }
}
exports.ExchangeController = ExchangeController;
