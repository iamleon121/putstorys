var mysql      = require('mysql');
var express = require('express');
var app = express();


var connection = mysql.createConnection({
  host     : 'mysql.106.100311.com',
  user     : 'a0728142517',
  password : '6b7d38ae',
  database : 'a0728142517',
  insecureAuth: true
});
 
connection.connect();
 
var  sql = 'SELECT * FROM a';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result[0].info);
       console.log('------------------------------------------------------------\n\n'); 
       var aud="";
       if(result[0].info=121)aud="http://www.runoob.com/try/demo_source/horse.mp3"
app.get('/', function (req, res) {
   res.send('<audio controls autoplay><source src="'+aud+'" type="audio/mpeg"></audio>');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})


});
 
connection.end();