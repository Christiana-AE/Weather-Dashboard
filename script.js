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


            ///////////////////////////////////////////////////////////////////

            // Details for current day weather conditions

            var todaysDateFormatted = todaysDate.format("DD/MM/YYYY");
            $("#current-date").text("(" + todaysDateFormatted + ")");


            // temperature current
            // var todayDateString = todaysDate.format("YYYY-MM-DD").toString();
            // for (var i = 0; i < data.list.length; i++) {
            //     var APIDateText = data.list[i].dt_txt;
            //     var APIDateTextSplit = APIDateText.split(" ")[0];
            //     var tempArray = [];
            //     if (APIDateTextSplit === todayDateString) {
            //         var temperature = data.list[i].main.temp;
            //         var wind = data.list[i].main.wind;
            //         tempArray.push(temperature);
            //         console.log(tempArray);
            //     }
            // }

            // // Wind Current

            // // Humidity Current 


            //-------------------------------------------------------------------------------------------------------------------------------------------//


            // Details for day one forecast
            var dayOneDate = moment().add(1, "days");
            var dayOneDateFormatted = dayOneDate.format("DD/MM/YYYY");
            $("#day-one-date").text(dayOneDateFormatted);

            var dayOneDateString = dayOneDate.format("YYYY-MM-DD").toString();
            var tempArray = [];
            var windArray = [];
            var humidityArray = [];
            for (var i = 0; i < data.list.length; i++) {
                var APIDateText = data.list[i].dt_txt;
                var APIDateTextSplit = APIDateText.split(" ")[0];

                if (APIDateTextSplit === dayOneDateString) {
                    var temperature = data.list[i].main.temp;
                    var wind = data.list[i].wind.speed;
                    var humidity = data.list[i].main.humidity;
                    tempArray.push(temperature);
                    windArray.push(wind);
                    humidityArray.push(humidity)
                }
            }

            // Temp Day 1
            $("#day1-temperature").text(tempArray[0] + " K");

            // Wind Day 1
            $("#day1-wind").text(windArray[0] + ' KPH');

            // Humidity Day 1
            $("#day1-humidity").text(humidityArray[0] + ' %');

            //-------------------------------------------------------------------------------------------------------------------------------------------//


            // Details for day two forecast
            var dayTwoDate = moment().add(2, "days");
            var dayTwoDateFormatted = dayTwoDate.format("DD/MM/YYYY");
            $("#day-two-date").text(dayTwoDateFormatted);


            var dayTwoDateString = dayTwoDate.format("YYYY-MM-DD").toString();
            var tempArrayTwo = [];
            var windArrayTwo = [];
            var humidityArrayTwo = [];
            for (var i = 0; i < data.list.length; i++) {
                var APIDateText = data.list[i].dt_txt;
                var APIDateTextSplit = APIDateText.split(" ")[0];

                if (APIDateTextSplit === dayTwoDateString) {
                    var temperature = data.list[i].main.temp;
                    var wind = data.list[i].wind.speed;
                    var humidity = data.list[i].main.humidity;
                    tempArrayTwo.push(temperature);
                    windArrayTwo.push(wind);
                    humidityArrayTwo.push(humidity)
                }
            }

            // Temp Day 2
            $("#day2-temperature").text(tempArrayTwo[0] + " K")

            // Wind Day 2
            $("#day2-wind").text(windArrayTwo[0] + ' KPH');

            // Humidity Day 2
            $("#day2-humidity").text(humidityArrayTwo[0] + ' %');

            //-------------------------------------------------------------------------------------------------------------------------------------------//

            // Details for day three forecast
            var dayThreeDate = moment().add(3, "days");
            var dayThreeDateFormatted = dayThreeDate.format("DD/MM/YYYY");
            $("#day-three-date").text(dayThreeDateFormatted);

            var dayThreeDateString = dayThreeDate.format("YYYY-MM-DD").toString();
            var tempArrayThree = [];
            var windArrayThree = [];
            var humidityArrayThree = [];

            for (var i = 0; i < data.list.length; i++) {
                var APIDateText = data.list[i].dt_txt;
                var APIDateTextSplit = APIDateText.split(" ")[0];

                if (APIDateTextSplit === dayThreeDateString) {
                    var temperature = data.list[i].main.temp;
                    var wind = data.list[i].wind.speed;
                    var humidity = data.list[i].main.humidity;
                    tempArrayThree.push(temperature);
                    windArrayThree.push(wind);
                    humidityArrayThree.push(humidity)
                }
            }

            // Temp Day 3
            $("#day3-temperature").text(tempArrayThree[0] + " K")

            // Wind Day 3
            $("#day3-wind").text(windArrayThree[0] + ' KPH');

            // Humidity Day 3
            $("#day3-humidity").text(humidityArrayThree[0] + ' %');

            //-------------------------------------------------------------------------------------------------------------------------------------------//

            // Details for day four forecast
            var dayFourDate = moment().add(4, "days");
            var dayFourDateFormatted = dayFourDate.format("DD/MM/YYYY");
            $("#day-four-date").text(dayFourDateFormatted);

            var dayFourDateString = dayThreeDate.format("YYYY-MM-DD").toString();
            var tempArrayFour = [];
            var windArrayFour = [];
            var humidityArrayFour = [];

            for (var i = 0; i < data.list.length; i++) {
                var APIDateText = data.list[i].dt_txt;
                var APIDateTextSplit = APIDateText.split(" ")[0];

                if (APIDateTextSplit === dayFourDateString) {
                    var temperature = data.list[i].main.temp;
                    var wind = data.list[i].wind.speed;
                    var humidity = data.list[i].main.humidity;
                    tempArrayFour.push(temperature);
                    windArrayFour.push(wind);
                    humidityArrayFour.push(humidity)
                }
            }

            // Temp Day 4
            $("#day4-temperature").text(tempArrayFour[0] + " K")

            // Wind Day 4
            $("#day4-wind").text(windArrayFour[0] + ' KPH');

            // Humidity Day 4
            $("#day4-humidity").text(humidityArrayFour[0] + ' %');

            //-------------------------------------------------------------------------------------------------------------------------------------------//

            // Details for day five forecast
            var dayFiveDate = moment().add(5, "days");
            var dayFiveDateFormatted = dayFiveDate.format("DD/MM/YYYY");
            $("#day-five-date").text(dayFiveDateFormatted);

            var dayFiveDateString = dayFiveDate.format("YYYY-MM-DD").toString();
            var tempArrayFive = [];
            var windArrayFive = [];
            var humidityArrayFive = [];

            for (var i = 0; i < data.list.length; i++) {
                var APIDateText = data.list[i].dt_txt;
                var APIDateTextSplit = APIDateText.split(" ")[0];

                if (APIDateTextSplit === dayFiveDateString) {
                    var temperature = data.list[i].main.temp;
                    var wind = data.list[i].wind.speed;
                    var humidity = data.list[i].main.humidity;
                    tempArrayFive.push(temperature);
                    windArrayFive.push(wind);
                    humidityArrayFive.push(humidity)
                }
            }

            // Temp Day 5
            $("#day5-temperature").text(tempArrayFive[0] + " K")

            // Wind Day 5
            $("#day5-wind").text(windArrayFive[0] + ' KPH');

            // Humidity Day 5
            $("#day5-humidity").text(humidityArrayFive[0] + ' %');



            //-------------------------------------------------------------------------------------------------------------------------------------------//

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


$('#search-button').on("click", function (e) {
    e.preventDefault();
    generateCoordinates();

});


