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


