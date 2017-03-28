var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var SearchForm = require('app/components/SearchForm.jsx');

describe('SearchForm', () => {
  it('should exist', () => {
    expect(SearchForm).toExist();
  });
  it('should be currect',()=>{
    var spy = expect.createSpy();
    var searchForm = TestUtils.renderIntoDocument(<SearchForm onSearch={spy}/>)
    var $el = $(ReactDOM.findDOMNode(searchForm));

    searchForm.refs.location.value='chicken';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith('chicken');
  })
});
