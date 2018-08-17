"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _awsSdk = require("aws-sdk");

const sns = new _awsSdk.SNS({
  apiVersion: '2010-03-31'
});

const send = (topic, message, options) => sns.publish({
  TopicArn: topic,
  Message: message,
  ...options
}).promise();

var _default = async (topic, payload = {}, options = {}) => {
  const message = JSON.stringify(payload);
  return send(topic, message, options);
};

exports.default = _default;
