'use strict';

const Postmen = require('./../index');
const Credentials = require('./credentials');

let postmen = Postmen(Credentials.api_key, Credentials.region);

// get all  labels
postmen.get('/labels', function (err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log(result);
	}
});

// get a particular  labels
postmen.get('/rates/put-your-label-id-here', function (err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log(result);
	}
});