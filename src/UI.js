// class UI {
//     constructor(weather) {
//         this.weather = weather;
//         this.main = document.getElementsByTagName("main")[0];
//         this.day = 0;
//         this.location = "";
//         // false: celsius, true: fahrenheit
//         this.temperatureType = false;
//     }

//     display() {
//         this.main.appendChild(this.createWeatherColumnLeft());
//         this.main.appendChild(this.createWeatherColumnCenter());
//         this.main.appendChild(this.createWeatherColumnRight());
//     }

//     async displayUpdate(e) {
//         e.preventDefault();

//         const location = this.location;
//         const day = this.day;

//         try {
//             const data = await this.weather.getWeatherData(
//                 location,
//                 this.temperatureType
//             );

//             if (data.resolvedAddress === undefined) {
//                 throw data;
//             }

//             let addresses = data.resolvedAddress.split(", ");

//             let addressFound = false;

//             for (let i = 0; i < addresses.length; i++) {
//                 if (addresses[i].toLowerCase() == location.toLowerCase()) {
//                     addressFound = true;
//                     break;
//                 }
//             }

//             if (!addressFound) throw Error("Error: Location not found");

//             if (parseInt(this.day) === -1) {
//                 // this.displayCurrentWeatherData(data);
//             } else {
//                 // this.displayFutureWeatherData(data, day);
//             }

//         } catch (e) {
//             let error = document.createElement("p");

//             if (e.message === "Failed to fetch") {
//                 error.textContent =
//                         "Error: Invalid characters entered. Please only use "
//                         + "alphabetical characters.";
//             } else {
//                 error.textContent = e.message;
//             }

//             this.main.appendChild(error);
//         }

//         this.main.appendChild(this.setWeatherColumnLeft());
//         this.main.appendChild(this.setWeatherColumnCenter());
//         this.main.appendChild(this.setWeatherColumnRight());
//     }
    
//     createWeatherColumnCenter() {
//         // Allow the user to search predicted weather conditions
//         // Allow the user to search for a particular time
//         const form = document.createElement("form");
//         form.addEventListener("submit", this.displayUpdate);
//         form.setAttribute("id", "weather-form");

//         let formLocationLabel = document.createElement("label");
//         formLocationLabel.id = "weather-form-location-label";
//         formLocationLabel.setAttribute("for", "weather-form-location-input");
//         let formLocationText = document.createElement("span");
//         formLocationText.id = "weather-form-location-text";
//         formLocationText.textContent = "What location would you like to search for?";
//         let formLocationInput = document.createElement("input");
//         formLocationInput.id = "weather-form-location-input";
//         formLocationInput.addEventListener("keydown", this.updateLocation.bind(this));
//         formLocationInput.addEventListener("keyup", this.updateLocation.bind(this));

//         formLocationLabel.appendChild(formLocationText);
//         formLocationLabel.appendChild(formLocationInput);

//         let formDaysLabel = document.createElement("label");
//         formDaysLabel.id = "weather-form-days-label";
//         formDaysLabel.setAttribute("for", "weather-form-days-input")
//         let formDaysText = document.createElement("span");
//         formDaysText.id = "weather-form-days-text";
//         formDaysText.textContent = "How many days ahead would you like to search?";
//         let formDaysInput = document.createElement("input");
//         formDaysInput.id = "weather-form-days-input";
//         formDaysInput.min = -1;
//         formDaysInput.max = 14;
//         formDaysInput.value = 0;
//         formDaysInput.type = "number";
//         formDaysInput.addEventListener("keydown", this.updateDay.bind(this));
//         formDaysInput.addEventListener("keyup", this.updateDay.bind(this));
//         formDaysInput.addEventListener("change", this.updateDay.bind(this));

//         formDaysLabel.appendChild(formDaysText);
//         formDaysLabel.appendChild(formDaysInput);
        
//         let formTemperatureCelsiusLabel = document.createElement("label");
//         formTemperatureCelsiusLabel.classList.add("weather-form-temperature-label");
//         formTemperatureCelsiusLabel.htmlFor = "weather-form-temperature-celsius";

//         let formTemperatureCelsiusText = document.createElement("span");
//         formTemperatureCelsiusText.classList.add("weather-form-temperature-text");
//         formTemperatureCelsiusText.textContent = "Celsius";

//         let formTemperatureCelsiusRadio = document.createElement("input");
//         formTemperatureCelsiusRadio.classList.add("weather-form-temperature-radio");
//         formTemperatureCelsiusRadio.id = "weather-form-temperature-celsius";
//         formTemperatureCelsiusRadio.name = "weather-form-temperature";
//         formTemperatureCelsiusRadio.type = "radio";
//         formTemperatureCelsiusRadio.value = "celsius";
//         formTemperatureCelsiusRadio.addEventListener("click", this.updateTemperatureType.bind(this));

//         formTemperatureCelsiusLabel.appendChild(formTemperatureCelsiusText);
//         formTemperatureCelsiusLabel.appendChild(formTemperatureCelsiusRadio);
        
//         let formTemperatureFahrenheitLabel = document.createElement("label");
//         formTemperatureCelsiusLabel.classList.add("weather-form-temperature-label");
//         formTemperatureFahrenheitLabel.htmlFor = "weather-form-temperature-fahrenheit";

//         let formTemperatureFahrenheitText = document.createElement("span");
//         formTemperatureCelsiusText.classList.add("weather-form-temperature-text");
//         formTemperatureFahrenheitText.textContent = "Fahrenheit";

//         let formTemperatureFahrenheitRadio = document.createElement("input");
//         formTemperatureFahrenheitRadio.classList.add("weather-form-temperature-radio");
//         formTemperatureFahrenheitRadio.id = "weather-form-temperature-fahrenheit";
//         formTemperatureFahrenheitRadio.name = "weather-form-temperature";
//         formTemperatureFahrenheitRadio.type = "radio";
//         formTemperatureFahrenheitRadio.value = "fahrenheit";
//         formTemperatureFahrenheitRadio.addEventListener("click", this.updateTemperatureType.bind(this));

//         formTemperatureFahrenheitLabel.appendChild(formTemperatureFahrenheitText);
//         formTemperatureFahrenheitLabel.appendChild(formTemperatureFahrenheitRadio);

//         let formSubmit = document.createElement("button");
//         formSubmit.classList.add("weather-form-submit");
//         formSubmit.textContent = "Search";
//         formSubmit.type = "submit";

//         form.appendChild(formLocationLabel);
//         form.appendChild(formDaysLabel);
//         form.appendChild(formTemperatureCelsiusLabel);
//         form.appendChild(formTemperatureFahrenheitLabel);
//         form.appendChild(formSubmit);
//         form.addEventListener("submit", this.getWeatherData.bind(this));
        
//         return form;
//     }
    
//     createWeatherColumnLeft() {
//         const column = document.createElement("div");

//         return column;
//     }

//     createWeatherColumnRight() {
//         const column = document.createElement("div");

//         return column;
//     }

//     displayCurrentWeatherData(data) {
//         console.log(data);
//     }

//     displayFutureWeatherData(data, day) {

//         let location = data.resolvedAddress;
//         let condition = data.days[day].conditions;
//         let date = data.days[day].datetime;
//         let description = data.days[day].description;
//         let feelslike = data.days[day].feelslike;
//         let humidity = data.days[day].humidity;
//         let icon = data.days[day].icon;
//         // Check what unit of measurement is being used
//         let snow = data.days[day].snow;
//         let sunriseTime = data.days[day].sunrise;
//         let sunsetTime = data.days[day].sunset;
//         let tempatureAverage = data.days[day].temp;
//         let tempatureMin = data.days[day].tempmin;
//         let tempatureMax = data.days[day].tempmax;
//         let uvIndex = data.days[day].uvindex;
//         let visibility = data.days[day].visibility;
//         let windDirection = data.days[day].winddir;
//         let windspeed = data.days[day].windspeed;

//         console.log("Location: " + location);
//         console.log("Temperature (averaage): " + tempatureAverage);
//         // may depend on this.temperatureType
//         console.log("Wind speed: " + windspeed); 
//         console.log("Icon: " + icon);
//         console.log("Sunrise: " + sunriseTime);
//         console.log("Sunset: " + sunsetTime);
//         console.log("Conditions: " + condition);
//         console.log("Description: " + description);

//         if (this.temperatureType) {
//             console.log("Average temperature: " + tempatureAverage + "°F");
//         } else {
//             console.log("Average temperature: " + tempatureAverage + "°C");
//         }

//         this.setWeatherColumnLeft();
//         this.setWeatherColumnCenter();
//         this.setWeatherColumnRight();
        
//         let centerCard = document.createElement("div");

//         let leftCard = document.createElement("div");

//         let rightCard = document.createElement("div");

//         while (this.main.firstChild) {
//             this.main.removeChild(this.main.firstChild);
//         }

//         return 
//     }

//     async getWeatherData(e) {
//         e.preventDefault();

//         const location = this.location;
//         const day = this.day;

//         try {
//             const data = await this.weather.getWeatherData(
//                 location,
//                 this.temperatureType
//             );

//             if (data.resolvedAddress === undefined) {
//                 throw data;
//             }

//             let addresses = data.resolvedAddress.split(", ");
//             console.log(addresses);

//             let addressFound = false;

//             for (let i = 0; i < addresses.length; i++) {
//                 if (addresses[i].toLowerCase() == location.toLowerCase()) {
//                     addressFound = true;
//                     break;
//                 }
//             }

//             if (!addressFound) throw Error("Error: Location not found");

//             // let location = addresses.join(", ");

//             if (parseInt(this.day) === -1) {
//                 this.displayCurrentWeatherData(data);
//             } else {
//                 this.displayFutureWeatherData(data, day);
//             }

//         } catch (e) {
//             let error = document.createElement("p");

//             if (e.message === "Failed to fetch") {
//                 error.textContent =
//                         "Error: Invalid characters entered. Please only use "
//                         + "alphabetically characters.";
//             } else {
//                 error.textContent = e.message;
//             }

//             this.main.appendChild(error);
//         }
//     }

//     setWeatherColumnCenter(data) {
//         let columnCenter = this.main.children[1];

//         if (columnCenter) {
//             this.main.removeChild(columnCenter);
//         }

//         /*
//             - Center
//                 - location
//                 - date
//                 - temp
//                 - windspeed
//                 - icon
//                 - sunrise
//                 - sunset
//                 - conditions
//                 - description
//         */

//         let location = data.resolvedAddress;
//         let date = data.days[day].datetime;
//         let averageTemperature = data.days[day].temp;
//         let windspeed = data.days[day].windspeed;
//         let icon = data.days[day].icon;
//         let sunriseTime = data.days[day].sunrise;
//         let sunsetTime = data.days[day].sunset;
//         let conditions = data.days[day].conditions;
//         let description = data.days[day].description;

//         const column = document.createElement("div");

//         let locationElement = document.createElement("p");
//         locationElement.textContent = location;

//         let averageTemperatureElement = document.createElement("span");
//         averageTemperatureElement.textContent = averageTemperature;

//         let windSpeedElement = document.createElement("span");
//         windSpeedElement.textContent = windspeed;

//         let iconElement = document.createElement("img");
//         iconElement.textContent = icon;

//         let sunriseElement = document.createElement("span");
//         sunriseElement.textContent = sunriseTime;

//         let sunsetElement = document.createElement("span");
//         sunsetElement.textContent = sunsetTime;

//         let conditionsElement = document.createElement("p");
//         conditionsElement.textContent = conditions;

//         let descriptionElement = document.createElement("p");
//         descriptionElement.textContent = description;

//         column.appendChild(locationElement);
//         column.appendChild(averageTemperatureElement);
//         column.appendChild(windSpeedElement);
//         column.appendChild(iconElement);
//         column.appendChild(sunriseElement);
//         column.appendChild(sunsetElement);
//         column.appendChild(conditionsElement);
//         column.appendChild(descriptionElement);

//         return column;
//     }

//     setWeatherColumnLeft(data) {
//         let columnLeft = this.main.children[0];

//         if (columnLeft) {
//             this.main.removeChild(columnLeft);
//         }
        
//         /*
//             - Left
//                 - tempmin
//                 - tempmaax
//                 - feelslike
//                 - humidity
//                 - snow
//                 - winddir
//                 - severerisk
//         */

//         let tempatureMin = data.days[day].tempmin;
//         let tempatureMax = data.days[day].tempmax;
//         let feelslike = data.days[day].feelslike;
//         let humidity = data.days[day].humidity;
//         // Check what unit of measurement is being used for snow amount
//         let snow = data.days[day].snow;
//         let windDirection = data.days[day].winddir;
//         let severeRisk = data.days[day].severerisk;

//         const column = document.createElement("div");
//     }

//     setWeatherColumnRight(data) {
//         let columnRight = this.main.children[2];

//         while (columnRight) {
//             this.main.removeChild(columnRight);
//         }

//         /*
//             - Right
//                 - visibility
//                 - precipitation
//                 - precipitation type
//                 - cloud cover
//                 - uv index
//                 - moonphase
//                 - stations
//         */
        
//         let visibility = data.days[day].visibility;
//         let precipitation = data.days[day].precipitation;
//         let precipitationType = data.days[day].precipitationtype;
//         let cloudCover = data.days[day].cloudcover;
//         let uvIndex = data.days[day].uvindex;
//         let moonphase = data.days[day].moonphase;
//         let stations = data.days[day].stations;

//         const column = document.createElement("div");

//         // ...

//         return column;
//     }

//     updateDay(e) {
//         this.day = e.target.value;
//     }

//     updateLocation(e) {
//         this.location = e.target.value;
//     }

//     updateTemperatureType(e) {
//         this.temperatureType = (e.target.value === "celsius")
//             ? false
//             : true;
//     }
// }

// export default UI;

// class UI {
//     constructor(weather) {
//         this.weather = weather;
//         this.main = document.getElementsByTagName("main")[0];
//         this.day = 0;
//         this.location = "";
//         // false: celsius, true: fahrenheit
//         this.temperatureType = false;
//         this.displayUI();
//     }

//     displayUI() {
//         // Determine if there is localStorage weather data
//         console.log("Displaying UI...");
//         // this.main.addEventListener("load", this.displayWeatherForm.bind(this));
//         this.main.appendChild(document.createElement("div"));
//         this.main.appendChild(document.createElement("div"));
//         this.main.appendChild(document.createElement("div"));

//         this.displayWeatherForm();
//     }

//     async displayWeatherData(e) {
//         e.preventDefault();

//         const weatherData = await this.weather.getWeatherData(this.location, this.day);

//         // Clear and display left data
//         this.displayWeatherDataLeft(weatherData);
//         // Clear and display center data
//         this.displayWeatherDataCenter(weatherData);
//         // Clear and display right data
//         this.displayWeatherDataRight(weatherData);
//     }

//     displayWeatherDataCenter(data) {
//         /*
//             - clear the current content
//             - convert temperature, windspeed to relevant unit based on
//             this.temperatureType
//         */

//         const container = this.main.children[1];

//         while (container.firstChild) {
//             container.removeChild(container.firstChild);
//         }

//         /*
//             - Center
//                 - location
//                 - date
//                 - temp
//                 - windspeed
//                 - icon
//                 - sunrise
//                 - sunset
//                 - conditions
//                 - description
//         */

//         let location = data.resolvedAddress;
//         let date = data.days[this.day].datetime;
//         let averageTemperature = data.days[this.day].temp;
//         let windSpeed = data.days[this.day].windspeed;
//         let icon = data.days[this.day].icon;
//         let sunriseTime = data.days[this.day].sunrise;
//         let sunsetTime = data.days[this.day].sunset;
//         let conditions = data.days[this.day].conditions;
//         let description = data.days[this.day].description;

//         const centerContent = document.createElement("div");

//         const locationContent = document.createElement("h2");
//         locationContent.classList.add("center-location");
//         locationContent.textContent = location;

//         const dateContent = document.createElement("p");
//         dateContent.classList.add("center-date");
//         date = date.split("-").reverse().join("/");
//         dateContent.textContent = date;

//         const centerContentContainer = document.createElement("div");
//         // centerContentContainer.classList.add("");

//         const iconContent = document.createElement("img");
//         iconContent.classList.add("center-icon");
//         // should be based on the icon
//         iconContent.src = "";
//         iconContent.alt = "A weather icon";

//         const temperatureContent = document.createElement("p");
//         temperatureContent.classList.add("center-temperature");
//         temperatureContent.textContent = averageTemperature;

//         const windSpeedContent = document.createElement("p");
//         windSpeedContent.classList.add("center-wind-speed");
//         windSpeedContent.textContent = windSpeed;

//         const sunriseContent = document.createElement("p");
//         sunriseContent.classList.add("center-sunrise");
//         sunriseTime = sunriseTime.split(":");
//         sunriseTime.pop();
//         sunriseTime = sunriseTime.join(":");
//         sunriseContent.textContent = sunriseTime;

//         const sunsetContent = document.createElement("p");
//         sunsetContent.classList.add("center-sunset");
//         sunsetTime = sunsetTime.split(":");
//         sunsetTime.pop();
//         sunsetTime = sunsetTime.join(":");
//         sunsetContent.textContent = sunsetTime;

//         centerContent.appendChild(locationContent);
//         centerContent.appendChild(dateContent);
        
//         centerContentContainer.appendChild(iconContent);
//         centerContentContainer.appendChild(temperatureContent);
//         centerContentContainer.appendChild(windSpeedContent);
//         centerContentContainer.appendChild(sunriseContent);
//         centerContentContainer.appendChild(sunsetContent);

//         centerContent.appendChild(centerContentContainer);

//         this.main.children[1].appendChild(centerContent);
//         this.displayWeatherForm();
//     }

//     displayWeatherDataLeft(data) {
//         // convert tempmin, tempmasx, feelslike, etc. to relevant unit based on
//         // this.temperatureType
//         /*
//             - Left
//                 - tempmin
//                 - tempmax
//                 - feelslike
//                 - humidity
//                 - snow
//                 - winddir
//                 - severerisk
//         */

//         let tempatureMin = data.days[this.day].tempmin;
//         let tempatureMax = data.days[this.day].tempmax;
//         let feelslike = data.days[this.day].feelslike;
//         let humidity = data.days[this.day].humidity;
//         // Check what unit of measurement is being used for snow amount
//         let snow = data.days[this.day].snow;
//         let windDirection = data.days[this.day].winddir;
//         let severeRisk = data.days[this.day].severerisk;
//     }

//     displayWeatherDataRight(data) {
//         // convert ??? to relevant unit based on this.temperatureType
//         /*
//             - Right
//                 - visibility
//                 - precipitation
//                 - precipitation type
//                 - cloud cover
//                 - uv index
//                 - moonphase
//                 - stations
//         */
        
//         let visibility = data.days[this.day].visibility;
//         let precipitation = data.days[this.day].precip;
//         let precipitationType = data.days[this.day].preciptype;
//         let cloudCover = data.days[this.day].cloudcover;
//         let uvIndex = data.days[this.day].uvindex;
//         let moonphase = data.days[this.day].moonphase;
//         let stations = data.days[this.day].stations;
        
//         // console.log("Visibility: " + visibility);
//         // console.log("Precipitation: " + precipitation);
//         // console.log("Precipitation Type: " + precipitationType);
//         // console.log("Cloud Cover: " + cloudCover);
//         // console.log("UV Index: " + uvIndex);
//         // console.log("Moon Phase: " + moonphase);
//         // console.log("Stations: " + stations);
//     }

//     displayWeatherForm() {
//         // Allow the user to search predicted weather conditions
//         // Allow the user to search for a particular time
//         const form = document.createElement("form");
//         // form.addEventListener("submit", this.displayUpdate);
//         const that = this;
//         form.addEventListener("submit", this.displayWeatherData.bind(that));
//         form.setAttribute("id", "weather-form");

//         let formLocationLabel = document.createElement("label");
//         formLocationLabel.id = "weather-form-location-label";
//         formLocationLabel.setAttribute("for", "weather-form-location-input");
//         let formLocationText = document.createElement("span");
//         formLocationText.id = "weather-form-location-text";
//         formLocationText.textContent = "Location:";
//         let formLocationInput = document.createElement("input");
//         formLocationInput.id = "weather-form-location-input";
//         formLocationInput.required = true;
//         formLocationInput.addEventListener("keydown", this.updateLocation.bind(this));
//         formLocationInput.addEventListener("keyup", this.updateLocation.bind(this));

//         formLocationLabel.appendChild(formLocationText);
//         formLocationLabel.appendChild(formLocationInput);

//         let formDaysLabel = document.createElement("label");
//         formDaysLabel.id = "weather-form-days-label";
//         formDaysLabel.setAttribute("for", "weather-form-days-input")
//         let formDaysText = document.createElement("span");
//         formDaysText.id = "weather-form-days-text";
//         formDaysText.textContent = "Days ahead (up to 14):";
//         let formDaysInput = document.createElement("input");
//         formDaysInput.id = "weather-form-days-input";
//         formDaysInput.min = -1;
//         formDaysInput.max = 14;
//         formDaysInput.value = 0;
//         formDaysInput.type = "number";
//         formDaysInput.addEventListener("keydown", this.updateDay.bind(this));
//         formDaysInput.addEventListener("keyup", this.updateDay.bind(this));
//         formDaysInput.addEventListener("change", this.updateDay.bind(this));

//         formDaysLabel.appendChild(formDaysText);
//         formDaysLabel.appendChild(formDaysInput);
        
//         let formUnit = document.createElement("fieldset");
//         formUnit.classList.add("weathre-form-temperature-fieldset");

//         let formUnitHeading = document.createElement("caption");
//         formUnitHeading.classList.add("weather-form-temperature-heading");
//         formUnitHeading.textContent = "Unit System";
        
//         let formUnitMetricLabel = document.createElement("label");
//         formUnitMetricLabel.classList.add("weather-form-temperature-label");
//         formUnitMetricLabel.htmlFor = "weather-form-temperature-metric";

//         let formUnitMetricText = document.createElement("span");
//         formUnitMetricText.classList.add("weather-form-temperature-text");
//         formUnitMetricText.textContent = "Metric";

//         let formUnitMetricRadio = document.createElement("input");
//         formUnitMetricRadio.classList.add("weather-form-temperature-radio");
//         formUnitMetricRadio.id = "weather-form-temperature-metric";
//         formUnitMetricRadio.name = "weather-form-temperature";
//         formUnitMetricRadio.type = "radio";
//         formUnitMetricRadio.value = "metric";
//         formUnitMetricRadio.addEventListener("click", this.updateTemperatureType.bind(this));

//         formUnitMetricLabel.appendChild(formUnitMetricText);
//         formUnitMetricLabel.appendChild(formUnitMetricRadio);
        
//         let formUnitImperialLabel = document.createElement("label");
//         formUnitImperialLabel.classList.add("weather-form-temperature-label");
//         formUnitImperialLabel.htmlFor = "weather-form-temperature-imperial";

//         let formUnitImperialText = document.createElement("span");
//         formUnitImperialText.classList.add("weather-form-temperature-text");
//         formUnitImperialText.textContent = "Imperial";

//         let formUnitImperialRadio = document.createElement("input");
//         formUnitImperialRadio.classList.add("weather-form-temperature-radio");
//         formUnitImperialRadio.id = "weather-form-temperature-imperial";
//         formUnitImperialRadio.name = "weather-form-temperature";
//         formUnitImperialRadio.type = "radio";
//         formUnitImperialRadio.value = "imperial";
//         formUnitImperialRadio.addEventListener("click", this.updateTemperatureType.bind(this));

//         formUnitImperialLabel.appendChild(formUnitImperialText);
//         formUnitImperialLabel.appendChild(formUnitImperialRadio);

//         formUnit.appendChild(formUnitImperialLabel);
//         formUnit.appendChild(formUnitMetricLabel);

//         let formSubmit = document.createElement("button");
//         formSubmit.classList.add("weather-form-submit");
//         formSubmit.textContent = "Search";
//         formSubmit.type = "submit";

//         form.appendChild(formLocationLabel);
//         form.appendChild(formDaysLabel);
//         form.appendChild(formUnit);
//         form.appendChild(formSubmit);
        
//         this.main.children[1].appendChild(form);
//     }

//     async getWeatherData() {
//         const location = this.location;
//         const day = this.day;

//         try {
//             const data = await this.weather.getWeatherData(location, day);

//             if (data.resolvedAddress === undefined) {
//                 throw data;
//             }

//             let addresses = data.resolvedAddress.split(", ");
//             let addressFound = false;

//             for (let i = 0; i < addresses.length; i++) {
//                 if (addresses[i].toLowerCase() == location.toLowerCase()) {
//                     addressFound = true;
//                     break;
//                 }
//             }

//             if (!addressFound) {
//                 throw Error("Error: Location not found")
//                 // return null;
//             };


//         } catch (e) {
//             throw Error(
//                 "Error: Invalid characters entered. Please only use "
//                 + "alphabetical characters."
//             );
//             // return null;
//         }
//     }

//     updateDay(e) {
//         this.day = e.target.value
//     }

//     updateLocation(e) {
//         this.location = e.target.value;
//     }

//     updateTemperatureType(e) {
//         this.temperatureType = e.target.value === "metric";
//     }
// }

// export default UI;

import clearDayIcon from "./icon/clear-day.svg"
import clearNightIcon from "./icon/clear-night.svg"
import cloudyIcon from "./icon/cloudy.svg"
import fogIcon from "./icon/fog.svg"
import hailIcon from "./icon/hail.svg"
import partlyCloudlyDayIcon from "./icon/partly-cloudy-day.svg"
import partlyCloudNightIcon from "./icon/partly-cloudy-night.svg"
import rainSnowShowersDayIcon from "./icon/rain-snow-showers-day.svg"
import rainSnowShowersNightIcon from "./icon/rain-snow-showers-night.svg"
import rainSnowIcon from "./icon/rain-snow.svg"
import rainIcon from "./icon/rain.svg"
import showersDayIcon from "./icon/showers-day.svg"
import showersNightIcon from "./icon/showers-night.svg"
import sleetIcon from "./icon/sleet.svg"
import snowShowersDayIcon from "./icon/snow-showers-day.svg"
import snowShowersNightIcon from "./icon/snow-showers-night.svg"
import snowIcon from "./icon/snow.svg"
import thunderRainIcon from "./icon/thunder-rain.svg"
import thunderShowersDayIcon from "./icon/thunder-showers-day.svg"
import thunderShowersNightIcon from "./icon/thunder-showers-night.svg"
import thunderIcon from "./icon/thunder.svg"
import windIcon from "./icon/wind.svg"

class UI {
    constructor(weather) {
        this.weather = weather;
        this.main = document.getElementsByTagName("main")[0];
        this.day = 0;
        this.location = "";
        // false: celsius, true: fahrenheit
        this.temperatureType = true;

        this.displayUI();
        this.displayFooter();
    }

    displayFooter() {
        const footer = document.getElementsByTagName("footer")[0];

        this.displayFooterProfile(footer);
        this.displayFooterData(footer);
        this.displayFooterCopyright(footer);

        document.getElementsByTagName("body")[0].appendChild(footer);
    }

    displayFooterCopyright(container) {
        const copyright = document.createElement("p");
        copyright.classList.add("footer-copyright");

        let copyRightSymbol = document.createElement("span");
        copyRightSymbol.classList.add(
            "footer-copyright-element",
            "footer-copyright-symbol"
        );
        copyRightSymbol.innerHTML = "&copy; ";

        let copyrightYear = document.createElement("span");
        copyrightYear.classList.add(
            "footer-copyright-element",
            "footer-copyright-year"
        );
        copyrightYear.textContent = new Date().getFullYear() + " ";

        let copyrightHolder = document.createElement("span");
        copyrightHolder.classList.add(
            "footer-copyright-element",
            "footer-copyright-holder"
        );
        copyrightHolder.textContent = "Lyndon Mykal Panton ";

        let copyRightDivider = document.createElement("span");
        copyRightDivider.classList.add(
            "footer-copyright-element",
            "footer-copyright-divider"
        );
        copyRightDivider.textContent = "| ";

        let copyrightLicense = document.createElement("span");
        copyrightLicense.classList.add(
            "footer-copyright-element",
            "footer-copyright-license"
        );
        copyrightLicense.textContent = "All Rights Reserved";

        copyright.appendChild(copyRightSymbol);
        copyright.appendChild(copyrightYear);
        copyright.appendChild(copyrightHolder);
        copyright.appendChild(copyRightDivider);
        copyright.appendChild(copyrightLicense);

        container.appendChild(copyright);
    }

    displayFooterData(container) {
        const data = document.createElement("div");
        data.classList.add("footer-data");

        this.displayFooterDataLegal(data);
        this.displayFooterDataSocial(data);

        container.appendChild(data);
    }

    displayFooterDataLegal(container) {
        const legal = document.createElement("ul");
        legal.classList.add(
            "footer-data-list",
            "footer-data-legal"
        );

        let privacyPolicy = document.createElement("li");
        privacyPolicy.classList.add(
            "footer-data-list-item",
            "footer-data-list-pp"
        );
        privacyPolicy.textContent = "Privacy Policy";

        let termsAndConditions = document.createElement("li");
        termsAndConditions.classList.add(
            "footer-data-list-item",
            "footer-data-list-tac"
        );
        termsAndConditions.textContent = "Terms and Conditions";

        let cookies = document.createElement("li");
        cookies.classList.add(
            "footer-data-list-item",
            "footer-data-list-cookies"
        );
        cookies.textContent = "Cookies";

        legal.appendChild(privacyPolicy);
        legal.appendChild(termsAndConditions);
        legal.appendChild(cookies);

        container.appendChild(legal);
    }
    
    displayFooterDataSocial(container) {
        const social = document.createElement("ul");
        social.classList.add(
            "footer-data-list",
            "footer-data-social"
        );
    
        let twitter = document.createElement("li");
        twitter.classList.add(
            "footer-data-list-item",
            "footer-data-list-twitter"
        );
        let twitterLink = document.createElement("a");
        twitterLink.classList.add("footer-data-list-link");
        twitterLink.href = "https://twitter.com";
        twitterLink.target = "_blank";
        twitterLink.textContent = "Twitter";
        twitter.appendChild(twitterLink);
    
        let facebook = document.createElement("li");
        facebook.classList.add(
            "footer-data-list-item",
            "footer-data-list-facebook"
        );
        let facebookLink = document.createElement("a");
        facebookLink.classList.add("footer-data-list-link");
        facebookLink.href = "https://facebook.com";
        facebookLink.target = "_blank";
        facebookLink.textContent = "Facebook";
        facebook.appendChild(facebookLink);
    
        let instagram = document.createElement("li");
        instagram.classList.add(
            "footer-data-list-item",
            "footer-data-list-instagram"
        );
        let instagramLink = document.createElement("a");
        instagramLink.classList.add("footer-data-list-link");
        instagramLink.href = "https://instagram.com";
        instagramLink.target = "_blank";
        instagramLink.textContent = "Instagram";
        instagram.appendChild(instagramLink);
    
        social.appendChild(twitter);
        social.appendChild(facebook);
        social.appendChild(instagram);
    
        container.appendChild(social);
    }

    displayFooterProfile(container) {
        const profile = document.createElement("div");
        profile.classList.add("footer-profile");

        this.displayFooterProfileDeveloperInformation(profile);
        this.displayFooterProfileLangaugesFrameworks(profile);
        this.displayFooterProfileManagersPackages(profile);
        this.displayFooterProfileMoreProjects(profile);

        container.appendChild(profile);
    }

    displayFooterProfileDeveloperInformation(container) {
        const developerInformation = document.createElement("ul");
        developerInformation.classList.add(
            "footer-profile-list",
            "footer-profile-developer"
        );

        let developerInformationHeading = document.createElement("li");
        developerInformationHeading.classList.add("footer-profile-list-heading");
        developerInformationHeading.textContent = "Developer Information";

        let portfolio = document.createElement("li");
        portfolio.classList.add("footer-profile-list-item");
        let portfolioLink = document.createElement("a");
        portfolioLink.classList.add("footer-profile-list-link");
        portfolioLink.href = "https://lyndonpanton.co.uk";
        portfolioLink.target = "_blank";
        portfolioLink.textContent = "Portfolio";
        portfolio.appendChild(portfolioLink);

        let github = document.createElement("li");
        github.classList.add("footer-profile-list-item");
        let githubLink = document.createElement("a");
        githubLink.classList.add("footer-profile-list-link");
        githubLink.href = "https://github.com/lyndonpanton";
        githubLink.target = "_blank";
        githubLink.textContent = "GitHub";
        github.appendChild(githubLink);

        let linkedin = document.createElement("li");
        linkedin.classList.add("footer-profile-list-item");
        let linkedinLink = document.createElement("a");
        linkedinLink.classList.add("footer-profile-list-link");
        linkedinLink.href = "https://linkedin.com/in/lyndonpanton";
        linkedinLink.target = "_blank";
        linkedinLink.textContent = "LinkedIn";
        linkedin.appendChild(linkedinLink);

        developerInformation.appendChild(developerInformationHeading);
        developerInformation.appendChild(portfolio);
        developerInformation.appendChild(github);
        developerInformation.appendChild(linkedin);

        container.appendChild(developerInformation);
    }
    
    displayFooterProfileLangaugesFrameworks(container) {
        const languagesFrameworks = document.createElement("ul");
        languagesFrameworks.classList.add(
            "footer-profile-list",
            "footer-profile-languages"
        );

        let languagesFrameworksHeading = document.createElement("li");
        languagesFrameworksHeading.classList.add("footer-profile-list-heading");
        languagesFrameworksHeading.textContent = "Languages and Frameworks";

        let html = document.createElement("li");
        html.classList.add("footer-profile-list-item");
        let htmlLink = document.createElement("a");
        htmlLink.classList.add("footer-profile-list-link");
        htmlLink.href = "https://developer.mozilla.org/en-US/docs/Web/HTML";
        htmlLink.target = "_blank";
        htmlLink.textContent = "HTML";
        html.appendChild(htmlLink);

        let css = document.createElement("li");
        css.classList.add("footer-profile-list-item");
        let cssLink = document.createElement("a");
        cssLink.classList.add("footer-profile-list-link");
        cssLink.href = "https://developer.mozilla.org/en-US/docs/Web/CSS";
        cssLink.target = "_blank";
        cssLink.textContent = "CSS";
        css.appendChild(cssLink);

        let javaScript = document.createElement("li");
        javaScript.classList.add("footer-profile-list-item");
        let javaScriptLink = document.createElement("a");
        javaScriptLink.classList.add("footer-profile-list-link");
        javaScriptLink.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
        javaScriptLink.target = "_blank";
        javaScriptLink.textContent = "JavaScript";
        javaScript.appendChild(javaScriptLink);

        languagesFrameworks.appendChild(languagesFrameworksHeading);
        languagesFrameworks.appendChild(html);
        languagesFrameworks.appendChild(css);
        languagesFrameworks.appendChild(javaScript);

        container.appendChild(languagesFrameworks);
    }
    
    displayFooterProfileManagersPackages(container) {
        const managersPackagesApis = document.createElement("ul");
        managersPackagesApis.classList.add(
            "footer-profile-list",
            "footer-profile-managers"
        );

        let managersPackagesApisHeading = document.createElement("li");
        managersPackagesApisHeading.classList.add("footer-profile-list-heading");
        managersPackagesApisHeading.textContent = "Managers, Packages, and APIs";

        let npm = document.createElement("li");
        npm.classList.add("footer-profile-list-item");
        let npmLink = document.createElement("a");
        npmLink.classList.add("footer-profile-list-link");
        npmLink.href = "https://www.npmjs.com/";
        npmLink.target = "_blank";
        npmLink.textContent = "npm";
        npm.appendChild(npmLink);

        let webpack = document.createElement("li");
        webpack.classList.add("footer-profile-list-item");
        let webpackLink = document.createElement("a");
        webpackLink.classList.add("footer-profile-list-link");
        webpackLink.href = "https://webpack.js.org/";
        webpackLink.target = "_blank";
        webpackLink.textContent = "Webpack";
        webpack.appendChild(webpackLink);

        let visualCrossing = document.createElement("li");
        visualCrossing.classList.add("footer-profile-list-item");
        let visualCrossingLink = document.createElement("a");
        visualCrossingLink.classList.add("footer-profile-list-link");
        visualCrossingLink.href = "https://www.visualcrossing.com/";
        visualCrossingLink.target = "_blank";
        visualCrossingLink.textContent = "Visual Crossing";
        visualCrossing.appendChild(visualCrossingLink);

        managersPackagesApis.appendChild(managersPackagesApisHeading);
        managersPackagesApis.appendChild(npm);
        managersPackagesApis.appendChild(webpack);
        managersPackagesApis.appendChild(visualCrossing);

        container.appendChild(managersPackagesApis);
    }
    
    displayFooterProfileMoreProjects(container) {
        const moreProjects = document.createElement("ul");
        moreProjects.classList.add(
            "footer-profile-list",
            "footer-profile-projects"
        );

        let moreProjectsHeading = document.createElement("li");
        moreProjectsHeading.classList.add("footer-profile-list-heading");
        moreProjectsHeading.textContent = "More Projects";

        let pixelArtEditor = document.createElement("li");
        pixelArtEditor.classList.add("footer-profile-list-item");
        let pixelArtEditorLink = document.createElement("a");
        pixelArtEditorLink.classList.add("footer-profile-list-link");
        pixelArtEditorLink.href =
                "https://github.com/lyndonpanton/pixel-art-editor";
        pixelArtEditorLink.target = "_blank";
        pixelArtEditorLink.textContent = "Pixel Art Editor";
        pixelArtEditor.appendChild(pixelArtEditorLink);

        let currencyConvertor = document.createElement("li");
        currencyConvertor.classList.add("footer-profile-list-item");
        let currencyConvertorLink = document.createElement("a");
        currencyConvertorLink.classList.add("footer-profile-list-link");
        currencyConvertorLink.href =
                "https://github.com/lyndonpanton/currency-converter";
        currencyConvertorLink.target = "_blank";
        currencyConvertorLink.textContent = "Currency Convertor";
        currencyConvertor.appendChild(currencyConvertorLink);

        let wordCounter = document.createElement("li");
        wordCounter.classList.add("footer-profile-list-item");
        let wordCounterLink = document.createElement("a");
        wordCounterLink.classList.add("footer-profile-list-link");
        wordCounterLink.href =
                "https://github.com/lyndonpanton/word-counter";
        wordCounterLink.target = "_blank";
        wordCounterLink.textContent = "Word Counter";
        wordCounter.appendChild(wordCounterLink);

        let taskList = document.createElement("li");
        taskList.classList.add("footer-profile-list-item");
        let taskListLink = document.createElement("a");
        taskListLink.classList.add("footer-profile-list-link");
        taskListLink.href =
                "https://github.com/lyndonpanton/task-list";
        taskListLink.target = "_blank";
        taskListLink.textContent = "Task List";
        taskList.appendChild(taskListLink);

        moreProjects.appendChild(moreProjectsHeading);
        moreProjects.appendChild(pixelArtEditor);
        moreProjects.appendChild(currencyConvertor);
        moreProjects.appendChild(wordCounter);
        moreProjects.appendChild(taskList);

        container.appendChild(moreProjects);
    }

    displayUI() {
        // Save location on successful search
        // Use location storage location on load

        this.displayWeatherForm();
    }

    displayWeatherForm() {
        const form = document.createElement("form");
        form.id = "weather-form";
        form.addEventListener("submit", this.getWeatherData.bind(this));

        // Toggle (custom)
        let formToggle = document.createElement("label");
        formToggle.classList.add("weather-form-unit");
        let formToggleCheckbox = document.createElement("input");
        formToggleCheckbox.classList.add("weather-form-unit-checkbox");
        formToggleCheckbox.type = "checkbox";
        formToggleCheckbox.addEventListener(
            "change",
            this.updateTemperatureType.bind(this)
        );
        let formToggleSlider = document.createElement("span");
        formToggleSlider.classList.add("weather-form-unit-slider");

        formToggle.appendChild(formToggleCheckbox);
        formToggle.appendChild(formToggleSlider);

        // Input
        let formInput = document.createElement("input");
        formInput.classList.add("weather-form-location");
        formInput.placeholder = "Location";
        formInput.type = "text";
        formInput.addEventListener("keydown", this.updateLocation.bind(this));
        formInput.addEventListener("keyup", this.updateLocation.bind(this));

        // Button
        let formSubmit = document.createElement("input");
        formSubmit.classList.add("weather-form-submit");
        formSubmit.type = "submit";
        formSubmit.value = "Search";

        form.appendChild(formToggle);
        form.appendChild(formInput);
        form.appendChild(formSubmit);

        this.main.appendChild(form);
    }

    async displayWeatherData(data) {
        this.displayWeatherDataCurrent(data);
        this.displayWeatherDataFuture(data);
    }

    displayWeatherDataCurrent(data) {
        const previousContainer = document.getElementById("weather-current");
        
        if (previousContainer) {
            previousContainer.parentElement.removeChild(previousContainer);
        }

        /*
            - Top
                - Location
                - Date
        */
        let day = data.days[0];
        
        const currentContainer = document.createElement("article");
        currentContainer.id = "weather-current";

        let containerHeader = document.createElement("div");
        containerHeader.classList.add("weather-current-header");
        
        let location = document.createElement("h2");
        location.classList.add("weather-current-location");
        location.textContent =
            this.location[0].toUpperCase() + this.location.slice(1);

        // Wednesday, 3rd September 2025
        let date = document.createElement("p");
        date.classList.add("weather-current-date");
        date.textContent = this.getWeatherDate(day.datetime);

        containerHeader.appendChild(location);
        containerHeader.appendChild(date);

        currentContainer.appendChild(containerHeader);

        /*
            - Middle
                - Temperature
                - Icon
                    - Sunrise (dotted underline for description)
                    - Sunset (dotted underline for description)
                - Conditions
                    - Stations (dotted underline for details)
        */

        let containerMain = document.createElement("div");
        containerMain.classList.add("weather-current-main");

        let temperature = document.createElement("p");
        temperature.classList.add("weather-current-temperature");
        temperature.textContent = this.temperatureType
            ? day.temp + "°C"
            : day.temp + "°F";

        let containerCelestial = document.createElement("div");
        containerCelestial.classList.add("weather-current-celestial");

        let icon = document.createElement("img");
        icon.classList.add("weather-current-icon");
        icon.src = this.getWeatherIcon(day.icon);

        let iconAltText = day.icon.split("-").join(" ");
        icon.alt = "A " + iconAltText + " weather icon";

        let containerSunTime = document.createElement("div");
        containerSunTime.classList.add("weather-current-sun-time");

        let sunrise = document.createElement("p");
        sunrise.title = "Sunrise time";
        sunrise.classList.add(
            "weather-current-sun",
            "weather-current-sunrise"
        );
        sunrise.textContent = day.sunrise.slice(
            0,
            day.sunrise.lastIndexOf(":")
        );
        let sunset = document.createElement("p");
        sunset.title = "Sunset time";
        sunset.classList.add(
            "weather-current-sun",
            "weather-current-sunset"
        );
        sunset.textContent = day.sunset.slice(
            0,
            day.sunset.lastIndexOf(":")
        );

        containerSunTime.appendChild(sunrise);
        containerSunTime.appendChild(sunset);

        containerCelestial.appendChild(icon);
        containerCelestial.appendChild(containerSunTime);

        let conditions = document.createElement("p");
        conditions.classList.add("weather-current-conditions");
        conditions.textContent = day.conditions;

        containerMain.appendChild(temperature);
        containerMain.appendChild(containerCelestial);
        containerMain.appendChild(conditions);

        currentContainer.appendChild(containerMain);

        /*
            - Other (12, use dotted underline for description)
                - Windspeed
                - Winddir
                - Feelslike
                - Humidity
                - Snow
                - Severerisk
                - Visibility
                - Precipitation
                - Cloud Cover
                - UV Index
                - Moonphase
        */
        let containerFooter = document.createElement("div");
        containerFooter.classList.add("weather-current-footer");

        let windSpeed = document.createElement("p");
        windSpeed.classList.add("weather-current-wind-speed");
        // windSpeed.textContent = this.temperatureType
        //     ? "Wind speed: " + day.windspeed + "mph"
        //     : "Wind speed: " + day.windspeed + "km/h";
        windSpeed.textContent = "Wind speed: " + day.windspeed + "mph";

        let windDirection = document.createElement("p");
        windDirection.classList.add("weather-current-wind-direction");
        let shorthandWindDirection =
            this.getWeatherShorthandWindDirection(day.winddir);

        windDirection.textContent =
            "Wind direction: " + day.winddir + "°"
            + "(" + shorthandWindDirection + ")";

        let humidity = document.createElement("p");
        humidity.classList.add("weather-current-humidity");
        humidity.textContent = "Humidity: " + day.humidity + "%";

        let snow = document.createElement("p");
        snow.classList.add("weather-current-snow");
        snow.textContent = this.temperatureType
            ? "Snow coverage: " + day.snow + "cm"
            : "Snow coverage: " + day.snow + "in";

        let cloudCoverage = document.createElement("p");
        cloudCoverage.classList.add("weather-current-cloud-cover");
        cloudCoverage.textContent = "Cloud coverage: " + day.cloudcover + "%";

        let precipitationType = document.createElement("p");
        precipitationType.classList.add("weather-current-precipitation-type");
        if (day.preciptype !== null) {
            precipitationType.textContent = "Precipitation type: "
                + day.preciptype[0][0].toUpperCase() + day.preciptype[0].slice(1);
        } else {
            precipitationType.textContent = "Precipitation type: n/a";
        }

        let precipitationAmount = document.createElement("p");
        precipitationAmount.classList.add("weather-current-precipitationAmount");
        precipitationAmount.textContent = this.temperatureType
            ? "Precipitation coverage: " + day.precip + "mm"
            : "Precipitation coverage: " + day.precip + "in";

        let visibility = document.createElement("p");
        visibility.classList.add("weather-current-visibility");
        // visibility.textContent = this.temperatureType
        //     ? "Visibility: " + day.visibility + "km"
        //     : "Visibility: " + day.visibility + " miles";
        visibility.textContent = "Visibility: " + day.visibility + " miles";

        // add dotted underline styling and supply a tooltip with protection
        // recommendation depending on the UV index
        // (https://www.uvindextoday.com/uv-index-scale)
        let uvIndex = document.createElement("p");
        uvIndex.classList.add("weather-current-uv-index");
        uvIndex.textContent = "UV Index: " + day.uvindex;
        let uvIndexValue = document.createElement("span");
        uvIndexValue.classList.add("weather-current-uv-index-value");
        uvIndexValue.textContent =
            " (" + this.getWeatherUVIndexCategory(day.uvindex) + ")";
        uvIndexValue.title = this.getWeatherUVIndexRecommendation(day.uvindex);

        uvIndex.appendChild(uvIndexValue);

        let moonPhase = document.createElement("p");
        moonPhase.classList.add("weather-current-moon-phase");
        moonPhase.textContent = "Moonphase: ";
        let moonPhaseValue = document.createElement("span");
        moonPhaseValue.classList.add("weather-current-moon-phase-value");
        moonPhaseValue.textContent = this.getWeatherMoonPhaseString(day.moonphase);
        moonPhaseValue.title = this.getWeatherMoonPhaseFraction(day.moonphase);

        moonPhase.appendChild(moonPhaseValue);

        containerFooter.appendChild(windSpeed);
        containerFooter.appendChild(windDirection);
        containerFooter.appendChild(humidity);
        containerFooter.appendChild(cloudCoverage);
        containerFooter.appendChild(precipitationType);    
        containerFooter.appendChild(precipitationAmount);
        containerFooter.appendChild(visibility);
        containerFooter.appendChild(uvIndex);
        containerFooter.appendChild(moonPhase);

        currentContainer.appendChild(containerFooter);

        this.main.appendChild(currentContainer);
    }
    
    displayWeatherDataFuture(data) {
        let previousFutureWeatherContainer =
            document.getElementById("weather-future-container");
        
        if (previousFutureWeatherContainer) {
            previousFutureWeatherContainer.parentElement.removeChild(
                previousFutureWeatherContainer
            );
        }
    
        let futureWeatherContainer = document.createElement("div");
        futureWeatherContainer.id = "weather-future-container";

        for (let i = 1; i < 8; i++) {
            /*
                - Forecast (next 6/7 days)
                    - Day
                    - Icon
                    - Temperature
                    - Conditions
            */
            let futureWeatherElement = document.createElement("article");
            futureWeatherElement.classList.add("weather-future-article");

            let day = data.days[i];

            let dayOfWeek = document.createElement("h4");
            dayOfWeek.classList.add("weather-future-day");
            dayOfWeek.textContent = this.getWeatherDate(day.datetime)
                    .slice(0, this.getWeatherDate(day.datetime).indexOf(","));

            let icon = document.createElement("img");
            icon.classList.add("weather-future-icon");
            icon.src = this.getWeatherIcon(day.icon);
            let iconAltText = day.icon.split("-").join(" ");
            icon.alt = "A " + iconAltText + " weather icon";

            let temperature = document.createElement("p");
            temperature.classList.add("weather-future-temperature");
            temperature.textContent = this.temperatureType
                ? day.temp + "°C"
                : day.temp + "°F";

            let conditions = document.createElement("p");
            conditions.classList.add("weather-future-conditions");
            conditions.textContent = day.conditions;

            futureWeatherElement.appendChild(dayOfWeek);
            futureWeatherElement.appendChild(icon);
            futureWeatherElement.appendChild(temperature);
            futureWeatherElement.appendChild(conditions);

            futureWeatherContainer.appendChild(futureWeatherElement);
        }

        this.main.appendChild(futureWeatherContainer);
    }

    async getWeatherData(e) {
        e.preventDefault();

        const location = this.location;
        const temperatureType = this.temperatureType;

        try {
            const data = await this.weather.getWeatherData(
                location,
                temperatureType
            );

            if (data.resolvedAddress === undefined) {
                throw data;
            }

            let addresses = data.resolvedAddress.split(", ");
            let addressFound = false;

            for (let i = 0; i < addresses.length; i++) {
                if (addresses[i].toLowerCase() === location.toLowerCase()) {
                    addressFound = true;
                    break;
                }
            }

            if (!addressFound) {
                throw Error("Error: Location not found");
                // return null;
            }

            this.displayWeatherData(data);

        } catch (e) {
            throw Error(
                "Error: Invalid characters entered. Please only use "
                + "alphabetical characters."
            )

            // return null;
        }
    }

    getWeatherDate(datetime) {
        let dayOfWeek = new Date(datetime).getDay();

        switch (dayOfWeek) {
            case 0:
                dayOfWeek = "Sunday";
                break;
            case 1:
                dayOfWeek = "Monday";
                break;
            case 2:
                dayOfWeek = "Tuesday";
                break;
            case 3:
                dayOfWeek = "Wednesday";
                break;
            case 4:
                dayOfWeek = "Thursday";
                break;
            case 5:
                dayOfWeek = "Friday";
                break;
            case 6:
                dayOfWeek = "Saturday";
                break;
        }

        let dayOfMonth = new Date(datetime).getDate().toString();

        if (dayOfMonth.length === 1) {
            dayOfMonth = dayOfMonth.at(-1);
        }

        if (dayOfMonth.at(-1) === "1") {
            dayOfMonth += "st";
        } else if (dayOfMonth.at(-1) === "2") {
            dayOfMonth += "nd";
        } else if (dayOfMonth.at(-1) === "3") {
            dayOfMonth += "rd";
        } else {
            dayOfMonth += "th";
        }

        let month = new Date(datetime).getMonth();

        switch (month) {
            case 0:
                month = "January";
                break;
            case 1:
                month = "Febrary";
                break;
            case 2:
                month = "March";
                break;
            case 3:
                month = "April";
                break;
            case 4:
                month = "May";
                break;
            case 5:
                month = "June";
                break;
            case 6:
                month = "July";
                break;
            case 7:
                month = "August";
                break;
            case 8:
                month = "September";
                break;
            case 9:
                month = "October";
                break;
            case 10:
                month = "November";
                break;
            case 11:
                month = "December";
                break;
        }

        let year = new Date(datetime).getFullYear();
        
        return dayOfWeek + ", " + dayOfMonth + " " + month + " " + year;
    }

    getWeatherIcon(iconValue) {
        switch (iconValue) {
            case "clear-day":
                return clearDayIcon;
            case "clear-night":
                return clearNightIcon;
            case "cloudy":
                return cloudyIcon;
            case "fog":
                return fogIcon;
            case "hail":
                return hailIcon;
            case "partly-cloudy-day":
                return partlyCloudlyDayIcon;
            case "partly-cloudy-night":
                return partlyCloudNightIcon;
            case "rain":
                return rainIcon;
            case "rain-snow":
                return rainSnowIcon;
            case "rain-snow-showers-day":
                return rainSnowShowersDayIcon;
            case "rain-snow-showers-night":
                return rainSnowShowersNightIcon;
            case "showers-day":
                return showersDayIcon;
            case "showers-night":
                return showersNightIcon;
            case "sleet":
                return sleetIcon;
            case "snow":
                return snowIcon;
            case "snow-showers-day":
                return snowShowersDayIcon;
            case "snow-showers-night":
                return snowShowersNightIcon;
            case "thunder":
                return thunderIcon;
            case "thunder-rain":
                return thunderRainIcon;
            case "thunder-showers-day":
                return thunderShowersDayIcon;
            case "thunder-showers-night":
                return thunderShowersNightIcon;
            case "wind":
                return windIcon;
            default:
                console.log("Error: Icon not found");
                return null;
        }
    }

    getWeatherMoonPhaseFraction(moonPhaseValue) {
        if (moonPhaseValue === 0) {
            return "Phase 1 of 8";
        } else if (moonPhaseValue <= 0.25) {
            return "Phase 2 of 8";
        } else if (moonPhaseValue === 0.25) {
            return "Phase 3 of 8";
        } else if (moonPhaseValue <= 0.5) {
            return "Phase 4 of 8";
        } else if (moonPhaseValue === 0.5) {
            return "Phase 5 of 8";
        } else if (moonPhaseValue <= 0.75) {
            return "Phase 6 of 8";
        } else if (moonPhaseValue === 0.75) {
            return "Phase 7 of 8";
        } else {
            return "Phase 8 of 8";
        }
    }

    getWeatherMoonPhaseString(moonPhaseValue) {
        if (moonPhaseValue === 0) {
            return "New Moon";
        } else if (moonPhaseValue <= 0.25) {
            return "Waxing Crescent";
        } else if (moonPhaseValue === 0.25) {
            return "First Quarter";
        } else if (moonPhaseValue <= 0.5) {
            return "Waxing Gibbous";
        } else if (moonPhaseValue === 0.5) {
            return "Full Moon";
        } else if (moonPhaseValue <= 0.75) {
            return "Waning Gibbous";
        } else if (moonPhaseValue === 0.75) {
            return "Last Quarter";
        } else {
            return "Waning Crecent";
        }
    }

    getWeatherShorthandWindDirection(angle) {
        if (angle < 20 || angle > 340) {
            return "N";
        } else if (angle >= 20 && angle <= 70) {
            return "NE";
        } else if (angle > 70 && angle < 110) {
            return "E";
        } else if (angle >= 110 && angle <= 160) {
            return "SE";
        } else if (angle > 160 && angle < 200) {
            return "S";
        } else if (angle >= 200 && angle <= 250) {
            return "SW";
        } else if (angle > 250 && angle < 290) {
            return "W";
        } else {
            return "NW";
        }
    }

    getWeatherUVIndexCategory(uvIndex) {
        if (uvIndex < 0) {
            return "n/a"
        } else if (uvIndex <= 2) {
            return "low";
        } else if (uvIndex <= 5) {
            return "moderate";
        } else if (uvIndex <= 7) {
            return "high";
        } else if (uvIndex <= 10) {
            return "very high";
        } else {
            return "extreme";
        }
    }

    getWeatherUVIndexRecommendation(uvIndex) {
        if (uvIndex < 0) {
            return "n/a"
        } else if (uvIndex <= 2) {
            return "No protection needed";
        } else if (uvIndex <= 5) {
            return "Some protection needed";
        } else if (uvIndex <= 7) {
            return "Protection essential";
        } else if (uvIndex <= 10) {
            return "Extra protection is needed";
        } else {
            return "Stay inside";
        }
    }

    updateLocation(e) {
        this.location = e.target.value;
    }
    
    updateTemperatureType(e) {
        let element = e.target.parentElement.children[1];
        let styles = window.getComputedStyle(element, "::before");
        // styles.content returns a string containing quotations
        this.temperatureType = styles.content.slice(1, 3) === "Me";
    }
}

export default UI;
