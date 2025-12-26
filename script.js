ymaps.ready(init);

function init() {
  var map = new ymaps.Map("map", {
    center: [41.55, 60.63],
    zoom: 12
  });

  talabalar.forEach(function(t) {
    var placemark = new ymaps.Placemark(t.coords, {
      balloonContent: `<b>${t.name}</b><br>${t.kurs}`
    });
    map.geoObjects.add(placemark);
  });
}
