class Weather {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getWeatherData(location, day) {
        const query =
                "https://weather.visualcrossing.com/VisualCrossingWebServices"
                + "/rest/services/timeline/"
                + location
                + "?unitGroup=us" 
                + "&key=" + this.apiKey
                + "&contentType=json";

        const response = await fetch(query, { mode: "cors" });
        const data = response.json();
        return data;
    }
}

export default Weather;
