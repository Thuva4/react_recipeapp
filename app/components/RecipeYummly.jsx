var React = require('react');

var RecipeYummly = React.createClass({

    render: function() {
        var {temp3, location} = this.props;
        var body = [];
        for (var i = 0; i < 100; i++) {
            var str = temp3[i]['recipeName'].substring(0, 30);
            body.push(
                <div className="col-md-3 portfolio-item hvr-grow" key={i}>
                    <a href={temp3[i]['imageUrlsBySize']['90']} target="_blank" data-toggle="tooltip" title={temp3[i]['recipeName']}>
                        <img className="img-responsive imageClip" src={temp3[i]['imageUrlsBySize']['90']} alt=""></img>
                        <lable className="pagination-centered">{str}</lable>
                    </a>
                    <div>
                      <br></br>
                    </div>

                </div>

            );
        }

        return (
            <div className="row">
                {body}
            </div>

        )
    }
});

module.exports = RecipeYummly;
