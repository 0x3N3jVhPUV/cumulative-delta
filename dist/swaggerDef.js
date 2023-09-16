export const swaggerDef = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Cumulative Delta Calculator API',
            version: '1.0.0',
            description: 'A tool to fetch trade histories and calculate the cumulative delta for a specific trading pair on an exchange.',
        },
        components: {
            schemas: {
                Symbol: {
                    type: 'object',
                    properties: {
                        symbol: {
                            type: 'string',
                            description: 'The symbol name',
                        },
                        baseCurrency: {
                            type: 'string',
                            description: 'The base currency',
                        },
                        quoteCurrency: {
                            type: 'string',
                            description: 'The quote currency',
                        },
                        feeCurrency: {
                            type: 'string',
                            description: 'The fee currency',
                        },
                        market: {
                            type: 'string',
                            description: 'The market',
                        },
                    },
                },
                TradeHistory: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number',
                            description: 'The trade id',
                        },
                        timestamp: {
                            type: 'number',
                            description: 'The trade timestamp',
                        },
                        price: {
                            type: 'number',
                            description: 'The trade price',
                        },
                        amount: {
                            type: 'number',
                            description: 'The trade amount',
                        },
                        side: {
                            type: 'string',
                            description: 'The trade side',
                        },
                    },
                },
                CumulativeDelta: {
                    type: 'object',
                    properties: {
                        cumulativeDelta: {
                            type: 'number',
                            description: 'The cumulative delta',
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.ts'], // path to your API files
};
//# sourceMappingURL=swaggerDef.js.map