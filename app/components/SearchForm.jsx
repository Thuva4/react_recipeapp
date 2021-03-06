var React = require('react');

var SearchForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length>0){
      this.refs.location.value='';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <div className="container text-center">
        <div>
      <form onSubmit={this.onFormSubmit}>
    <label for="exampleInputEmail1">Ingredients</label>
    <input type="text" ref="location" className="form-control" placeholder="chicken,cheese,..."></input>
    <br></br>
    <br></br>
  <button type="submit" className="btn btn-primary center-block">Primary</button>
    </form>
  </div>
  </div>

    )
  }
});

module.exports = SearchForm;
