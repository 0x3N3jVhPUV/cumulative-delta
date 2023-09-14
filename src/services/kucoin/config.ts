module.exports = {
  // Base URL for the Kucoin API
  baseUrl: "https://openapi-sandbox.kucoin.com",

  // API authentication credentials
  apiAuth: {
    key: process.env.KUCOIN_API_KEY, // KC-API-KEY
    secret: process.env.KUCOIN_SECRET_KEY, // API-Secret
    passphrase: process.env.KUCOIN_PASSPHRASE, // KC-API-PASSPHRASE
  },

  // API authentication version
  authVersion: 2, // KC-API-KEY-VERSION. Notice: for v2 API-KEY, not required for v1 version.
};
