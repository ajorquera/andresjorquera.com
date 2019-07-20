const request = require("request");

const slackHook = 'https://hooks.slack.com/services/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';

exports.handler = function(event, context, callback) {
	if(event.httpMethod !== 'POST') {
		return callback(null, {statusCode: 405});
	}

	let body;
	try {
		body = JSON.parse(event.body);
	} catch(e) {}

	if(body && body.message) {
		const payload = {text: body.message};
		
		request.post({slackHook, json: payload}, (err) => {
			if(err) return callback(err);

			callback(null, {statusCode: 204});
		});
	} else {
		callback(null, {statusCode: 422, body: '{"message": "parameters missing"}'});
	}
}