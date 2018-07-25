import test from 'ava'
import messenger from '.'

test('throws resolve error', t => {
	const err = t.throws(() => {
		messenger('unkown-channel', 'yo', { foo: 'bar' })
	}, Error)
	t.is(err.message, "Unable to resolve channel 'unkown-channel'")
})
