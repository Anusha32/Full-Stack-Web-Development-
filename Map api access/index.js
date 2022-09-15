//how to acess maps using the api developers
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 12.9716, lng:77.5946 },
    zoom: 8,
  });
}

window.initMap = initMap;