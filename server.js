const express = require('express');
const cors = require('cors');

const BolgRoutes = require('./routes/routes_blog');

const app = express();
app.use(cors({
    origin : ['https://blog-frontend-hqwt.vercel.app/', 'http://localhost:4200'],
    methods : ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));
app.use(express.json())

app.use("/api/blogs", BolgRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server runs on post ${PORT}`);
});

