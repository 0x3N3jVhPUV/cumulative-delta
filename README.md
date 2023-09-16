# Cumulative Delta Calculator

## Description

This project is a tool to fetch trade histories and calculate the cumulative delta for a specific trading pair on an exchange. Currently, it supports the Kucoin exchange.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installing

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/0x3N3JVhPUV/cumulative-delta.git
   ```
   
2. Install the dependencies:
   ```
   cd cumulative-delta-calculator
   npm install
   ```
   
3. Create a `.env` file in the root directory of the project add your application port, the kucoin api URL and your Kucoin API credentials:
   ```
   touch .env

   PORT=3000
   KUCOIN_API_URL=https://api.kucoin.com
   KUCOIN_API_KEY=YOUR_KUCOIN_API_KEY
   KUCOIN_SECRET_KEY=YOUR_KUCOIN_SECRET_KEY
   KUCOIN_PASSPHRASE=YOUR_KUCOIN_PASSPHRASE   

   ```

## Running the Application

You can start the application with the following command:
```
npm run start
```

The application will start and listen on port 3000 by default. You can change the port by setting the PORT environment variable in the `.env` file.

### Docker

You can also run the application inside a Docker container. Build the Docker image with the following command:
```
docker build -t cumulative-delta .
```

## API Endpoints

The application provides the following API endpoints:

- **GET /exchange/:exchange/symbols**

  Get a list of symbols available on the specified exchange.

  Example: `GET /exchange/kucoin/symbols`

- **GET /exchange/:exchange/trade-history/:symbol**

  Get the trade history for the specified symbol on the specified exchange.

  Example: `GET /exchange/kucoin/trade-history/BTC-USDT`

- **GET /exchange/:exchange/cumulative-delta/:symbol**

  Calculate the cumulative delta for the specified symbol on the specified exchange.

  Example: `GET /exchange/kucoin/cumulative-delta/BTC-USDT`

Replace `:exchange` with the name of the exchange (e.g., kucoin) and `:symbol` with the trading pair symbol (e.g., BTC-USDT) in the endpoint URLs.

## Testing

You can run the tests with the following command:
```
npm run test
```
To get the test coverage, use the following command:
````
npm run test-coverage
````

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- [Kucoin-node-sdk](https://github.com/Kucoin/kucoin-node-sdk) - The SDK used to interact with the Kucoin API

## License

This project is licensed under the ISC License.

## Author

- Andy AFENE