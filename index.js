'use strict'

var path = require('path')
var espresso = require('eslang')

// create the void.
var $void = espresso()
require('./profile')($void)

// prepare the path of app home directory.
var srcHome = path.join(__dirname, 'es')
var being = $void.createBootstrapSpace(path.join(srcHome, '@'))

// export an Espresso module to JS.
module.exports = being.$import('./express')
