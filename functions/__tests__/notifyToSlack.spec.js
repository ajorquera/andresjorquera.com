const {handler} = require('../notifyToSlack');
const request = require('request');

jest.mock('request', () => {
    const request = {
        post: jest.fn((params, callback) => callback(null))
    };

    return request;
});

let event;
let context = {};
let callback;
beforeEach(() => {
    callback = jest.fn();
    event = {
        httpMethod: 'POST',
        body: '{"message": "This is my message"}'
    };
});


test('should accept just POST methods', () => {
    const expectToFail = () => {
        expect(callback).toHaveBeenLastCalledWith(null, {statusCode: 405});
    }

    event.httpMethod = 'PATCH';
    handler(event, context, callback);
    expectToFail();

    event.httpMethod = 'GET';
    handler(event, context, callback);
    expectToFail();

    event.httpMethod = 'PUT';
    handler(event, context, callback);
    expectToFail(); 
});

test('should return 422 in case missing params', () => {
    event.body = '';
    handler(event, context, callback);
    expect(callback).toHaveBeenCalledWith(null, {statusCode: 422, body: '{"message": "parameters missing"}'})
});

test('should return 503 in case slack response gives an error', () => {
    const error = {message: 'some slack error'}
    request.post.mockImplementationOnce((params, callback) => callback(error));
    handler(event, context, callback);
    expect(callback).toHaveBeenCalledWith(error)
});

test('should return 204 when success', () => {
    handler(event, context, callback);
    expect(callback).toHaveBeenCalledWith(null, {statusCode: 204})
});