# sns-messenger [![Build Status](https://travis-ci.org/nutshell-lab/sns-messenger.svg?branch=master)](https://travis-ci.org/nutshell-lab/sns-messenger) [![codecov](https://codecov.io/gh/nutshell-lab/sns-messenger/badge.svg?branch=master)](https://codecov.io/gh/nutshell-lab/sns-messenger?branch=master)

> Module to send messages to AWS SNS using AWS System Manager to store channels aliases


## Install

```
$ npm install @nutshelllab/sns-messenger
```


## Usage

```js
const send = require('sns-messenger');

(async () => {
  await send('my-topic', { foo: 'bar' }, { Subject: 'foobar' });
})
```


## API

### snsMessenger(topic, payload, options)

#### topic

Type: `string`

SNS topic to send message

##### payload

Type: `Object`

Message payload

##### options

Type: `Object`

Extra AWS SNS parameters, see [AWSJavaScriptSDK documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html#publish-property)


## License

MIT © [Victor Rebiard--Crépin](https://nutshell-lab.com)
