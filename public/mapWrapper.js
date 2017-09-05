var MapWrapper = function(container, coords, zoom) {
    var container = document.getElementById('main-map');
    this.googleMap = new google.maps.Map(container, {
        center: coords,
        zoom: zoom
    });
    this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords, contentString) {
    var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

    var marker = new google.maps.Marker({
        position: coords,
        map: this.googleMap
    });
    this.markers.push(marker);

    marker.addListener('click', function() {
          infowindow.open(this.googleMap, marker);
        });
},

MapWrapper.prototype.addClickEvent = function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
        var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}
        this.addMarker(position);
    }.bind(this));
},

MapWrapper.prototype.bounceMarker = function(){
    this.markers.forEach(function(marker){
        marker.setAnimation(google.maps.Animation.BOUNCE)
    })
},

MapWrapper.prototype.goToIstanbul = function(){
    var position = {lat: 41.015137, lng: 28.979530}
    this.addMarker(position);
    var mapDiv = document.getElementById('main-map');
    var mainMap = new MapWrapper(mapDiv, position, 10);
}