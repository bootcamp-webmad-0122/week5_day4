let map

function printMap() {

    const { Map } = google.maps

    map = new Map(
        document.getElementById('myMap'),
        {
            zoom: 10,
            center: directions.ironhackBCN.coords,
            styles: mapStyles.electric
        }
    )
}


function getCoords() {

    navigator.geolocation.getCurrentPosition(
        geolocationDetails => centerMap(geolocationDetails),
        errorDetails => console.log('fallo --->', errorDetails)
    )
}


function centerMap(geolocationDetails) {

    const { latitude, longitude } = geolocationDetails.coords
    const position = { lat: latitude, lng: longitude }
    const { Marker } = google.maps

    map.setCenter(position)

    new Marker({ map, position })
}


function initMap() {
    printMap()
    getCoords()
}