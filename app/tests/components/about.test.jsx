var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var About = require('app/components/about.jsx');

describe('About', () => {
  it('should exist', () => {
    expect(About).toExist();
  });
});
