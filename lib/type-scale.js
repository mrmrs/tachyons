var _ = require('lodash')
var fs = require('fs')
var gzip = require('gzip-size')
var filesize = require('filesize')
var cssstats = require('cssstats')

var module = require('tachyons-type-scale/package.json')
var moduleCss = fs.readFileSync('node_modules/tachyons-type-scale/tachyons-type-scale.min.css', 'utf8')
var moduleObj = cssstats(moduleCss)
var moduleSize = filesize(moduleObj.gzipSize)

var srcCSS = fs.readFileSync('./src/_type-scale.css', 'utf8')

var template = fs.readFileSync('./templates/docs/type-scale/index.html', 'utf8')
var tpl = _.template(template)
var html = tpl({
  moduleVersion: module.version,
  moduleSize: moduleSize,
  moduleObj: moduleObj,
  srcCSS: srcCSS
})

fs.writeFileSync('./docs/typography/scale/index.html', html)