var APIKey = "5fd21d5d5826aa9898961eecb3cf4683";
var citySearch = $("#searchInput").val();
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
});