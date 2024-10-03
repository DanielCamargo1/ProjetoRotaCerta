var map;
var coordenadas = []; // Array das coordenadas
var watchId; // Armazena o ID do setInterval

function success(pos) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;

    // Adiciona ao array
    coordenadas.push({ latitude: latitude, longitude: longitude });

    if (map === undefined) {
        map = L.map('map').setView([latitude, longitude], 13);
    } else {
        map.remove();
        map = L.map('map').setView([latitude, longitude], 13);
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('Minha Localização')
        .openPopup();
}

function FinalizarViagem() {
    // Parar o intervalo
    clearInterval(watchId);
    alert("Viagem finalizada. Parando a obtenção da localização.");

    const inputGasolinaFinal = document.getElementById("gasolinaInicial");
    /* pegar o destino final*/

    const markerFinal = L.marker(coordenadas[coordenadas.length - 1])
    markerFinal.addTo(map);
    const polyline = L.polyline(coordenadas, { color: '#F00' })
    polyline.addTo(map)
  
    /* calcullo da media */
}

function error(err) {
    console.log(err);
}

// Obter localização a cada 3 segundos
function iniciarRastreamento() {
    watchId = setInterval(function () {
        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true,
            timeout: 5000
        });
    }, 3000);
}


iniciarRastreamento();
