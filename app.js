var express = require('express');
var app = express();
var moment = require('moment');

app.set('view engine', 'ejs');

app.get('/:ourdate', function (req, res) {
	var ourdate = req.params.ourdate;
	var unixdate;
	var humandate;

	var b = moment(ourdate)			
	var a = moment.unix(ourdate)


	if(a==="Invalid date" && b==="Invalid date"){
		ourdate = "Invalid date";
	}
	else if(moment(a).isValid()){
		ourdate = a;
		unixdate = moment(a).unix();
		humandate = moment(a).format("MMMM DD, YYYY");

	} 			
	else {
		ourdate = b;
		unixdate = moment(b).unix();
		humandate = moment(b).format("MMMM DD, YYYY");
	}
	console.log(ourdate,unixdate,humandate);
	 // res.send(JSON.stringify({ a: 1 }));
	res.send(JSON.stringify({unix:unixdate, natural:humandate}));
  	// res.render('hello',{ourdate:ourdate, unixdate:unixdate, humandate:humandate})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})