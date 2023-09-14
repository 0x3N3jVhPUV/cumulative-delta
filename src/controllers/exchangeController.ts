import { Request, Response } from 'express';
import { IApiFactory, IRequestWithExchangeService } from '../types';
import { apiFactory } from '../services/apiFactory';

export class ExchangeController {
  private apiFactory: IApiFactory;

  constructor() {
    this.apiFactory = apiFactory;
  }

  getSymbols = async (req: Request, res: Response) => {
    const exchangeService = this.apiFactory.createExchangeService(req.params.exchange);
    const symbols = await exchangeService.getSymbols();
    res.json(symbols);
  };

  getTradeHistory = async (req: IRequestWithExchangeService, res: Response) => {
    const exchangeService = this.apiFactory.createExchangeService(req.params.exchange);
    const tradeHistory = await exchangeService.getTradeHistory(req.params.symbol);
    res.json(tradeHistory);
  };

  getCumulativeDelta = async (req: IRequestWithExchangeService, res: Response) => {
    const exchangeService = this.apiFactory.createExchangeService(req.params.exchange);
    const cumulativeDelta = await exchangeService.getCumulativeDelta(req.params.symbol);
    res.json({ cumulativeDelta });
  };
}