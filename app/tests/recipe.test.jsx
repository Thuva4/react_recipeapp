var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Recipe = require('app/components/Recipe.jsx');

describe('Recipe', () => {
  it('should exist', () => {
    expect(Recipe).toExist();
  });
  describe('getInitialState',()=>{
    it('isLoading is false',()=>{
      var recipe =
 TestUtils.renderIntoDocument(<Recipe/>);
var expected = false;
var actual = recipe.getInitialState();
expect(actual.isLoading).toBe(expected);    })
  });

  describe('handleSearch',()=>{
    it('Fetching is success',()=>{
      var recipe =
 TestUtils.renderIntoDocument(<Recipe/>);
var expected = true;
var actual = recipe.handleSearch('cheese');
expect(actual).toBe(expected);    })
  });


});
