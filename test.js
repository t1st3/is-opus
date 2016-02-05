import path from 'path';
import readChunk from 'read-chunk';
import test from 'ava';
import isOpus from './';

test('should detect OPUS from buffer', function (t) {
	readChunk(path.join(__dirname, 'fixture.opus'), 0, 36, function (err, buf) {
		t.is(err, null);
		t.is(isOpus(buf), true);
	});
});

test('should not detect OPUS on a non-OPUS file', function (t) {
	readChunk(path.join(__dirname, 'fixture.jpg'), 0, 36, function (err, buf) {
		t.is(err, null);
		t.is(isOpus(buf), false);
	});
});
