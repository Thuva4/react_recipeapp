var React = require('react');

var RecipeListSpoonacular = React.createClass(
  {



    render: function(){

      var {temp,location} = this.props;
      var body = [];
      for (var i = 0; i < temp.length; i++) {
        var str = temp[i]['title'].substring(0, 30);
        body.push(
          <div className="col-md-3 portfolio-item hvr-grow" key = {i} title={temp[i]['title']}>
            
                    <img className="img-responsive imageClip" src={temp[i]['image']} alt=""></img>
                    <lable className="pagination-centered">{str}</lable>
                      <div>
                        <br></br>
                      </div>
          </div>

);
  }

      return(
        <div className="row"> {body} </div>

      )
    }
  }
);

module.exports = RecipeListSpoonacular;
