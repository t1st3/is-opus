import path from 'path';
import readChunk from 'read-chunk';
import test from 'ava';
import isOpus from './';

test('should detect OPUS from buffer', t => {
	t.is(isOpus(readChunk.sync(path.join(__dirname, 'fixture.opus'), 0, 36)), true);
});

test('should not detect OPUS on a non-OPUS file', t => {
	t.is(isOpus(readChunk.sync(path.join(__dirname, 'fixture.jpg'), 0, 36)), false);
});
