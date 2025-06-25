class UI {
    constructor(weather) {
        this.weather = weather;
        this.main = document.getElementsByTagName("main")[0];
        this.day = 0;
        this.location = "";
        this.temperatureType = "";
    }

    display() {
        let text = document.createElement("p");
        text.textContent = "This is a string";

        this.main.appendChild(text);
        this.main.appendChild(this.createWeatherForm());
    }

    createWeatherForm() {
        const form = document.createElement("form");
        form.setAttribute("id", "weather-form");

        let formLocation = document.createElement("input");
        formLocation.classList.add("weather-form-location");
        formLocation.addEventListener("keydown", this.updateLocation.bind(this));
        formLocation.addEventListener("keyup", this.updateLocation.bind(this));

        // Allow the user to search predicted weather conditions
        let formDays = document.createElement("input");
        formDays.type = "number";
        formDays.addEventListener("keydown", this.updateDay.bind(this));
        formDays.addEventListener("keyup", this.updateDay.bind(this));
        formDays.addEventListener("change", this.updateDay.bind(this));
        
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

        form.appendChild(formLocation);
        form.appendChild(formDays);
        form.appendChild(formTemperatureCelsiusLabel);
        form.appendChild(formTemperatureFahrenheitLabel);
        form.appendChild(formSubmit);
        form.addEventListener("submit", this.getWeatherData.bind(this));
        
        return form;
    }

    async getWeatherData(e) {
        e.preventDefault();

        const location = this.location;
        const day = this.day;

        console.log(this.day);
        console.log(this.location);
        console.log(this.temperatureType);

        let element = document.createElement("p");

        try {
            const data = await this.weather.getWeatherData(location);

            if (parseInt(this.day) === -1) {
                element.textContent = data.currentConditions;
            } else {
                console.log(data.days[day]);
                element.textContent = data.days[day].currentConditions;
            }

            this.main.appendChild(element);
        } catch (e) {
            console.log(e);
        }
    }

    updateDay(e) {
        this.day = e.target.value;
    }

    updateLocation(e) {
        this.location = e.target.value;
    }

    updateTemperatureType(e) {
        this.temperatureType = e.target.value;
    }
}

export default UI;
