'use strict';

const Mongodb = require('@pick-star/cli-mongodb'); // 封装mongodb的方法

const { mongodbUrl, mongodbDbName } = require('../../config/db');


function mongo() { // 返回一个mongodb的实例
  return new Mongodb(mongodbUrl, mongodbDbName);
}

module.exports = mongo;
