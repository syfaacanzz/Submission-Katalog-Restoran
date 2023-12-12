import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

import("../public/data/DATA.json").then(({ default: jsonData }) => {
  console.log("Data from JSON:", jsonData);

  let restaurantRec = "";
  jsonData["restaurants"].forEach(function (restaurantData) {
    restaurantRec += `
    <div class="restaurant-item">
        <img class="restaurant-pic" src="${restaurantData["pictureId"]}" alt="${restaurantData["name"]}" title="${restaurantData["name"]}">
        <div class="restaurant-city">${restaurantData["city"]}</div>
        <div class="restaurant-content">
          <h1 class="restaurant-name"><a href="#">${restaurantData["name"]}</a></h1>
          <div class="restaurant-description">${restaurantData["description"].slice(0, 150)}...</div>
         
        </div>
      </div>
    `;
  });

  // Display restaurant list in the HTML element with id "restaurantList"
  document.querySelector("#restaurantList").innerHTML = restaurantRec;
});

// Menu
const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});
