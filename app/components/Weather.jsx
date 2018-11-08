var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Get Weather</h1>
                <WeatherForm/>
                <WeatherMessage/>
            </div>
        )
    }
});

module.exports = Weather;