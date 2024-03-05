const express = require('express')
const router = express.Router()
const {
    get_all_tasks
} = require('../controllers/task.controller.js')

router.get('/alltasks', get_all_tasks);

module.exports = {
    router,
    
}