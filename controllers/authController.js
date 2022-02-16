const User = require('../models/User');
const errorController = require('./errorController');

const authController = {

  login: async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    res.send('login');
  },

  signup: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.create({ email, password });
      res.status(201).json(user);
    } catch (err) {
      const errors = errorController.handleDBErrors(err);
      console.log('errors:', errors);
      res.status(400).send({ errors });
    }
  },

};

module.exports = authController;
