let map

function initMap() {

    const { Map } = google.maps

    map = new Map(
        document.getElementById('myMap'),
        {
            zoom: 10,
            center: directions.ironhackBCN.coords,
            styles: mapStyles.electric
        }
    )
    getRouteDetails()
}




function getRouteDetails() {

    const { DirectionsService } = google.maps

    const routeDetails = {
        origin: directions.ironhackBCN.coords,
        destination: 'Fabrik Madrid',
        travelMode: 'DRIVING'
    }

    const directionsService = new DirectionsService()

    directionsService.route(
        routeDetails,
        route => {
            printRouteDetails(route)
            drawRoute(route)
        }
    )
}


function drawRoute(route) {

    const { DirectionsRenderer } = google.maps

    const routeDisplay = new DirectionsRenderer()

    routeDisplay.setDirections(route)
    routeDisplay.setMap(map)
}



function printRouteDetails(route) {

    const { summary } = route.routes[0]
    const { duration, steps } = route.routes[0].legs[0]

    let text = `<h3>Trayecto por ${summary} (${duration.text})</h3><hr>`
    steps.forEach(elm => text += `${elm.instructions}<br>`)


    document.querySelector('.routeDetails').innerHTML = text
}