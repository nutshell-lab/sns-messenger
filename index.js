import { SNS, SSM } from 'aws-sdk'

const sns = new SNS({ apiVersion: '2010-03-31' })
const ssm = new SSM({ apiVersion: '2014-11-06' })

const resolve = async name => {
  try {
    const { Parameter } = await ssm.getParameter({ Name: `sns-${name}` }).promise()
    return Parameter.Value
  } catch (err) {
    throw new Error(`Unable to resolve channel '${name}'`)
  }
}

const send = (topic, message, options) =>
  sns.publish({ TopicArn: topic, Message: message, ...options }).promise()

export default async (channel, payload = {}, options = {}) => {
  const topic = await resolve(channel)
  const message = JSON.stringify(payload)
  return send(topic, message, options)
}
