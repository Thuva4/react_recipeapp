var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Register = require('app/components/Register.jsx');

describe('Register', () => {
  it('should exist', () => {
    expect(Register).toExist();
  });
});
