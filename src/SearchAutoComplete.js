/*global google*/ 
import React, { Component } from "react";

class SearchAutoComplete extends Component {
  constructor(props) {
    super(props);

    this.autocomplete = null
    this.setLocation = this.setLocation.bind(this)
  }


  componentDidMount() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    const input = document.getElementById('searchTextField');
    const options = { types: ['(cities)'], componentRestrictions: { country: 'uk' }};  

    this.autocomplete = new google.maps.places.Autocomplete(input, options);
    this.autocomplete.addListener('place_changed', this.setLocation);
  }

  setLocation() {
    let location = this.autocomplete.getPlace()
    this.setState({ 
        city: location.vicinity
    });
    this.props.updateWeather(location.geometry.location.lat(), location.geometry.location.lng());
  }

  render() {
    return (
        <input id="searchTextField" className="searchInput" type="text" placeholder="Enter a city"/>
    );
  }
}

export default SearchAutoComplete;
