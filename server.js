const express = require('express');
const cors = require('cors');

const BlogRoutes = require('./routes/routes_blog');

const app = express();

app.use(cors({
  origin: [
    'https://blog-frontend-hqwt.vercel.app',
    'https://blog-crud-using-http-module-y2rx.vercel.app',
    'https://rxjs-6hew.vercel.app',
    'https://blog-rx-js-taks.vercel.app',
    'https://rxjs2-two.vercel.app',
    'http://localhost:4200'
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));

app.use(express.json());

app.use('/api/blogs', BlogRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});