var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var neo4j = require('neo4j-driver');
var driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'wowhi223'));
var session = driver.session();
var fsmResult = require('../fsmResult');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session_value = require('../session');


/*
router.get('/', function(req, res, next) {
  res.render('data/analyzeFreq.ejs', {esession: session_value.getSession()});
});
*/
router.get('/', function (req, res, next) {
  let result = fsmResult.getfsm_result();
  fsmResult.setfsm_result("");
  res.render('data/analyzeFreq.ejs', {esession: session_value.getSession(), data:result});
});



module.exports = router;