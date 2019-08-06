var assert = require('assert')

describe('es/express', function () {
  var express = require('../index.js')

  it('express["mime-espresso"] is "application/x-espresso".', function () {
    assert.strict.equal(express['mime-espresso'], 'application/x-espresso')
  })

  it('express["to-parse-es-body"] is a middleware function.', function () {
    assert.strict.equal(typeof express['to-parse-es-body'], 'function')
    assert.strict.equal(express['to-parse-es-body'].length, 3)
  })

  it('express["to-allow-any-origin"] is a middleware function.', function () {
    assert.strict.equal(typeof express['to-allow-any-origin'], 'function')
    assert.strict.equal(express['to-allow-any-origin'].length, 3)
  })

  it('express.app() returns an Espresso generic function object.', function () {
    var app = express.app()
    assert.strict.equal(typeof app, 'object')
    assert.strict.equal(typeof app.call, 'function')
    assert.strict.equal(typeof app.new, 'function')
    assert.strict.equal(typeof app.use, 'function')
  })

  it('express["public-api"]() returns an Espresso generic function object.', function () {
    var app = express['public-api']()
    assert.strict.equal(typeof app, 'object')
    assert.strict.equal(typeof app.call, 'function')
    assert.strict.equal(typeof app.new, 'function')
    assert.strict.equal(typeof app.use, 'function')
  })

  describe('$express', function () {
    var $express = require('express')

    describe('request', function () {
      var request = $express.request

      it('request["es-app"] is a function ', function () {
        assert.strict.equal(typeof request['es-app'], 'function')
        assert.strict.equal(request['es-app'].length, 0)
      })
    })

    describe('response', function () {
      var response = $express.response

      it('response["es-app"] is a function ', function () {
        assert.strict.equal(typeof response['es-app'], 'function')
        assert.strict.equal(response['es-app'].length, 0)
      })
      it('response.es is a function ', function () {
        assert.strict.equal(typeof response.es, 'function')
        assert.strict.equal(response.es.length, 1)
      })
      it('response.body is a function ', function () {
        assert.strict.equal(typeof response.body, 'function')
        assert.strict.equal(response.body.length, 1)
      })
    })
  })
})
