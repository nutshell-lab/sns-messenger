"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _awsSdk = require("aws-sdk");

const sns = new _awsSdk.SNS({
  apiVersion: '2010-03-31'
});
const ssm = new _awsSdk.SSM({
  apiVersion: '2014-11-06'
});

const resolve = async name => {
  try {
    const param = await ssm.getParameter({
      Name: `sns-${name}`
    }).promise();
    return param.Value;
  } catch (err) {
    throw new Error(`Unable to resolve channel '${name}'`);
  }
};

const send = (topic, message, options) => sns.publish({
  TopicArn: topic,
  Message: message,
  ...options
}).promise();

var _default = async (channel, payload = {}, options = {}) => {
  const topic = await resolve(channel);
  const message = JSON.stringify(payload);
  return send(topic, message, options);
};

exports.default = _default;
