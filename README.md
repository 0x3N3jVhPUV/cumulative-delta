# Cumulative Delta Calculator

This project is a tool to fetch trade histories and calculate the cumulative delta for a specific trading pair on an exchange. Currently, it supports the Kucoin exchange.


## Features
- Extract trading symbols along with relevant market information.
- Acquire transaction histories from compatible exchanges.
- Determine the cumulative delta using the transaction histories.
- Implement a Swagger Interface to facilitate a user-friendly and intuitive API experience.
## Tech Stack

Node.js, 
npm,
TypeScript,
Express.js,
Swagger,
Jest,
axios,
Supertest

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
## Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
## Deployment

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/0x3N3JVhPUV/cumulative-delta.git
   ```
2. Install depedencies:
```bash
npm install
```
3. Build the project:
```bash
npm run build
```
4. Start the server:
```bash
npm run start
```
5. The server should now be running at **http://localhost:3000**.
You can now access the swagger interface at **http://localhost:3000/api-docs/**.

## Docker
1. Build the Docker image using the Docker build command. Replace cumulative-delta with the name you want to give to your Docker image:
````
docker build -t cumulative-delta .
````
2. Once the Docker image is built, you can create and run a Docker container from it using the Docker run command:
````
docker build -t cumulative-delta .
````
This command will start a Docker container from the cumulative-delta image, and map port 3000 inside the container to port 3000 on your host machine.

Please note that you need to have Docker installed on your machine to run these commands.
## API endpoints and exemples
The software offers these API routes:

1. **GET /exchange/:exchange/symbols**
   
   Retrieve a collection of symbols present on the designated exchange.
   
   Illustration: `GET /exchange/kucoin/symbols`

2. **GET /exchange/:exchange/trade-history/:symbol**
   
   Obtain the transaction history of the given symbol on the chosen exchange.
   
   Illustration: `GET /exchange/kucoin/trade-history/BTC-USDT`

3. **GET /exchange/:exchange/cumulative-delta/:symbol**
   
   Compute the cumulative delta for the given symbol on the chosen exchange.
   
   Illustration: `GET /exchange/kucoin/cumulative-delta/BTC-USDT`

Substitute `:exchange` with the exchange name (for instance, kucoin) and `:symbol` with the symbol of the trading pair (for instance, BTC-USDT) in the URLs for the endpoints.
## Testing
You can run the tests with the following command:
```
npm run test
```
To get the test coverage, use the following command:
````
npm run test-coverage
````
## Acknowledgements

 - [How To Trade Using CUMULATIVE DELTA]https://www.youtube.com/watch?v=s01_dNVCaNA
 - [Volume Delta – The Ultimate Order Flow Indicator]https://www.jumpstarttrading.com/volume-delta/


## License

This project is licensed under the ISC License.

## Authors

Andy AFENE
