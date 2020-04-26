# jstransformer-cdata-js

XML CDATA support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-cdata-js/master.svg)](https://travis-ci.org/jstransformers/jstransformer-cdata-js)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-cdata-js/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-cdata-js)
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
