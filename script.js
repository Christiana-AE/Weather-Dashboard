// API to generate longitude and latitude
var APIKeys = "fcfb6b4def1fdec4f9ae7eeffda8c150";
var cities = [];
var cityName;
var todaysDate = moment();


// Generate the details for longitude and latitude and pass it to the URL to find city details
function generateCoordinates() {
    // perform synchronous functions 

    cityName = $('#search-input').val();
    var lon_lat_URL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + APIKeys;

    $.when($.ajax(lon_lat_URL)).then(function (response) {
        var lat = response[0].lat;
        var lon = response[0].lon;
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKeys;
        $.ajax(queryURL).then(function (data) {
            console.log(data);
            console.log(data.list[1].dt_txt);




            // Reference values of items on the list 

            // console.log(data.list[0].main.temp);
            //  var date = data.list.dt_txt;
            // var temperature = data.list.main.temp;
            // var wind = data.list.main.wind;
            //var humidity = data.list.main.humidity;

           
           // Change the date on the API from a String to a Date Object
            var apiDate = data.list[1].dt_txt;
            var apiDateFormat = new Date(apiDate + 'Z');
            var justDMY = new Date(apiDate.replace(/-/g,"/"));
            console.log(apiDateFormat.getTime() === justDMY.getTime());
            
            var dayOneDate = moment().add(1, "days");
            var dayOneDateFormatted = dayOneDate.format("YYYY-MM-DD");
            console.log(dayOneDateFormatted);


        });
    });

    // Set Current Location to city being searched now 
    $("#current-location").text(cityName);
    cities.push(cityName);

    renderPriorCitySearch();

}

function renderPriorCitySearch() {
    // Clearing out existing list of cities to avoid repetition
    $('#buttons-view').empty();

    // Add list of cities searched for to a list
    for (var i = 0; i < cities.length; i++) {

        //create a button to hold cities searched for 
        var createButton = $("<button>");
        createButton.addClass("cities-searched");
        createButton.attr("data-name", cities[i]);
        createButton.text(cities[i]);
        $("#buttons-view").append(createButton);

    }
        
}

// Details for current day weather conditions
function currentDateDetails() {
    var todaysDateFormatted = todaysDate.format("DD/MM/YYYY");
    $("#current-date").text("(" + todaysDateFormatted + ")");
}

// Details for day one forecast
function forecastDayOne() {
    var dayOneDate = moment().add(1, "days");
    var dayOneDateFormatted = dayOneDate.format("DD/MM/YYYY");
    $("#day-one-date").text(dayOneDateFormatted);

}

// Details for day two forecast
function forecastDayTwo() {
    var dayTwoDate = moment().add(2, "days");
    var dayTwoDateFormatted = dayTwoDate.format("DD/MM/YYYY");
    $("#day-two-date").text(dayTwoDateFormatted);
}

// Details for day three forecast
function forecastDayThree() {
    var dayThreeDate = moment().add(3, "days");
    var dayThreeDateFormatted= dayThreeDate.format("DD/MM/YYYY");
    $("#day-three-date").text(dayThreeDateFormatted);
}

// Details for day four forecast
function forecastDayFour() {
    var dayFourDate = moment().add(4, "days");
    var dayFourDateFormatted = dayFourDate.format("DD/MM/YYYY");
    $("#day-four-date").text(dayFourDateFormatted);
}

// Details for day five forecast
function forecastDayFive() {
    var dayFiveDate = moment().add(5, "days");
    var dayFiveDateFormatted = dayFiveDate.format("DD/MM/YYYY");
    $("#day-five-date").text(dayFiveDateFormatted);
}

// Get data for Temp

// Get data for Wind

// Get data for Humidity

$('#search-button').on("click", function (e) {
    e.preventDefault();
    generateCoordinates();
    currentDateDetails();
    forecastDayOne();
    forecastDayTwo();
    forecastDayThree();
    forecastDayFour();
    forecastDayFive();
    
});


