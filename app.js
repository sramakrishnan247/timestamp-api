var express = require('express')
var app = express()

app.get('/:ourdate', function (req, res) {
	var ourdate = req.params.ourdate;
	console.log(ourdate);			
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})