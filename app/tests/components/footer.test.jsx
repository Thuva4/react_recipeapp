var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Footer = require('app/components/footer.jsx');

describe('Footer', () => {
  it('should exist', () => {
    expect(Footer).toExist();
  });
});
