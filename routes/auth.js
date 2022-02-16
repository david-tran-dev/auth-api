const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: '.' });
});

router.post('/login', authController.login);
router.post('/signup', authController.signup);

module.exports = router;
