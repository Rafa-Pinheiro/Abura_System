window.onload = function() {
    L.mapquest.key = 'lYtoHgx2sLGH5pRJqqCgomNI1xQuUJfh'; //objeto chave mapquest

    // -------------------------------------Variavéis Globais-------------------------------------- \\
    // var chamado = index.js(endereco); //retorno do bd
    // var uma = index.js(viatura); // retorno das localizações das viaturas daquele tipo no bd
    var escolha = document.getElementById('uma').value;
    var returnbd = 0; //Seria o retorno das localizações das viaturas.
    //Generate the feature group containing markers from the geocoded locations
    var featureGroup = generateMarkersFeatureGroup(response);

    // Create a marker for each location          

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
        iconUrl: 'https://www.flaticon.com/br/icone-gratis/ligacao-de-emergencia_2991158?term=emergencia&related_id=2991158',
        iconRetinaUrl: 'https://www.flaticon.com/br/icone-gratis/ligacao-de-emergencia_2991158?term=emergencia&related_id=2991158',
        iconSize: markerSize.sm,
        iconAnchor: markerAnchor.sm,
        popupAnchor: markerPopupAnchor.sm
    });

    var markerviatura = L.icon({
        //https://www.flaticon.com/br/icone-premium/ambulancia_2991996?term=ambulanci&page=1&position=14&page=1&position=14&related_id=2991996&origin=search
        iconUrl: 'https://www.flaticon.com/br/icone-premium/ambulancia_2991996?term=ambulanci&page=1&position=14&page=1&position=14&related_id=2991996&origin=search',
        iconRetinaUrl: 'https://www.flaticon.com/br/icone-premium/ambulancia_2991996?term=ambulanci&page=1&position=14&page=1&position=14&related_id=2991996&origin=search',
        iconSize: markerSize.md,
        iconAnchor: markerAnchor.md,
        popupAnchor: markerPopupAnchor.md
    });
    // -----------------------------------Fim Variavéis Globais------------------------------------ \\

    // Disposição das ambulâncias no mapa
    // uma.AddEventListener(onchange, function(escolha) {
    //     switch (escolha) {
    //         case 'A':
    //             for (var i = 0; i < returnbd.length; i++) {
    //                 buscarLocalizacao(returnbd[i]);
    //                 featureGroup;
    //             }

    //             break;
    //         case 'B':
    //             break;
    //         case 'C':
    //             break;
    //         case 'D':
    //             break;
    //         default:
    //             alert('Selecione o tipo de a,bulância para o caso.');
    //             uma.focus();
    //             break;
    //     }
    // });
    // createMap();

    // //Buscando Localização e criando mapa
    // function buscarLocalizacao(returnbd) {
    //     L.mapquest.geocoding().geocode([Itanhaém, BR], createMap);
    // }

    // Inicializando o Mapa e atribuindo à div 'map'
    function createMap(error, response) {
        var map = L.mapquest.map('map', {
            layers: L.mapquest.tileLayer('map'),
            center: [0, 0],
            zoom: 12
        });

        // Add markers to the map and zoom to the features
        featureGroup.addTo(map);
        map.fitBounds(featureGroup.getBounds())

        function generateMarkersFeatureGroup(response) {
            var group = [];
            for (var i = 0; i < response.results.length; i++) {
                var location = response.results[i].locations[0];
                var locationLatLng = location.latLng;
                // console.log(response.results[i].locations[0])
                var qual = (i == 0) ? markeracidente : markerviatura
                var marker = L.marker(locationLatLng, {
                        icon: qual
                    })
                    .bindPopup(location.adminArea5 + ', ' + location.adminArea3)
                group.push(marker);
            }

            /* rota entre endereços*/
            // L.mapquest.directions().setLayerOptions({
            //   startMarker: {
            //     icon: 'circle',
            //   },
            //   endMarker: {
            //     icon: 'circle',
            //     iconOptions: {
            //       size: 'sm',
            //       primaryColor: '#e9304f',
            //       secondaryColor: '#e9304f',
            //       symbol: 'B'
            //     }
            //   },
            //   routeRibbon: {
            //     color: "#2aa6ce",
            //     opacity: 1.0,
            //     showTraffic: true
            //   },
            //   alternateRouteRibbon: {
            //     opacity: 1.0
            //   },
            // });
            L.mapquest.directions().route({
                start: uma,
                end: chamado
            })
        }
        return L.featureGroup(group);
    }
    //https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-directions-route/ - rota documentação
    // https://developer.mapquest.com/documentation/directions-api/route/post/ - Atribultos da rota


    // }


    /*
     window.onload = function() {
      L.mapquest.key = 'lYtoHgx2sLGH5pRJqqCgomNI1xQuUJfh';

      L.mapquest.geocoding().geocode('Boston, MA', createMap);

      function createMap(error, response) {
        var location = response.results[0].locations[0];
        var latLng = location.displayLatLng;
        var map = L.mapquest.map('map', {
          center: latLng,
          layers: L.mapquest.tileLayer('map'),
          zoom: 14
        });

        var customIcon = L.mapquest.icons.circle({
          primaryColor: '#3b5998'
        });

        L.marker(latLng, { icon: customIcon }).addTo(map);
      }
    }*/

    /* rota entre endereços*/

    // window.onload = function() {
    //   L.mapquest.key = 'lYtoHgx2sLGH5pRJqqCgomNI1xQuUJfh';

    //   var map = L.mapquest.map('map2', {
    //     center: [-24.1765857,-46.7852608],
    //     layers: L.mapquest.tileLayer('map'),
    //     zoom: 18
    //   });


    //   L.mapquest.directions().route({
    //     start: 'Rua Oscar Simões de Carvalho, 415, Itanhaém',
    //     end: 'Avenida São Paulo, 1901, Mongaguá'
    //   });
}