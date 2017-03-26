var axios = require('axios');

var jsonp = require('jsonp');

const FOOD_RECIPE_URL='http://food2fork.com/api/search?key=7622c4df434ff2b070e7e9c8e341d5eb';
const EDAMAM_RECIPE_URL = 'https://api.edamam.com/search?app_id=1da22480&app_key=3da345c8fd1ab493a5de14fdf24224b8';
const RECIPE_PUPPY_URL ='http://www.recipepuppy.com/api/?';
const SPOONACULAR_RECIPE_URL ='https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?&number=100&fillIngredients=false';



module.exports={
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${FOOD_RECIPE_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl,{crossDomain: true , withCredentials: false}).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }
      else{
        // console.log(res.data.recipes);
        return res.data.recipes;
      }
    },function(res) {
      throw new Error(res.data.message);
    })
  },
  getSpoonacular: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${SPOONACULAR_RECIPE_URL}&ingredients=${encodedLocation}`;
    var config = {
      headers: 
      {
        'X-Mashape-Key': '3VG1pWZddXmshD3cURZ8kcm1jkqGp107QBzjsnRmeinpiKVgqt',
        'Accept': ' application/json'}
};

    return axios.get(requestUrl,config).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }
      else{
        console.log(res.data);
        return res.data;
      }
    },function(res) {
      console.log(res);
      throw new Error(res.data.message);
    })
  },
  getRecipePuppy: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${RECIPE_PUPPY_URL}&i=${encodedLocation}`;

    return axios.get(requestUrl,{crossDomain: true , withCredentials: false}).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }
      else{
         console.log(res.data);
        // return res.data.recipes;
      }
    },function(res) {
      throw new Error(res.data.message);
    })
  },
  getEdamam: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${EDAMAM_RECIPE_URL}&q=${encodedLocation}&from=0&to=100`;

    return axios.get(requestUrl, {crossDomain: true , withCredentials: false}).then(function(res){
      // console.log(res.data.hits);
      return res.data.hits;
    },function(res) {
      throw new Error(res.data.message);
    })
  }
}
