// API to generate longitude and latitude
var APIKeys = "fcfb6b4def1fdec4f9ae7eeffda8c150";
var cities = [];
var cityName;
var todaysDate = moment();


// Generate the details for longitude and latitude and pass it to the URL to find city details
function generateCoordinates() {

    // perform synchronous functions 
    cityName = $('#search-input').val();
    var lon_lat_URL = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + APIKeys;

    $.when($.ajax(lon_lat_URL)).then(function (response) {
        var lat = response[0].lat;
        var lon = response[0].lon;
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKeys;
        $.ajax(queryURL).then(function (data) {
            console.log(data);


            // Details for current day weather conditions
            var todaysDateFormatted = todaysDate.format("DD/MM/YYYY");
            $("#current-date").text("(" + todaysDateFormatted + ")");

            var todayDateString = todaysDate.format("YYYY-MM-DD").toString();
            var tempArrayCurrent = [];
            var windArrayCurrent = [];
            var humidityArrayCurrent = [];
            var weatherImage = [];
            for (var i = 0; i < data.list.length; i++) {
                var APIDateText = data.list[i].dt_txt;
                var APIDateTextSplit = APIDateText.split(" ")[0];

                if (APIDateTextSplit === todayDateString) {
                    var temperature = data.list[i].main.temp;
                    var wind = data.list[i].wind.speed;
                    var humidity = data.list[i].main.humidity;
                    var weatherIcon = data.list[i].weather[0].icon;
                    tempArrayCurrent.push(temperature);
                    windArrayCurrent.push(wind);
                    humidityArrayCurrent.push(humidity);
                    weatherImage.push(weatherIcon);
                }
            }

            var icon = weatherImage[0];
            var iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            // Temp
            $("#current-temperature").text(tempArrayCurrent[0] + " K");

            // Wind Current
            $("#current-wind").text(windArrayCurrent[0] + ' KPH');

            // Humidity Current 
            $("#current-humidity").text(humidityArrayCurrent[0] + ' %');

            // Weather Icon
            $("#current-weather-image").attr("src", iconURL);

            //-------------------------------------------------------------------------------------------------------------------------------------------

            // Details for day one forecast
            var dayOneDate = moment().add(1, "days");
            var dayOneDateFormatted = dayOneDate.format("DD/MM/YYYY");
            $("#day-one-date").text(dayOneDateFormatted);

            var dayOneDateString = dayOneDate.format("YYYY-MM-DD").toString();
            var tempArray = [];
            var windArray = [];
            var humidityArray = [];
            var weatherImageOne = [];
            for (var i = 0; i < data.list.length; i++) {
                var APIDateText = data.list[i].dt_txt;
                var APIDateTextSplit = APIDateText.split(" ")[0];

                if (APIDateTextSplit === dayOneDateString) {
                    var temperature = data.list[i].main.temp;
                    var wind = data.list[i].wind.speed;
                    var humidity = data.list[i].main.humidity;
                    var weatherIcon = data.list[i].weather[0].icon;
                    tempArray.push(temperature);
                    windArray.push(wind);
                    humidityArray.push(humidity);
                    weatherImageOne.push(weatherIcon);
                }
            }

            var icon = weatherImageOne[0];
            var iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            // Temp Day 1
            $("#day1-temperature").text(tempArray[0] + " K");

            // Wind Day 1
            $("#day1-wind").text(windArray[0] + ' KPH');

            // Humidity Day 1
            $("#day1-humidity").text(humidityArray[0] + ' %');

            // Weather Icon
            $("#card-img-one").attr("src", iconURL);

            //-------------------------------------------------------------------------------------------------------------------------------------------

            // Details for day two forecast
            var dayTwoDate = moment().add(2, "days");
            var dayTwoDateFormatted = dayTwoDate.format("DD/MM/YYYY");
            $("#day-two-date").text(dayTwoDateFormatted);


            var dayTwoDateString = dayTwoDate.format("YYYY-MM-DD").toString();
            var tempArrayTwo = [];
            var windArrayTwo = [];
            var humidityArrayTwo = [];
            var weatherImageTwo = [];
            for (var i = 0; i < data.list.length; i++) {
                var APIDateText = data.list[i].dt_txt;
                var APIDateTextSplit = APIDateText.split(" ")[0];

                if (APIDateTextSplit === dayTwoDateString) {
                    var temperature = data.list[i].main.temp;
                    var wind = data.list[i].wind.speed;
                    var humidity = data.list[i].main.humidity;
                    var weatherIcon = data.list[i].weather[0].icon;
                    tempArrayTwo.push(temperature);
                    windArrayTwo.push(wind);
                    humidityArrayTwo.push(humidity);
                    weatherImageTwo.push(weatherIcon);
                }
            }

            var icon = weatherImageTwo[0];
            var iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            // Temp Day 2
            $("#day2-temperature").text(tempArrayTwo[0] + " K")

            // Wind Day 2
            $("#day2-wind").text(windArrayTwo[0] + ' KPH');

            // Humidity Day 2
            $("#day2-humidity").text(humidityArrayTwo[0] + ' %');

            // Weather Icon
            $("#card-img-two").attr("src", iconURL);

            //-------------------------------------------------------------------------------------------------------------------------------------------

            // Details for day three forecast
            var dayThreeDate = moment().add(3, "days");
            var dayThreeDateFormatted = dayThreeDate.format("DD/MM/YYYY");
            $("#day-three-date").text(dayThreeDateFormatted);

            var dayThreeDateString = dayThreeDate.format("YYYY-MM-DD").toString();
            var tempArrayThree = [];
            var windArrayThree = [];
            var humidityArrayThree = [];
            var weatherImageThree = [];

            for (var i = 0; i < data.list.length; i++) {
                var APIDateText = data.list[i].dt_txt;
                var APIDateTextSplit = APIDateText.split(" ")[0];

                if (APIDateTextSplit === dayThreeDateString) {
                    var temperature = data.list[i].main.temp;
                    var wind = data.list[i].wind.speed;
                    var humidity = data.list[i].main.humidity;
                    var weatherIcon = data.list[i].weather[0].icon;
                    tempArrayThree.push(temperature);
                    windArrayThree.push(wind);
                    humidityArrayThree.push(humidity);
                    weatherImageThree.push(weatherIcon);
                }
            }
            var icon = weatherImageThree[0];
            var iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            // Temp Day 3
            $("#day3-temperature").text(tempArrayThree[0] + " K")

            // Wind Day 3
            $("#day3-wind").text(windArrayThree[0] + ' KPH');

            // Humidity Day 3
            $("#day3-humidity").text(humidityArrayThree[0] + ' %');

            // Weather Icon
            $("#card-img-three").attr("src", iconURL);

            //-------------------------------------------------------------------------------------------------------------------------------------------

            // Details for day four forecast
            var dayFourDate = moment().add(4, "days");
            var dayFourDateFormatted = dayFourDate.format("DD/MM/YYYY");
            $("#day-four-date").text(dayFourDateFormatted);

            var dayFourDateString = dayThreeDate.format("YYYY-MM-DD").toString();
            var tempArrayFour = [];
            var windArrayFour = [];
            var humidityArrayFour = [];
            var weatherImageFour = [];

            for (var i = 0; i < data.list.length; i++) {
                var APIDateText = data.list[i].dt_txt;
                var APIDateTextSplit = APIDateText.split(" ")[0];

                if (APIDateTextSplit === dayFourDateString) {
                    var temperature = data.list[i].main.temp;
                    var wind = data.list[i].wind.speed;
                    var humidity = data.list[i].main.humidity;
                    var weatherIcon = data.list[i].weather[0].icon;
                    tempArrayFour.push(temperature);
                    windArrayFour.push(wind);
                    humidityArrayFour.push(humidity);
                    weatherImageFour.push(weatherIcon);
                }
            }
            var icon = weatherImageFour[0];
            var iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            // Temp Day 4
            $("#day4-temperature").text(tempArrayFour[0] + " K")

            // Wind Day 4
            $("#day4-wind").text(windArrayFour[0] + ' KPH');

            // Humidity Day 4
            $("#day4-humidity").text(humidityArrayFour[0] + ' %');

            // Weather Icon
            $("#card-img-four").attr("src", iconURL);

            //-------------------------------------------------------------------------------------------------------------------------------------------

            // Details for day five forecast
            var dayFiveDate = moment().add(5, "days");
            var dayFiveDateFormatted = dayFiveDate.format("DD/MM/YYYY");
            $("#day-five-date").text(dayFiveDateFormatted);

            var dayFiveDateString = dayFiveDate.format("YYYY-MM-DD").toString();
            var tempArrayFive = [];
            var windArrayFive = [];
            var humidityArrayFive = [];
            var weatherImageFive = [];

            for (var i = 0; i < data.list.length; i++) {
                var APIDateText = data.list[i].dt_txt;
                var APIDateTextSplit = APIDateText.split(" ")[0];

                if (APIDateTextSplit === dayFiveDateString) {
                    var temperature = data.list[i].main.temp;
                    var wind = data.list[i].wind.speed;
                    var humidity = data.list[i].main.humidity;
                    var weatherIcon = data.list[i].weather[0].icon;
                    tempArrayFive.push(temperature);
                    windArrayFive.push(wind);
                    humidityArrayFive.push(humidity);
                    weatherImageFive.push(weatherIcon);
                }
            }
            var icon = weatherImageFive[0];
            var iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            // Temp Day 5
            $("#day5-temperature").text(tempArrayFive[0] + " K")

            // Wind Day 5
            $("#day5-wind").text(windArrayFive[0] + ' KPH');

            // Humidity Day 5
            $("#day5-humidity").text(humidityArrayFive[0] + ' %');

            // Weather Icon
            $("#card-img-five").attr("src", iconURL);
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

// Set event listener on click
$('#search-button').on("click", function (e) {
    e.preventDefault();
    generateCoordinates();
});


