const {db} = require('../config/connection.js')

const getAllTasks = () => {
    return db('tasks')
    .select('*')
}

module.exports = {
    getAllTasks,
    
}