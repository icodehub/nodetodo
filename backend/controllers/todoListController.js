let Todo = require('../model/todo.model');// Handle index actions
exports.index = function (req, res) {
    Todo.get(function (err, contacts) {
        
        res.json({
            status: 'API Its Working',
            message: 'Welcome to RESTHub crafted with love! sandeep'
        });
        // if (err) {
        //     res.json({
        //         status: "error",
        //         message: err,
        //     });
        // }
        // res.json({
        //     status: "success",
        //     message: "Contacts retrieved successfully",
        //     data: contacts
        // });
    });
};

exports.add = function(req, res){
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
};