import React, { Component } from "react";
import SearchAutoComplete from "./SearchAutoComplete";
import WeatherCard from "./WeatherCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: undefined
    };

    this.getWeather = this.getWeather.bind(this);
    this.showPosition = this.showPosition.bind(this)
  }

  componentDidMount() {
    // Get Location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  }

  showPosition(location) {
    this.getWeather(location.coords.latitude, location.coords.longitude);
  }

  getWeather(latitude, longitude) {
    fetch(`/api/weather?lat=${latitude}&lon=${longitude}`)
      .then(response => response.json())
      .then(json => this.setState({ weather: json }));
  }

  render() {
    let weatherCard = null;
    if (this.state.weather) {
      weatherCard = <WeatherCard weather={this.state.weather} />;
    }
    return (
      <div className="app">
        <div className="header">
          <img src="./logo.svg" className="appLogo" alt="logo" />
          <h2>Weather forecasts for hundreds of locations around the uk</h2>
        </div>
        <label htmlFor="searchTextField">Weather:</label>
        <SearchAutoComplete updateWeather={this.getWeather} />
        {weatherCard}
      </div>
    );
  }
}

export default App;
