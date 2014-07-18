//输出了创建的数据库连接

var settings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;

var obj = new Server(settings.host, Connection.DEFAULT_PORT, {})
module.exports = new Db(settings.db, obj);