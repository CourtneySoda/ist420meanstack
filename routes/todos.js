var express = require('express');
var router = express.Router();
var Todo = require('../models/ToDo.js');

/* GET /todos listing. */
router.get('/', function(req, res) {
  Todo.find(function (err, todos) {
    if (err) 
    res.send(err)
    res.json(todos);
  });
});

/* POST /todos */
router.post('/', function(req, res) {
  Todo.create({
    text : req.body.text,
    done : false
  }, function (err, todo) {
    if (err) 
    res.send(err);

    Todo.find(function(err, todos){
      if (err)
      res.send(err)
      res.json(todos);
    });
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;