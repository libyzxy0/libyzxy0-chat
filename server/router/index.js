const express = require('express');
const router = express.Router();
const {
  login,
  signup,
  verify
} = require('../controllers/handleAuth');

router.route('/auth/login').post(login)
router.route('/auth/signup').post(signup)
router.route('/auth/verify').post(verify)

module.exports = router;