'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks) // get all tasks
    .post(todoList.create_a_task); // create a task and post to database

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task) // get a single task
    .put(todoList.update_a_task) // update a task
    .delete(todoList.delete_a_task) // delete task
}
