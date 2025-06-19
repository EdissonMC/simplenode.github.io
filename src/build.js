const fs = require('fs');
const app = require('./app');
const request = require('supertest');
Console.log('Building static HTML...');
(async () => {
  const res = await request(app).get('/');
  fs.mkdirSync('public', { recursive: true });
  fs.writeFileSync('public/index.html', res.text);
  console.log('Static HTML generated!');
})();
