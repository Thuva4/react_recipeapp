var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Main = require('app/components/Main.jsx');

describe('Main', () => {
  it('should exist', () => {
    expect(Main).toExist();
  });
});
