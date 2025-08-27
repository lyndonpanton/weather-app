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

/*
    - MVP
        - Weather form should be displayed on page load
        - Request
            - Use an async function to retrieve the weather data object when
            request is made
            - If day is -1 (display current data):
                - Remove left, center, and right content
                - Populate left, center, and right content
            - If day is not -1 (display future data):
                - Remove left, center, and right content
                - Populate left, center, and right content
        - State
            - day: int
            - location: string
            - temperatureType: bool
        - State modifiers
            - updateDay
            - updateLocation
            - updateTemperatureType
        - Error handling
            - Invalid location entered
        - Styling
            - Underline values for extra weather data
    - Extensions
        - Use local storage to remember last location searched for, and load
        that data on page load (store: day, location, temperature type)
        - Use a loading animation whilst the data is being gathered
            - The weather image icon takes longer to display, so you may want
            an individual loading icon for it as well
*/

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
        // clear previous current weather data
        const previousContainer = document.getElementById("weather-current");
        
        if (previousContainer) {
            previousContainer.parentElement.removeChild(previousContainer);
        }

        // display current current weather data

        /*
            - Top
                - Location
                - Date
        */
        let day = data.days[0];
        console.log(day);
        
        const currentContainer = document.createElement("article");
        currentContainer.id = "weather-current";

        let containerHeader = document.createElement("div");
        containerHeader.classList.add("weather-current-header");
        
        let location = document.createElement("h2");
        location.classList.add("weather-current-location");
        location.textContent =
            this.location[0].toUpperCase() + this.location.slice(1);

        let date = document.createElement("p");
        date.classList.add("weather-current-date");
        date.textContent = day.datetime.split("-").reverse().join("/");

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

        switch (day.icon) {
            case "clear-day":
                icon.src = clearDayIcon;
                break;
            case "clear-night":
                icon.src = clearNightIcon;
                break;
            case "cloudy":
                icon.src = cloudyIcon;
                break;
            case "fog":
                icon.src = fogIcon;
                break;
            case "hail":
                icon.src = hailIcon;
                break;
            case "partly-cloudy-day":
                icon.src = partlyCloudlyDayIcon;
                break;
            case "partly-cloudy-night":
                icon.src = partlyCloudNightIcon;
                break;
            case "rain":
                icon.src = rainIcon;
                break;
            case "rain-snow":
                icon.src = rainSnowIcon;
                break;
            case "rain-snow-showers-day":
                icon.src = rainSnowShowersDayIcon;
                break;
            case "rain-snow-showers-night":
                icon.src = rainSnowShowersNightIcon;
                break;
            case "showers-day":
                icon.src = showersDayIcon;
                break;
            case "showers-night":
                icon.src = showersNightIcon;
                break;
            case "sleet":
                icon.src = sleetIcon;
                break;
            case "snow":
                icon.src = snowIcon;
                break;
            case "snow-showers-day":
                icon.src = snowShowersDayIcon;
                break;
            case "snow-showers-night":
                icon.src = snowShowersNightIcon;
                break;
            case "thunder":
                icon.src = thunderIcon;
                break;
            case "thunder-rain":
                icon.src = thunderRainIcon;
                break;
            case "thunder-showers-day":
                icon.src = thunderShowersDayIcon;
                break;
            case "thunder-showers-night":
                icon.src = thunderShowersNightIcon;
                break;
            case "wind":
                icon.src = windIcon;
                break;
            default:
                console.log("Error: Icon not found");
        }

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
        windSpeed.textContent = this.temperatureType
            ? "Wind speed: " + day.windspeed + "mph"
            : "Wind speed: " + day.windspeed + "km/h";

        // Denote compass wind direction in brackets (e.g., N, NE)
        let windDirection = document.createElement("p");
        windDirection.classList.add("weather-current-wind-direction");
        let shorthandWindDirection;

        if (day.winddir < 20 || day.winddir > 340) {
            shorthandWindDirection = "N";
        } else if (day.winddir >= 20 && day.winddir <= 70) {
            shorthandWindDirection = "NE";
        } else if (day.winddir > 70 && day.winddir < 110) {
            shorthandWindDirection = "E";
        } else if (day.winddir >= 110 && day.winddir <= 160) {
            shorthandWindDirection = "SE";
        } else if (day.winddir > 160 && day.winddir < 200) {
            shorthandWindDirection = "S";
        } else if (day.winddir >= 200 && day.winddir <= 250) {
            shorthandWindDirection = "SW";
        } else if (day.winddir > 250 && day.winddir < 290) {
            shorthandWindDirection = "W";
        } else {
            shorthandWindDirection = "NW";
        }

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

        // add text-based message in brackets
        // let severeRisk = document.createElement("p");
        // severeRisk.classList.add("weather-current-severe-risk");
        // severeRisk.textContent = "Severe risk: " + day.severerisk;

        let visibility = document.createElement("p");
        visibility.classList.add("weather-current-visibility");
        visibility.textContent = this.temperatureType
            ? "Visibility: " + day.visibility + "km"
            : "Visibility: " + day.visibility + " miles";

        // let precipitationType = document.createElement("p");
        // precipitationType.classList.add("weather-current-precipitation-type");
        // precipitationType.textContent = day.preciptype;

        let precipitationAmount = document.createElement("p");
        precipitationAmount.classList.add("weather-current-precipitationAmount");
        precipitationAmount.textContent = this.temperatureType
            ? "Precipitation coverage: " + day.precip + "mm"
            : "Precipitation coverage: " + day.precip + "in";

        let cloudCover = document.createElement("p");
        cloudCover.classList.add("weather-current-cloud-cover");
        cloudCover.textContent = "Cloud coverage: " + day.cloudcover + "%";

        // add dotted underline styling and supply a tooltip with protection
        // recommendation depending on the UV index
        // (https://www.uvindextoday.com/uv-index-scale)
        let uvIndex = document.createElement("p");
        uvIndex.classList.add("weather-current-uv-index");
        uvIndex.textContent = "UV Index: " + day.uvindex;
        let uvIndexValue = document.createElement("span");
        uvIndexValue.classList.add("weather-current-uv-index-value");

        switch (day.uvindex) {
            case 0:
            case 1:
            case 2:
                uvIndexValue.textContent += " (low)";
                uvIndexValue.title = "No protection needed"
                break;
            case 3:
            case 4:
            case 5:
                uvIndexValue.textContent += " (moderate)";
                uvIndexValue.title = "Some protection needed"
                break;
            case 6:
            case 7:
                uvIndexValue.textContent += " (high)";
                uvIndexValue.title = "Protection essential"
                break;
            case 8:
            case 9:
            case 10:
                uvIndexValue.textContent += " (very high)";
                uvIndexValue.title = "Extra protection is needed"
                break;
            default:
                uvIndexValue.textContent += " (extreme)";
                uvIndexValue.title = "Stay inside"
                break;
        }

        uvIndex.appendChild(uvIndexValue);

        let moonphase = document.createElement("p");
        moonphase.classList.add("weather-current-moon-phase");
        moonphase.textContent = "Moonphase: ";
        let moonphaseValue = document.createElement("span");
        moonphaseValue.classList.add("weather-current-moon-phase-value");

        if (day.moonphase === 0) {
            moonphaseValue.textContent += "New Moon";
            moonphaseValue.title = "Phase 1 of 8";
        } else if (day.moonphase <= 0.25) {
            moonphaseValue.textContent += "Waxing Crescent";
            moonphaseValue.title = "Phase 2 of 8";
        } else if (day.moonphase === 0.25) {
            moonphaseValue.textContent += "First Quarter";
            moonphaseValue.title = "Phase 3 of 8";
        } else if (day.moonphase <= 0.5) {
            moonphaseValue.textContent += "Waxing Gibbous";
            moonphaseValue.title = "Phase 4 of 8";
        } else if (day.moonphase === 0.5) {
            moonphaseValue.textContent += "Full Moon";
            moonphaseValue.title = "Phase 5 of 8";
        } else if (day.moonphase <= 0.75) {
            moonphaseValue.textContent += "Waning Gibbous";
            moonphaseValue.title = "Phase 6 of 8";
        } else if (day.moonphase === 0.75) {
            moonphaseValue.textContent += "Last Quarter";
            moonphaseValue.title = "Phase 7 of 8";
        } else {
            moonphaseValue.textContent += "Waning Crecent";
            moonphaseValue.title = "Phase 8 of 8";
        }

        moonphase.appendChild(moonphaseValue);

        containerFooter.appendChild(windSpeed);
        containerFooter.appendChild(windDirection);
        containerFooter.appendChild(humidity);
        containerFooter.appendChild(snow);
        // containerFooter.appendChild(severeRisk);
        containerFooter.appendChild(visibility);
        // containerFooter.appendChild(precipitationType);
        containerFooter.appendChild(precipitationAmount);
        containerFooter.appendChild(cloudCover);
        containerFooter.appendChild(uvIndex);
        containerFooter.appendChild(moonphase);

        currentContainer.appendChild(containerFooter);

        this.main.appendChild(currentContainer);
    }
    
    displayWeatherDataFuture(data) {
        // clear previous current weather data
    
        // display current current weather data
        for (let i = 1; i < data.days.length; i++) {
            /*
                - Forecast (next 6 days)
                    - Day
                    - Icon
                    - Temperature
                    - Conditions
            */
        }
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
