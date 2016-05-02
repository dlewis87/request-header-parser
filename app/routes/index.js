'use strict';

var path = process.cwd();

function createHeader(ip, lang, software){
	return {"ipaddress":ip,"language":lang,"software":software}
}


module.exports = function (app) {
	
	app.get('/',function (req, res) {
		
		var ip = req.headers['x-forwarded-for'] || 
		     req.connection.remoteAddress || 
		     req.socket.remoteAddress ||
		     req.connection.socket.remoteAddress;
		     
		var lang = req.headers["accept-language"].split(",")[0];
		var userAgent = req.headers['user-agent'];
		var software = userAgent.match(/\([^\)]*/g)[0].replace("(","");
		
		res.setHeader('Content-Type', 'application/json');
		res.json(createHeader(ip, lang, software));
		
	});
	
	
/*
	
		
	app.get('/:date',function (req, res) {
		var date = req.params.date;
		res.setHeader('Content-Type', 'application/json');
		res.json(MakeDate(date));
	});	
*/	

};
