import "./styles.css";

import UI from "./UI";
import Weather from "./Weather";

const weather = new Weather("ZWAYBTGS53V42U9XFL589UQS7");
const ui = new UI(weather);

ui.display();
ui.createWeatherForm();
// ui.getWeatherData("london", 0);

console.log("Webpack has been configured successfully");
