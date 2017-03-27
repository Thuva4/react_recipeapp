var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Login = require('app/components/login.jsx');

describe('Login', () => {
  it('should exist', () => {
    expect(Login).toExist();
  });
});
