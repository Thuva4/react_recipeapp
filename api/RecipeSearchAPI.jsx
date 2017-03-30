var axios = require('axios');

var jsonp = require('jsonp');

const FOOD_RECIPE_URL='https://community-food2fork.p.mashape.com/search?key=7622c4df434ff2b070e7e9c8e341d5eb';
const EDAMAM_RECIPE_URL = 'https://api.edamam.com/search?app_id=1da22480&app_key=e58ee3a57e42f72a602bada4714c7e22';
const RECIPE_PUPPY_URL ='http://www.recipepuppy.com/api/?';
const SPOONACULAR_RECIPE_URL ='https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?&number=100&fillIngredients=false';
const YUMMLY_RECIPE_URL = 'http://api.yummly.com/v1/api/recipes?';


module.exports={
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${FOOD_RECIPE_URL}&q=${encodedLocation}`;
    var config = {
      headers:
      {
        'X-Mashape-Key': 'fpZ8UlmVb3mshoNIQ6L4uQjinY74p1tO2QsjsnFDY6pt7Uzamb',
        'Accept': ' application/json'}
};
    return axios.get(requestUrl,config).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }
      else{
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
        'X-Mashape-Key': 'VdMVH2hOJgmshIGLKDslhF8tRLDap1mMA5wjsnoifSVJEGiq2l',
        'Accept': ' application/json'}
};

    return axios.get(requestUrl,config).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }
      else{
      return res.data;
      }
    },function(res) {
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
        return res.data.recipes;
      }
    },function(res) {
      throw new Error(res.data.message);
    })
  },



  getEdamam: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${EDAMAM_RECIPE_URL}&q=${encodedLocation}&from=0&to=100`;

    return axios.get(requestUrl, {crossDomain: true , withCredentials: false}).then(function(res){
      return res.data.hits;
    },function(res) {
      throw new Error(res.data.message);
    })
  },

  getYummly: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${YUMMLY_RECIPE_URL}&allowedIngredient[]=${encodedLocation}&maxResult=200`;
    var config = {
      headers:
      {
        'X-Yummly-App-ID': '8931ef54',
        'X-Yummly-App-Key': '1b4c9c55cd792320809aabc9f93ab586'
      }
    };

    return axios.get(requestUrl, config).then(function(res){
      return res.data.matches;
    },function(res) {
      throw new Error(res.data.message);
    })
  }



}
