const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config();
const mongoose = require('mongoose');
const router = require('./routes/auth');

// Database connect
mongoose.connect(process.env.MONGODB_CONNECTION)
  .then(() => console.log('>> Database connected'))
  .catch((err) => console.log(err));

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  metohds: ['GET', 'POST'],
}));
app.use(express.json());
app.use(cookieParser());
app.use(router);

app.get('/set-cookies', (req, res) => {
  res.cookie('newUser', true, { httpOnly: true });
  res.send('got a cookie');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Started at http://localhost:5000');
});
