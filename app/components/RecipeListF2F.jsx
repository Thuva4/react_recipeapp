var React = require('react');

var RecipeListEdamam = React.createClass(
  {



    render: function(){
      var {temp,location} = this.props;
      var body = [];
      for (var i = 0; i < temp.length; i++) {
        var str = temp[i]['title'].substring(0, 30);
        body.push(
          <div className="col-md-3 portfolio-item" key = {i}>
             <a href={temp[i]['f2f_url']} target="_blank" data-toggle="tooltip" title={temp[i]['title']}>
                  <img className="img-responsive imageClip" src={temp[i]['image_url']} alt=""></img>
                  <lable className="pagination-centered">{str}</lable>
              </a>
        </div>

);
  }

      return(
        <div className="row"> {body} </div>

      )
    }
  }
);

module.exports = RecipeListEdamam;
