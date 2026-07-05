const express = require('express');
const cors = require('cors');

const BlogRoutes = require('./routes/routes_blog');

const app = express();

app.use(cors()); // <-- temporarily allow all origins

app.use(express.json());

app.use('/api/blogs', BlogRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});