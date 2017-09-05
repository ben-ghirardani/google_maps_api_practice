var initialize = function(){

    var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Finsbury Park</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Our old house</b>, also referred to as <b>The Flat</b>, is a medium ' +
            'sized flat situated on the border between Finsbury Park and Crouch End. '+
            'A few nice pubs nearby, and more restaurants than you could visit in a year.'+
            '</p>'+
            '<p>Attribution: Finsbury Park, <a href="https://en.wikipedia.org/wiki/Finsbury_Park,_London">'+
            'https://en.wikipedia.org/wiki/Finsbury_Park,_London</a> '+
            '(last visited May 25, 2017).</p>'+
            '</div>'+
            '</div>';

    var center = {lat: 51.572382, lng: -0.111187};
    var mapDiv = document.getElementById('main-map');
    var mainMap = new MapWrapper(mapDiv, center, 10);
    mainMap.addMarker(center, contentString);    
    mainMap.addClickEvent();
    var bounceButton = document.querySelector('#button-bounce-markers')
    bounceButton.addEventListener('click', mainMap.bounceMarker.bind(mainMap))
    var istanbulButton = document.querySelector('#take-me-to-istanbul')
    istanbulButton.addEventListener('click', mainMap.goToIstanbul.bind(mainMap))
}


window.addEventListener('load', initialize);