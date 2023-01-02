var cities = [];
var APIKeys = "fcfb6b4def1fdec4f9ae7eeffda8c150";


// API to generate longitude and latitude

var lat;
var lon;

var cityName = "Lagos";
var lon_lat_URL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + APIKeys;

// Generate the details for longitude and latitude and pass it to the URL to find city details

function generateCoordinates() {
 // perform synchronous functions    
$.when($.ajax(lon_lat_URL)).then(function(response){
    lat = response[0].lat;
    lon = response[0].lon;
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKeys;
    $.ajax(queryURL);
    console.log(queryURL);
});

}


