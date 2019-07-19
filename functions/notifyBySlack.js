const axios = require('axios');

const slackHook = 'https://hooks.slack.com/services/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';

exports.handler = function(event, context, callback) {
	const slackRequest = https.request(options);

	axios.post(url, data).then(() => {
		callback(null, {statusCode: 204});
	}).catch(callback);
}