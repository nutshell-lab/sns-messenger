import test from 'ava'
import messenger from '.'

test('throws resolve error', async t => {
  const err = await t.throws(messenger('unkown-channel', 'yo', { foo: 'bar' }))
  t.is(err.message, "Unable to resolve channel 'unkown-channel'")
})
