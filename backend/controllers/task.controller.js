const {getAllTasks} = require('../models/task.model.js')

const get_all_tasks = (req,res) => {
    getAllTasks()
    .then(data=>{
        res.json(data)
     })
     .catch((err)=>{
        console.log(err)
        res.status(404).json({mesg: 'Not Found'})
     }) 
}

module.exports = {
    get_all_tasks,
    
}