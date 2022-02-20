const jwt = require('jsonwebtoken');
const User = require('../models/User');
const errorController = require('./errorController');

const maxAge = 3 * 24 * 60 * 60;
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
      const token = authController.createToken(user._id);
      console.log('token:', token);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({ user: user._id });
    } catch (err) {
      const errors = errorController.handleDBErrors(err);
      console.log('errors:', errors);
      res.status(400).send({ errors });
    }
  },

  createToken: (id) => jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  }),

};

module.exports = authController;
