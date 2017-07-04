var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

var hellModel = require('../data/HellTracker.model.js');
var userModel = require('../data/HellTracker.user.js');

var jsonParser = bodyParser.json();

router.get('/',function(req, res){
	res.sendFile(path.join(__dirname, '../../client/HellTracker.html'));
});

router.get('/Login', function(req, res){
	res.sendFile(path.join(__dirname, '../../client/HellTracker.html'));
})

router.post('/loginRequest', jsonParser, function(req, res){
	userModel.find({name: req.body.Name, password: req.body.Password}, 
				{name: true, password: true, epics: true}, function(err, result){
		if (err){
			res.status(500).send(err);
		} else {
			if (result.length === 0){
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify({Success: false, msg: "Incorrect username or password"}));
			} else {
				req.session.user = result[0]._id;
				req.session.save();
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify({Success: true, msg: "", data: result[0].epics}));
			}
		}
	});
});

router.post('/addRecord', jsonParser, function(req, res){
	if (!req.session.user){
		res.status(500).send();
	}
	userModel.findById(req.session.user, function(err, val){
		for (var i = 0; i < req.body.length; i++){
			var data = new hellModel({
				itemName: req.body[i].Name,
				itemLevel: req.body[i].Level,
				type1: req.body[i].Type,
				type2: req.body[i].Type2,
			});
			val.epics.push(data);
		}

		val.save(function(err, val){
			if (err){
				res.status(500).send(err);
			}
		})
		res.setHeader('Content-Type', 'application/json');
		res.status(200).send(JSON.stringify({Success: true, msg: ""}));
	});	
});

router.put('/signupRequest', jsonParser, function(req, res){
	userModel.find( {name: req.body.Username}, {name: true}, function(err, val){
		if (err){
			res.status(500).send(err);
		} else {
			if (val.length === 0){
				userModel.create({name: req.body.Username,
					password: req.body.Password, epics: []}, function(err, result){
						if(err){
							res.status(500).send(err);
						} else {
							req.session.user = result._id;
							req.session.save();
							res.setHeader('Content-Type', 'application/json');
							res.send(JSON.stringify({Success: true, msg: ""} ));
						}
	    		  	});
	    		  
			} else {
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify({Success: false, msg: "Account name is taken already!"} ));
			}
			
		}
	});
});

router.get('*', function(req, res){
	if (!req.session.user){
		res.redirect('/Login');
	} else {
		res.redirect('/Login');
		res.sendFile(path.join(__dirname, '../../client/HellTracker.html'));
	}
});

module.exports = router;
