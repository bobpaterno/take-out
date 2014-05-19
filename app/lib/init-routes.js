'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var menus = traceur.require(__dirname + '/../routes/menus.js');


  app.get('/', dbg, home.index);
  app.get('/menus', dbg, menus.index);
  app.get('/menus/orderform', dbg, menus.orderform);

  console.log('Routes Loaded');
  fn();
}
