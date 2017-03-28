var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Nav = require('app/components/nav.jsx');

describe('Nav', () => {
  it('should exist', () => {
    expect(Nav).toExist();
  });
});
