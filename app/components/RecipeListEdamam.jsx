var React = require('react');

var RecipeListEdamam = React.createClass(
  {



    render: function(){
      var {temp1,location} = this.props;
      var body = [];
      for (var i = 0; i < temp1.length; i++) {
        var str = temp1[i]['recipe']['label'].substring(0, 30);
        body.push(
          <div className="col-md-3 portfolio-item" key = {i}>
                <a href={temp1[i]['recipe']['url']} target="_blank" data-toggle="tooltip" title={temp1[i]['recipe']['label']}>
                    <img className="img-responsive imageClip" src={temp1[i]['recipe']['image']} alt=""></img>
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
