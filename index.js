import { SNS, SSM } from 'aws-sdk'

const sns = new SNS({ apiVersion: '2010-03-31' })
const ssm = new SSM({ apiVersion: '2014-11-06' })

const resolve = name =>
  ssm
    .getParameter({ Name: `sns-${name}` })
    .promise()
    .then(result => result.Value)
    .catch(() => {
      throw new Error(`Unable to resolve channel '${name}'`)
    })

const send = (topic, subject, message) =>
  sns.publish({ TopicArn: topic, Subject: subject, Message: message }).promise()

export default async (channel, subject, payload = {}) => {
  const topic = await resolve(channel)
  const message = JSON.stringify(payload)
  return send(topic, subject, message)
}
