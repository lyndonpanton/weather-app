import "./styles.css";

import UI from "./UI";
import Weather from "./Weather";

const weather = new Weather("<API KEY>");
const ui = new UI(weather);

ui.display();
ui.getWeatherData("london", 0);

console.log("Webpack has been configured successfully");
