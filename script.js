$(document).ready(function () {

    function currentWeatherNow(city) {

        $("#currentWeather").empty();

        var APIKey = "5fd21d5d5826aa9898961eecb3cf4683";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var cityName = $("<h2>").html("City: " + response.name);
            var temperature = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(2) + "°F";
            var weatherPic = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].weatherPic + "@2x.png");
            weatherPic.attr("width", 50);
            var humidity = $("<h4>").html("Humidity: " + response.main.humidity);
            var windSpeed = $("<h4>").html("Wind Speed: " + response.wind.speed);
            $("#currentWeather").append(cityName, weatherPic, temperature, humidity, windSpeed);
        });
    };
    

        $("#showWeather").on("click", function (event) {
            event.preventDefault();
            var inputCity = $(".form-control").val().trim();
            // console.log(inputCity);
            var button = $("<button>");
            button.addClass("searchHistory");
            button.text(inputCity);
            $("#searchResults").prepend(button);
            currentWeatherNow(inputCity);
            $(".form-control").val("");
        });
    
});
