var APIKey = "5fd21d5d5826aa9898961eecb3cf4683";
var searchCity = $("#city-input").val();
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${APIKey}`;

$(document).ready(
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    $('#city-view').text(JSON.stringify(response));

    $('.city').html(`<h1>${response.name} Weather Details</h1>`);
    $('.wind').text(`Wind Speed: ${response.wind.speed}`);
    $('.humidity').text(`Humidity: ${response.main.humidity}`);
    let temp = `Temperature (k): ${response.main.temp}`;
    temp += `<br />Tempature (F): ${(response.main.temp - 273.15) * 1.80 + 32}`;
    $('.temp').html(temp);
}))