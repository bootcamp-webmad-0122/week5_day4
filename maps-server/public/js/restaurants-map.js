let map

function initMap() {
    drawMap()
    getRestaurants()
}

function drawMap() {

    const { Map } = google.maps

    map = new Map(
        document.getElementById('myMap'),
        {
            zoom: 10,
            center: { lat: 40.392499, lng: -3.698214 },
            styles: mapStyles.aubergine
        }
    )
}

function getRestaurants() {

    axios.get('/api/restaurants')
        .then(response => printRestaurantsMarkers(response.data))
        .catch(err => console.log(err))
}

function printRestaurantsMarkers(restaurants) {

    const { Marker } = google.maps

    restaurants.forEach(elm => {

        new Marker({
            map,
            position: {
                lat: elm.location.coordinates[0],
                lng: elm.location.coordinates[1]
            },
            title: elm.name
        })
    })
}