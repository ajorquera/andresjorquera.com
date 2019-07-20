const request = require("request");

const slackHook = 'https://hooks.slack.com/services/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';

const preflightReponse = {
	statusCode: 204,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST',
		'Access-Control-Allow-Headers': 'content-type'
	}
}


exports.handler = function(event, context, callback) {
	const method = event.httpMethod

	if(method === 'OPTIONS') {
		return callback(null, preflightReponse);
	}

	if(method !== 'POST') {
		return callback(null, {statusCode: 405});
	}

	let body;
	try {
		body = JSON.parse(event.body);
	} catch(e) {}

	if(body && body.message) {
		const payload = {text: body.message};
		
		request.post({url: slackHook, body: payload, json: true}, (err) => {
			if(err) return callback(err);

			callback(null, {statusCode: 204});
		});
	} else {
		callback(null, {statusCode: 422, body: '{"message": "parameters missing"}'});
	}
}