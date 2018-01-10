'use strict'

const re = /]]>/g

exports.name = 'cdata-js'
exports.outputFormat = 'html'

exports.render = function (str) {
  const escaped = str.replace(re, ']]]]><![CDATA[>')
  return '//<![CDATA[\n' + escaped + '\n//]]>'
}
