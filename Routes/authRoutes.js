const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');
    //imported :)

router.get('/generate-token', authController.generateToken);
// now we import the file :)
//last step before lunch break

//new day
router.post('/verify-token', authController.verifyToken);







module.exports = router;