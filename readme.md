# sns-messenger [![Build Status](https://travis-ci.org/nutshell-lab/sns-messenger.svg?branch=master)](https://travis-ci.org/nutshell-lab/sns-messenger) [![codecov](https://codecov.io/gh/nutshell-lab/sns-messenger/badge.svg?branch=master)](https://codecov.io/gh/nutshell-lab/sns-messenger?branch=master)

> Module to send messages to AWS SNS using AWS System Manager to store channels aliases


## Install

```
$ npm install @nutshelllab/sns-messenger
```


## Usage

```js
const send = require('sns-messenger');

await send('my-topic', 'subject', { foo: 'bar' });
```


## API

### snsMessenger(topic, subject, payload)

#### topic

Type: `string`

SNS topic to send message

#### subject

Type: `string`

Message subject

##### payload

Type: `Object`

Message payload


## License

MIT © [Victor Rebiard--Crépin](https://nutshell-lab.com)
