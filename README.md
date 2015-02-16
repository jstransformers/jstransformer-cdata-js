# jstransformer-cdata-js

Transformer that converts a string to an XML CDATA.

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-cdata-js/master.svg)](https://travis-ci.org/jstransformers/jstransformer-cdata-js)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-cdata-js/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-cdata-js?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-cdata-js.svg)](https://www.npmjs.org/package/jstransformer-cdata-js)

## Installation

    npm install jstransformer-cdata-js

## API

```js
var cdata = require('jstransformer')(require('jstransformer-cdata-js'))

console.log(cdata.render('"hello world"').body)
// Prints:
// //<![CDATA[
// "hello world"
// //]]>

// ']]>' is properly escaped:
console.log(cdata.render('var str = "<[[goodbye world]]>"').body)
// Prints:
// //<![CDATA[
// var str = "<[[goodbye world]]]]><![CDATA[>"
// //]]>
```

## License

MIT
