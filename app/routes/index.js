'use strict';

var path = process.cwd();


module.exports = function (app) {
	
	app.get('/',function (req, res) {
		res.send("Hello World!");
	});
	
	
/*
	
		
	app.get('/:date',function (req, res) {
		var date = req.params.date;
		res.setHeader('Content-Type', 'application/json');
		res.json(MakeDate(date));
	});	
*/	

};
