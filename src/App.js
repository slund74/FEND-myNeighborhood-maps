import React, { Component } from 'react';
import './App.css';
import CardList from './CardList.js'
import VenueButton from './VenueButton.js'
import TopNav from './TopNav.js'
import MainMap from './MainMap.js'

const location = [
    	{id: 1, name: "O'Briens Market", geoLoc: {lat: 37.699766, lng: -121.048312}, address: "4120 Dale Rd., Modesto, CA 95356", type: "Retail", zip: "95356"},
    	{id: 2, name: "Stewart & Jasper", geoLoc: {lat: 37.668785, lng: -120.991311}, address: "1700 McHenry Ave, Modesto, CA 95350", type: "Retail", zip: "95350"},
    	{id: 3, name: "Delicato Family Vineyards", geoLoc: {lat: 37.855187, lng: -121.219360}, address: "12001 CA-99, Manteca, CA 95336", type: "Winery", zip: "95336"},
    	{id: 4, name: "Gnekow Family Winery", geoLoc: {lat: 37.892064, lng: -121.102680}, address: "17347 Gawne Rd, Stockton, CA 95215", type: "Winery", zip: "95215"},
    	{id: 5, name: "Lucca Winery", geoLoc: {lat: 37.761774, lng: -121.111315}, address: "16265 E River Rd, Ripon, CA 95366", type: "Winery", zip: "95366"}
    	]

class App extends Component {
	state = {
	    markerList:[],
	    openIndex: 0,
	    weatherInfo:[]
	}

componentDidMount(){
      this.setState({ markerList:location });
  };

getWeather = (zip) => {
	fetch("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&units=imperial&APPID=57943fe2663985770cdc1277ab1ce789").then(response => response.json()).then((weather) => {
		this.setState({ weatherInfo: weather.main.temp })
	}).catch(e => {
		console.log(e);
		this.setState({ weatherInfo: "Not Available" })
	});
};

allList = () => {
	this.setState({ markerList:location, openIndex: 0});
}

retailList = () => {
	var retail = [];
	retail = location.filter((r) => r.type === "Retail");
	this.setState({ markerList:retail, openIndex: 0});
}

wineryList = () => {
	var winery = [];
	winery = location.filter((w) => w.type === "Winery");
	this.setState({ markerList:winery, openIndex: 0});
}

openInfoWindow = (index, zip) => {
	this.setState({	openIndex: index});
	this.getWeather(zip);
}

//https://discussions.udacity.com/t/handling-google-maps-in-async-and-fallback/34282/53
gm_authFailure = () => {
    alert("Google Map authorization error. Please try refreshing the page.");
}

  render() {
    return (
    	<div className="App">
	        <TopNav />
			<MainMap
				markerList={this.state.markerList}
				openIndex={this.state.openIndex}
				openInfoWindow={this.openInfoWindow}
				weather={this.state.weatherInfo}
			/>
			<VenueButton
				allList={this.allList}
				wineryList={this.wineryList}
				retailList={this.retailList}
			/>
			<CardList
				markerList={this.state.markerList}
				openInfoWindow={this.openInfoWindow}
			/>
		</div>
    )
  }
}

export default App;