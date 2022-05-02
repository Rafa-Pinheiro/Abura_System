window.onload = function() {
    var chamado = 'Avenida Paula Ferreira, 3108, Pirituba, São Paulo, SP';
    var uma = ['Rua Manoel Ribeiro dos Santos,101, Itanhaém, SP', 'Avenida Estados Unidos, 859, Jardim São fernando, Itanhaém SP', 'Rua Oswaldo Cruz, 277, Boqueirão, Santos, SP'];
    var hospital = ['Rua Valter José Alves, 485, Nova Mirim, Praia Grande, SP'];

    L.mapquest.key = 'lYtoHgx2sLGH5pRJqqCgomNI1xQuUJfh'; //objeto chave mapquest

    var markerSize = {
        'sm': [28, 35],
        'md': [35, 44],
        'lg': [42, 53]
    };
    var markerAnchor = {
        'sm': [14, 35],
        'md': [17, 44],
        'lg': [21, 53]
    };
    var markerPopupAnchor = {
        'sm': [1, -35],
        'md': [1, -44],
        'lg': [2, -53]
    };

    var markeracidente = L.icon({
        // https://www.flaticon.com/br/icone-gratis/ligacao-de-emergencia_2991158?term=emergencia&related_id=2991158
        iconUrl: 'img/emergencia.ico',
        iconRetinaUrl: 'img/emergencia.ico',
        iconSize: markerSize.sm,
        iconAnchor: markerAnchor.sm,
        popupAnchor: markerPopupAnchor.sm
            //Link de Crédito imagem - <a href="https://www.flaticon.com/br/icones-gratis/emergencia" title="emergência ícones">Emergência ícones criados por Freepik - Flaticon</a>
    });

    var markerviatura = L.icon({
        //https://www.flaticon.com/br/icone-premium/ambulancia_2991996?term=ambulanci&page=1&position=14&page=1&position=14&related_id=2991996&origin=search
        iconUrl: 'img/ambulancia.ico',
        iconRetinaUrl: 'img/ambulancia.ico',
        iconSize: markerSize.md,
        iconAnchor: markerAnchor.md,
        popupAnchor: markerPopupAnchor.md
            //Link de Crédito imagem - <a href="https://www.flaticon.com/br/icones-gratis/ambulancia" title="ambulância ícones">Ambulância ícones criados por vectorsmarket15 - Flaticon</a>
    });

    var markerhospital = L.icon({
        //https://www.flaticon.com/br/icone-premium/hospital_2866287?term=hospital&page=1&position=2&page=1&position=2&related_id=2866287&origin=search
        iconUrl: 'img/hospital.ico',
        iconRetinaUrl: 'img/hospital.ico',
        iconSize: markerSize.md,
        iconAnchor: markerAnchor.md,
        popupAnchor: markerPopupAnchor.md
            //Link de Crédito imagem - <a href="https://www.flaticon.com/br/icones-gratis/hospital" title="hospital ícones">Hospital ícones criados por Blak1ta - Flaticon</a>
    });
    // Geocode three locations, then call the createMap callback
    L.mapquest.geocoding().geocode([chamado, uma[0], uma[1]], createMap);


    function createMap(error, response) {
        // Initialize the Map
        var map = L.mapquest.map('map', {
            layers: L.mapquest.tileLayer('map'),
            center: [0, 0],
            zoom: 12
        });

        for (let i = 0; i < uma.length; i++) {
            L.mapquest.directions().route({
                start: uma[2],
                end: hospital[0],
                waypoints: [chamado, uma[i]]
            });
        }

        // Generate the feature group containing markers from the geocoded locations
        var featureGroup = generateMarkersFeatureGroup(response);

        // Add markers to the map and zoom to the features
        featureGroup.addTo(map);
        map.fitBounds(featureGroup.getBounds());
    }

    function generateMarkersFeatureGroup(response) {
        var group = [];
        for (var i = 0; i < response.results.length; i++) {
            var location = response.results[i].locations[0];
            var locationLatLng = location.latLng;

            // Create a marker for each location\\
            //    Forma Antiga (Rodolfo)
            var qual = (i == 0) ? markeracidente : markerviatura
            var marker = L.marker(locationLatLng, {
                    icon: qual
                })
                .bindPopup(location.adminArea5 + ', ' + location.adminArea3);

            group.push(marker);
            //    end\\
            // var qual = function() {
            //     switch (response.results[i].location) {
            //         case chamado:
            //             markeracidente;
            //             break;
            //         case viatura:
            //             markerviatura;
            //             break;
            //         case hospital:
            //             markerhospital;
            //             break;
            //         default:
            //             alert("Ocorreu um erroo na definição do endereço no mapa! Por favor, tente novamente.");
            //     };
            // }
            var marker = L.marker(locationLatLng, {
                    icon: qual
                })
                .bindPopup(location.adminArea5 + ', ' + location.adminArea3);

            group.push(marker);
            //end\\
        }
        return L.featureGroup(group);
    };
}



//------------------------------- Gia De Commit terminal/git ---------------------------------------\\

// // Para Abrir novo projeto\\ \\

// git init / git status/ git add . / git commmit -m "mensagem de atualização" / código colado do git!!!

// //Para Atualizar o Projeto\\ \\

// git init / git status/ git add . / git commmit -m "mensagem de atualização" /  git push