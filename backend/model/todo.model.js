const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_description: {
        type: String
    },
    todo_responsible: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
});

var TodoModel = module.exports = mongoose.model('Todo', Todo);

module.exports.get = function (callback, limit) {
    TodoModel.find(callback).limit(limit);
}