Cumulative Delta Calculator

This project is a tool to fetch trade histories and calculate the cumulative delta for a specific trading pair on an exchange. Currently, it supports the Kucoin exchange.
Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
Installing

1. Clone the repository to your local machine.

2. Install the dependencies:
    
3. Create a .env file in the root directory of the project and add your Kucoin API credentials:
Running the Application

You can start the application with the following command:

The application will start and listen on port 3000 by default. You can change the port by setting the PORT environment variable in the .env file.
Docker

You can also run the application inside a Docker container. Build the Docker image with the following command:

Then, run the Docker container:
API Endpoints

The application provides the following API endpoints:

- GET /exchange/:exchange/symbols: Get a list of symbols available on the specified exchange.
- GET /exchange/:exchange/trade-history/:symbol: Get the trade history for the specified symbol on the specified exchange.
- GET /exchange/:exchange/cumulative-delta/:symbol: Calculate the cumulative delta for the specified symbol on the specified exchange.
Testing

You can run the tests with the following command:
Linting

You can run the linter with the following command:
Built With

- Express - The web framework used
- axios - Promise based HTTP client for the browser and node.js
- Kucoin-node-sdk - The SDK used to interact with the Kucoin API
License

This project is licensed under the ISC License.