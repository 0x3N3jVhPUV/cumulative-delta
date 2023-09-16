export interface IRequestWithExchangeService extends Request {
    exchangeService: IExchangeService;
    params: {
      exchange: string;
      symbol: string;
    };
    cache: any; // replace 'any' with the actual type
    credentials: any; // replace 'any' with the actual type
    destination: any; // replace 'any' with the actual type
    // Add other properties as needed
  }

export interface IExchangeService {
    getSymbols(): Promise<ISymbolDetails[]>;
    getTradeHistory(symbol: string): Promise<ITradeHistory[]>;
    getCumulativeDelta(symbol: string): Promise<number>;
  }
  
  export interface ITradeHistory {
    id: number;
    timestamp: number;
    price: number;
    amount: number;
    side: string;
  }
  
  export interface ISymbolDetails {
    symbol: string;
    baseCurrency: string;
    quoteCurrency: string;
    feeCurrency: string;
    market: string;
  }
  
  export interface IKucoinSymbolItem {
    symbol: string;
    baseCurrency: string;
    quoteCurrency: string;
    feeCurrency: string;
    market: string;
  }
  
  export interface IKucoinTradeHistoryItem {
    sequence: number;
    time: number;
    price: string;
    size: string;
    side: string;
  }

  export interface IApiFactory {
    createExchangeService(exchange: string): IExchangeService;
  }