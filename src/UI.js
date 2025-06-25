class UI {
    constructor(weather) {
        this.weather = weather;
        this.main = document.getElementsByTagName("main")[0];
    }

    display() {
        let text = document.createElement("p");
        text.textContent = "This is a string";

        this.main.appendChild(text);
    }

    createWeatherForm() {

    }

    async getWeatherData(location, day) {
        let element = document.createElement("p");
        try {
            const data = await this.weather.getWeatherData(location, day);
            element.textContent = data.result;

            if (day === -1) {
                console.log(data.currentConditions);
            } else {
                console.log(data.days[day]);
            }

            this.main.appendChild(element);
        } catch (e) {
            console.log(e);
        }
    }
}

export default UI;
