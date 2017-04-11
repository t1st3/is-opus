'use strict';

module.exports = function (buf) {
	if (!buf || buf.length < 36) {
		return false;
	}

	// Bytes 0 to 3: detect general OGG (OPUS is OGG)
	// Bytes 28 to 35: detect OPUS
	return buf[0] === 79 &&
		buf[1] === 103 &&
		buf[2] === 103 &&
		buf[3] === 83 &&
		buf[28] === 79 &&
		buf[29] === 112 &&
		buf[30] === 117 &&
		buf[31] === 115 &&
		buf[32] === 72 &&
		buf[33] === 101 &&
		buf[34] === 97 &&
		buf[35] === 100;
};
