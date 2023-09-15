import request from 'supertest';
import app from '../index';

describe('Exchange Routes', () => {
  it('should fetch symbols for a given exchange', async () => {
    const res = await request(app).get('/exchange/kucoin/symbols');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    // Add more assertions based on your application's behavior
  });

  it('should fetch trade history for a given symbol and exchange', async () => {
    const res = await request(app).get('/exchange/kucoin/trade-history/BTC-USDT');
    expect(res.statusCode).toEqual(200);
    // Add more assertions based on your application's behavior
  });

  it('should calculate the cumulative delta for a given symbol and exchange', async () => {
    const res = await request(app).get('/exchange/kucoin/cumulative-delta/BTC-USDT');
    expect(res.statusCode).toEqual(200);
    // Add more assertions based on your application's behavior
  });
});