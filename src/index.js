import { SNS } from 'aws-sdk'

const sns = new SNS({ apiVersion: '2010-03-31' })

const send = (topic, message, options) =>
  sns.publish({ TopicArn: topic, Message: message, ...options }).promise()

export default async (topic, payload = {}, options = {}) => {
  const message = JSON.stringify(payload)
  return send(topic, message, options)
}
