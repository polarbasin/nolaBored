const express = require('express');
module.exports.create = function(req, res) {
  let a = console.log('Hello');
  res.send(a);
}