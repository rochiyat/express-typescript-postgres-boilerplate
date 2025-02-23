import request from 'supertest';
import app from '../src/index';

describe('API Demo Tests', () => {
  it('should return 200 on GET /', async () => {
    // Arrange
    const expectedStatus = 200;
    const expectedMessage = 'Success';

    // Act
    const res = await request(app).get('/api/demo');

    // Assert
    expect(res.status).toBe(expectedStatus);
    expect(res.body).toHaveProperty('message');
  });

  it('should return 200 on GET /:id', async () => {
    // Arrange
    const expectedStatus = 200;
    const expectedMessage = 'Success';

    // Act
    const res = await request(app).get('/api/demo/test');

    // Assert
    expect(res.status).toBe(expectedStatus);
    expect(res.body).toHaveProperty('message');
  });

  it('should return 404 on an unknown route', async () => {
    // Arrange
    const expectedStatus = 404;
    const expectedMessage = 'Not Found';

    // Act
    const res = await request(app).get('/unknown-route');

    // Assert
    expect(res.status).toBe(expectedStatus);
  });
});
