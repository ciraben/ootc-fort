const geooverlay = document.querySelector("#georegion");
const geooverlayToggle = document.querySelector("#geo-overlay-toggle");
/*
const civoverlay = document.querySelector("#civilizations");
const civoverlayToggle = document.querySelector("#civ-overlay-toggle");
const eventsoverlay = document.querySelector("#events");
const eventsoverlayToggle = document.querySelector("#event-overlay-toggle");
*/

geooverlayToggle.addEventListener("change", function() {
  if (this.checked) {
    geooverlay.style.display = "block";
  } else {
    geooverlay.style.display = "none";
  }
});
/*
civoverlayToggle.addEventListener("change", function() {
  if (this.checked) {
    civoverlay.style.display = "block";
  } else {
    civoverlay.style.display = "none";
  }
});
eventsoverlayToggle.addEventListener("change", function() {
  if (this.checked) {
    eventsoverlay.style.display = "block";
  } else {
    eventsoverlay.style.display = "none";
  }
});
*/
