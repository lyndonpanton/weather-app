class Weather {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getWeatherData(location, temperatureType) {
        const unitGroup = temperatureType ? "us" : "uk";

        const query =
                "https://weather.visualcrossing.com/VisualCrossingWebServices"
                + "/rest/services/timeline/"
                + location
                + "?unitGroup=" + unitGroup
                + "&key=" + this.apiKey
                + "&contentType=json";

        try {
            const response = await fetch(query, { mode: "cors" });

            if (!response.ok) {
                throw new Error("Error: Location not found");
            } else {
                const data = response.json();
                return data;
            }
        } catch (e) {
            let error = document.createElement("p");
            error.textContent = e.message;
            return e;
        }
    }
}

export default Weather;
