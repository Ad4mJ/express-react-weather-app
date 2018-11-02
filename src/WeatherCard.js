import React, { Component } from "react";

class WeatherCard extends Component {
  render() {
      return (
        <div className="widgetContainer">
          <article className="widget">
            <div className="weatherIcon">
              <i className="wi wi-snow" />
            </div>
            <div className="weatherInfo">
              <div className="temperature">
                <span>{this.props.weather.temp}&deg;</span>
              </div>
              <div className="description">
                <div className="weatherCondition">
                  {this.props.weather.description}
                </div>
                <div className="place">{this.props.weather.city}</div>
              </div>
            </div>
            <div className="date"></div>
          </article>
        </div>
      );
  }
}

export default WeatherCard;
