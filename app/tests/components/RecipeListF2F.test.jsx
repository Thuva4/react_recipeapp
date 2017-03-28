var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var RecipeListF2F = require('app/components/RecipeListF2F.jsx');

describe('RecipeListF2F', () => {
  it('should exist', () => {
    expect(RecipeListF2F).toExist();
  });
});
