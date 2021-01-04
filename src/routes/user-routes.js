const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.allUsers);

 /**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.post('/', userController.createUser);

module.exports = router;