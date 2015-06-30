# jstransformer-cdata-js

Transformer that converts a JavaScript string to an XML CDATA.

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-cdata-js/master.svg)](https://travis-ci.org/jstransformers/jstransformer-cdata-js)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-cdata-js/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-cdata-js?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-cdata-js/master.svg)](http://david-dm.org/jstransformers/jstransformer-cdata-js)
[![NPM version](https://img.shields.io/npm/v/jstransformer-cdata-js.svg)](https://www.npmjs.org/package/jstransformer-cdata-js)

## Installation

    npm install jstransformer-cdata-js

## API

```js
var cdata = require('jstransformer')(require('jstransformer-cdata-js'))

cdata.render('"hello world"').body
// <![CDATA[
// "hello world"
// //]]>

// ']]>' is properly escaped:
cdata.render('var str = "<[[goodbye world]]>"').body
// <![CDATA[
// var str = "<[[goodbye world]]]]><![CDATA[>"
// //]]>
```

## License

MIT
