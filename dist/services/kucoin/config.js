"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // Base URL for the Kucoin API
    baseUrl: "https://openapi-sandbox.kucoin.com",
    // API authentication credentials
    apiAuth: {
        key: process.env.KUCOIN_API_KEY,
        secret: process.env.KUCOIN_SECRET_KEY,
        passphrase: process.env.KUCOIN_PASSPHRASE, // KC-API-PASSPHRASE
    },
    // API authentication version
    authVersion: 2, // KC-API-KEY-VERSION. Notice: for v2 API-KEY, not required for v1 version.
};
