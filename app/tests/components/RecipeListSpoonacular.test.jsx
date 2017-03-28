var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var RecipeListSpoonacular = require('app/components/RecipeListSpoonacular.jsx');

describe('RecipeListSpoonacular', () => {
  it('should exist', () => {
    expect(RecipeListSpoonacular).toExist();
  });
});
