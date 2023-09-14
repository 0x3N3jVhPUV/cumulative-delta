import { Request, Response } from 'express';
import { IApiFactory, IRequestWithExchangeService } from '../types';
import { apiFactory } from '../services/apiFactory';
import { Router } from 'express';

export class ExchangeController {
  private apiFactory: IApiFactory;  
  public router = Router();

  constructor() {
    this.apiFactory = apiFactory;
    this.initializeRoutes();
  }
  
  private initializeRoutes() {
    this.router.get('/:exchange/symbols', this.getSymbols);
    this.router.get('/:exchange/trade-history/:symbol', this.getTradeHistory);
    this.router.get('/:exchange/cumulative-delta/:symbol', this.getCumulativeDelta);
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