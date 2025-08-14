class UI {
    constructor(weather) {
        this.weather = weather;
        this.main = document.getElementsByTagName("main")[0];
        this.day = 0;
        this.location = "";
        // false: celsius, true: fahrenheit
        this.temperatureType = false;
    }

    display() {
        this.main.appendChild(this.createWeatherForm());
    }

    createWeatherForm() {
        // Allow the user to search predicted weather conditions
        // Allow the user to search for a particular time
        const form = document.createElement("form");
        form.setAttribute("id", "weather-form");

        let formLocationLabel = document.createElement("label");
        formLocationLabel.id = "weather-form-location-label";
        formLocationLabel.setAttribute("for", "weather-form-location-input");
        let formLocationText = document.createElement("span");
        formLocationText.id = "weather-form-location-text";
        formLocationText.textContent = "What location would you like to search for?";
        let formLocationInput = document.createElement("input");
        formLocationInput.id = "weather-form-location-input";
        formLocationInput.addEventListener("keydown", this.updateLocation.bind(this));
        formLocationInput.addEventListener("keyup", this.updateLocation.bind(this));

        formLocationLabel.appendChild(formLocationText);
        formLocationLabel.appendChild(formLocationInput);

        let formDaysLabel = document.createElement("label");
        formDaysLabel.id = "weather-form-days-label";
        formDaysLabel.setAttribute("for", "weather-form-days-input")
        let formDaysText = document.createElement("span");
        formDaysText.id = "weather-form-days-text";
        formDaysText.textContent = "How many days ahead would you like to search?";
        let formDaysInput = document.createElement("input");
        formDaysInput.id = "weather-form-days-input";
        formDaysInput.value = 0;
        formDaysInput.type = "number";
        formDaysInput.addEventListener("keydown", this.updateDay.bind(this));
        formDaysInput.addEventListener("keyup", this.updateDay.bind(this));
        formDaysInput.addEventListener("change", this.updateDay.bind(this));

        formDaysLabel.appendChild(formDaysText);
        formDaysLabel.appendChild(formDaysInput);
        
        let formTemperatureCelsiusLabel = document.createElement("label");
        formTemperatureCelsiusLabel.classList.add("weather-form-temperature-label");
        formTemperatureCelsiusLabel.htmlFor = "weather-form-temperature-celsius";

        let formTemperatureCelsiusText = document.createElement("span");
        formTemperatureCelsiusText.classList.add("weather-form-temperature-text");
        formTemperatureCelsiusText.textContent = "Celsius";

        let formTemperatureCelsiusRadio = document.createElement("input");
        formTemperatureCelsiusRadio.classList.add("weather-form-temperature-radio");
        formTemperatureCelsiusRadio.id = "weather-form-temperature-celsius";
        formTemperatureCelsiusRadio.name = "weather-form-temperature";
        formTemperatureCelsiusRadio.type = "radio";
        formTemperatureCelsiusRadio.value = "celsius";
        formTemperatureCelsiusRadio.addEventListener("click", this.updateTemperatureType.bind(this));

        formTemperatureCelsiusLabel.appendChild(formTemperatureCelsiusText);
        formTemperatureCelsiusLabel.appendChild(formTemperatureCelsiusRadio);
        
        let formTemperatureFahrenheitLabel = document.createElement("label");
        formTemperatureCelsiusLabel.classList.add("weather-form-temperature-label");
        formTemperatureFahrenheitLabel.htmlFor = "weather-form-temperature-fahrenheit";

        let formTemperatureFahrenheitText = document.createElement("span");
        formTemperatureCelsiusText.classList.add("weather-form-temperature-text");
        formTemperatureFahrenheitText.textContent = "Fahrenheit";

        let formTemperatureFahrenheitRadio = document.createElement("input");
        formTemperatureFahrenheitRadio.classList.add("weather-form-temperature-radio");
        formTemperatureFahrenheitRadio.id = "weather-form-temperature-fahrenheit";
        formTemperatureFahrenheitRadio.name = "weather-form-temperature";
        formTemperatureFahrenheitRadio.type = "radio";
        formTemperatureFahrenheitRadio.value = "fahrenheit";
        formTemperatureFahrenheitRadio.addEventListener("click", this.updateTemperatureType.bind(this));

        formTemperatureFahrenheitLabel.appendChild(formTemperatureFahrenheitText);
        formTemperatureFahrenheitLabel.appendChild(formTemperatureFahrenheitRadio);

        let formSubmit = document.createElement("button");
        formSubmit.classList.add("weather-form-submit");
        formSubmit.textContent = "Search";
        formSubmit.type = "submit";

        form.appendChild(formLocationLabel);
        form.appendChild(formDaysLabel);
        form.appendChild(formTemperatureCelsiusLabel);
        form.appendChild(formTemperatureFahrenheitLabel);
        form.appendChild(formSubmit);
        form.addEventListener("submit", this.getWeatherData.bind(this));
        
        return form;
    }

    displayCurrentWeatherData(data) {
        console.log(data);
    }

    displayFutureWeatherData(data, day) {
        let location = data.resolvedAddress;
        let condition = data.days[day].conditions;
        let date = data.days[day].datetime;
        let description = data.days[day].description;
        let feelslike = data.days[day].feelslike;
        let humidity = data.days[day].humidity;
        let iconName = data.days[day].icon;
        // Check what unit of measurement is being used
        let snow = data.days[day].snow;
        let sunriseTime = data.days[day].sunrise;
        let sunsetTime = data.days[day].sunset;
        let tempatureAverage = data.days[day].temp;
        let tempatureMin = data.days[day].tempmin;
        let tempatureMax = data.days[day].tempmax;
        let uvIndex = data.days[day].uvindex;
        let visibility = data.days[day].visibility;
        let windDirection = data.days[day].winddir;
        let windspeed = data.days[day].windspeed;

        // console.log(data.days[day]);
        console.log(location);
        console.log(data.days[day].conditions);

        console.log("Average temperature: " + tempatureAverage);
    }

    async getWeatherData(e) {
        e.preventDefault();

        const location = this.location;
        const day = this.day;

        try {
            const data = await this.weather.getWeatherData(
                location,
                this.temperatureType
            );

            if (data.resolvedAddress === undefined) {
                throw data;
            }

            let addresses = data.resolvedAddress.split(", ");
            console.log(addresses);

            let addressFound = false;

            for (let i = 0; i < addresses.length; i++) {
                if (addresses[i].toLowerCase() == location.toLowerCase()) {
                    addressFound = true;
                    break;
                }
            }

            if (!addressFound) throw Error("Error: Location not found");

            // let location = addresses.join(", ");

            if (parseInt(this.day) === -1) {
                this.displayCurrentWeatherData(data);
            } else {
                this.displayFutureWeatherData(data, day);
            }

        } catch (e) {
            let error = document.createElement("p");

            if (e.message === "Failed to fetch") {
                error.textContent =
                        "Error: Invalid characters entered. Please only use "
                        + "alphabetically characters.";
            } else {
                error.textContent = e.message;
            }

            this.main.appendChild(error);
        }
    }

    updateDay(e) {
        this.day = e.target.value;
    }

    updateLocation(e) {
        this.location = e.target.value;
    }

    updateTemperatureType(e) {
        this.temperatureType = (e.target.value === "celsius")
            ? false
            : true;
    }
}

export default UI;
