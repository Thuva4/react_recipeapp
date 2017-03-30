var React = require('react');
var SearchForm = require('./SearchForm.jsx');
var RecipeListF2F = require('./RecipeListF2F.jsx');
var RecipeListEdamam = require('./RecipeListEdamam.jsx');
var RecipeSearchAPI = require('api/RecipeSearchAPI.jsx');
var RecipeListSpoonacular = require('./RecipeListSpoonacular.jsx');
var RecipeYummly = require('./RecipeYummly.jsx');

var Recipe = React.createClass({
    getInitialState: function() {
        return {isLoading: false}
    },

    handleSearch: function(location) {
        var that = this;
        this.setState({isLoading: true});
        RecipeSearchAPI.getSpoonacular(location).then(function(temp) {
            that.setState({temp: temp, isLoading: false});
        }, function(errorMessage) {

            alert(errorMessage);

        });
        RecipeSearchAPI.getEdamam(location).then(function(temp) {
            that.setState({temp1: temp, isLoading: false});
        }, function(errorMessage) {

            alert(errorMessage);
        });


        RecipeSearchAPI.getTemp(location).then(function(temp) {
            that.setState({temp2: temp, isLoading: false});
        }, function(errorMessage) {

            alert(errorMessage);

        });

      RecipeSearchAPI.getYummly(location).then(function(temp){
        that.setState({temp3: temp, isLoading: false});
      },function(errorMessage){
        console.log(errorMessage);
      });

        if (this.state.isLoading === false) {
            return false;
        } else {
            return true;
        }

    },

    render: function() {
        var {isLoading, temp, temp1,temp2,temp3, location} = this.state;
        return (
            <div>
                <SearchForm onSearch={this.handleSearch}/>
                <br></br>
                {renderMessage()}
            </div>
        );
        function renderMessage() {
            if (isLoading) {
                return (
                    <div className="container">
                        <br></br>
                        <div className="container">
                            <div className="text-center">
                                <lable className="pagination-centered">Fetching Recipe.....</lable>
                            </div>
                        </div>
                    </div>
                )
            } else if (temp && temp1 && temp2 && temp3) {
                return (
                    <div className='row'>
                        <RecipeListEdamam temp1={temp1} location={location}/>
                        <RecipeListSpoonacular temp={temp} location={location}/>
                        <RecipeListF2F temp2={temp2} location={location}/>
                        <RecipeYummly temp3={temp3} location={location}/>
                    </div>
                )
            } else if (temp) {
                return (
                    <div className='row'>
                        <RecipeListSpoonacular temp={temp} location={location}/>
                    </div>
                )
            } else if (temp1) {
                return (
                    <div className='row'>
                        <RecipeListEdamam temp1={temp1} location={location}/>
                    </div>
                )
            }  else if (temp2) {
                return (
                    <div className='row'>
                          <RecipeListF2F temp2={temp2} location={location}/>
                    </div>
                )
            }

             else {
                return (
                    <div className="container">
                        <br></br>
                        <div className="container">
                            <div className=" text-center">
                                <lable className="pagination-centered">Insert ingredients.....</lable>
                            </div>
                        </div>
                    </div>
                )
            }
        };

    }
});

module.exports = Recipe;
