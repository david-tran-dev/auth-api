const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_CONNECTION;

const dbConnexion = mongoose.connect(dbURI)
  .then(() => {
    console.log('>> Database connected');
  })
  .catch((err) => console.log(err));

module.exports = dbConnexion;
