function initMap() {

    const { Map, Marker } = google.maps

    const map = new Map(
        document.getElementById('myMap'),
        {
            zoom: 10,
            center: directions.ironhackBCN.coords,
            styles: mapStyles.electric
        }
    )

    new Marker({
        position: directions.ironhackBCN.coords,
        title: directions.ironhackBCN.title,
        map
    })
}