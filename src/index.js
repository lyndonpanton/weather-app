import "./styles.css";

const image = document.createElement("img");
image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Igel.JPG/500px-Igel.JPG";
image.alt = "A hedgehog";
image.style.width = "200px";
// image.width = "200px";

document.getElementsByTagName("main")[0].appendChild(image);

console.log("Webpack has been configured successfully");
