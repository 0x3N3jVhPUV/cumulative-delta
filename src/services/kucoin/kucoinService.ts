import { ExchangeAPI } from "../exchangeAPI";
import { Trade } from "../../models/trade";
import { TradeSymbol } from "../../models/tradeSymbol";
import { Fill } from "../../models/fill";
import * as Kucoin from "kucoin-node-sdk";

export class KucoinService implements ExchangeAPI {
  constructor() {
    // Load the configuration for Kucoin API
    const config = require("./config");
    Kucoin.init(config);
  }

  async fetchTradeHistory(symbol: string): Promise<Trade[]> {
    // Fetch trade history using Kucoin API
    const response = await Kucoin.rest.Market.Histories.getMarketHistories(
      symbol.toUpperCase()
    );

    // Handle error response
    if (response.code !== "200000") {
      throw new Error(`Failed to get trade history, code: ${response.code}`);
    }

    // Transform response data into Trade objects
    const trades = response.data;
    return trades.map((trade: Trade) => {
      return new Trade(
        trade.sequence,
        trade.price,
        trade.size,
        trade.side,
        trade.time
      );
    });
  }

  async fetchSymbolsList(market?: string): Promise<TradeSymbol[]> {
    // Fetch symbols list using Kucoin API
    const response = await Kucoin.rest.Market.Symbols.getSymbolsList(market);

    // Handle error response
    if (response.code !== "200000") {
      throw new Error(`Failed to get market symbols, code: ${response.code}`);
    }

    // Transform response data into TradeSymbol objects
    const symbols = response.data;
    return symbols.map((symbol: TradeSymbol) => {
      return new TradeSymbol(
        symbol.symbol,
        symbol.name,
        symbol.baseCurrency,
        symbol.quoteCurrency
      );
    });
  }

  async fetchFillsList(tradeType: string): Promise<Fill[]> {
    // Fetch fills list using Kucoin API
    const response = await Kucoin.rest.Trade.Fills.getFillsList(tradeType);

    // Handle error response
    if (response.code !== "200000") {
      throw new Error(`Failed to get fills list, code: ${response.code}`);
    }

    // Transform response data into Fill objects
    const fills = response.data.items;
    return fills.map((fill: Fill) => {
      return new Fill(
        fill.symbol,
        fill.tradeId,
        fill.orderId,
        fill.counterOrderId,
        fill.side,
        fill.liquidity,
        fill.forceTaker,
        fill.price,
        fill.size,
        fill.funds,
        fill.fee,
        fill.feeRate,
        fill.feeCurrency,
        fill.stop,
        fill.type,
        fill.createdAt,
        fill.tradeType
      );
    });
  }
}
