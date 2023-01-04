// API to generate longitude and latitude
var APIKeys = "fcfb6b4def1fdec4f9ae7eeffda8c150";
var cities = [];

// Generate the details for longitude and latitude and pass it to the URL to find city details

function generateCoordinates() {
    // perform synchronous functions 

    var cityName = $('#search-input').val();
    var lon_lat_URL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + APIKeys;

    $.when($.ajax(lon_lat_URL)).then(function (response) {
        var lat = response[0].lat;
        var lon = response[0].lon;
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKeys;
        $.ajax(queryURL).then(function (response) {
            console.log(response);
           // console.log(response.list[0].main.temp);
           // console.log(response.list[0].list.main.temp);
          //  var date = response.list.dt_txt;
           // var temperature = response.list.main.temp;
           // var wind = response.list.main.wind;
            //var humidity = response.list.main.humidity;
        });
    });
}
$('#search-button').on("click", function (e) {
    e.preventDefault();
    generateCoordinates();
});


