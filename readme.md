# sns-messenger
[![Build Status](https://travis-ci.org/nutshell-lab/sns-messenger.svg?branch=master)](https://travis-ci.org/nutshell-lab/sns-messenger) ![npm bundle size](https://img.shields.io/bundlephobia/min/@nutshelllab/sns-messenger.svg) [![Maintainability](https://api.codeclimate.com/v1/badges/10d58a30e59d0062f915/maintainability)](https://codeclimate.com/github/nutshell-lab/sns-messenger/maintainability)

> Just sugar syntax over AWS SNS.send()


## Install

```
yarn add @nutshelllab/sns-messenger
```


## Usage

```js
import send from '@nutshelllab/sns-messenger'

const arn = topic => {
  const region = process.env.AWS_REGION
  const account = process.env.AWS_ACCOUNT_ID
  const stage = process.env.SLS_STAGE
  return `arn:aws:sns:${region}:${account}:${topic}-${stage}`
}

(async () => {
  await send(arn('my-topic'), { foo: 'bar' }, { Subject: 'foobar' })
})
```


## API

### snsMessenger(topicArn, payload, options)

#### topicArn

Type: `string`

SNS topic's arn to send message

##### payload

Type: `Object`

Message payload

##### options

Type: `Object`

Extra AWS SNS parameters, see [AWSJavaScriptSDK documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html#publish-property)


## License

MIT © [Nutshell](https://nutshell-lab.com)
