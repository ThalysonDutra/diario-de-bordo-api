const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

//router.get('/alltasks',);

router.post('/', taskController.createTask);
router.get('/:idUser', taskController.findTasks);

router.get('/id/:idTask', taskController.findTaskbyId);
router.delete('/id/:idTask', taskController.deleteTask);

router.get('/user/:idUser/status/:status', taskController.listTaskByStatus);
router.put('/id/:idTask/status/:status', taskController.updateTaskstatus);

router.post('/id/:idTask', taskController.updateTask);

module.exports = router;