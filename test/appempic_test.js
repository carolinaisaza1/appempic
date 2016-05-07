'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('El nombre debe ser Carolina', function () {
    appempic.getName().should.equal('Carolina1');
  });

  it('El apellido debe ser Isaza', function () {
    appempic.getLastName().should.equal('Isaza');
  });

});
