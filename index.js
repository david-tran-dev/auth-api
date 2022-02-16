const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const router = require('./routes/auth');
const dbConnexion = require('./database');

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 5000, () => {
  console.log('Started at http://localhost:5000');
});
