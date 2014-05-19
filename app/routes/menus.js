'use strict';

// var traceur = require('traceur');
// var Menu = traceur.require(__dirname + '/../models/menu.js');
var _ = require('lodash');

var menus = global.nss.db.collection('menus');

exports.index = (req, res)=>{
  menus.find().toArray((e,menu)=>{
    res.render('menus/index', {menu:menu});
  });
};

exports.orderform = (req, res)=>{
  menus.find().toArray((e,menu)=>{
    var types = _.uniq(menu.map(a=>a.type));
    var dishes = menu.map(a=>a.food);

    res.render('menus/orderform', {types:types, dishes:dishes});
  });

};
