# is-opus

[![NPM version](https://img.shields.io/npm/v/is-opus.svg)](https://www.npmjs.com/package/is-opus)
[![Build Status](https://travis-ci.org/t1st3/is-opus.svg?branch=master)](https://travis-ci.org/t1st3/is-opus)

> Check if a Buffer/Uint8Array is an [OPUS](https://en.wikipedia.org/wiki/Opus_%28audio_format%29) audio file.


## Install

```sh
$ npm install --save is-opus
```


## Usage

### Node.js

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var isOpus = require('is-opus');
var buffer = readChunk.sync('unicorn.opus', 0, 36);

isOpus(buffer);
//=> true
```

### Browser

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.opus');
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
	isOpus(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```


## API

### isOpus(buffer)

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 36 bytes.


## License

MIT © [t1st3](https://t1st3.com)
