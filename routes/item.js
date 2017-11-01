/**
 * Created by Administrator on 2017/11/1.
 */
var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '123456' ,
    database:'shanchu'

});

router.post('/list2',function(req,res,next){
    connection.query('SELECT * FROM jingguanran WHERE  title LIKE "%'+req.body.id+'%"',function(err,rows){
        res.header('Access-Control-Allow-Origin','*');
        console.log(rows);
        res.send(rows)
    })

});


module.exports = router;