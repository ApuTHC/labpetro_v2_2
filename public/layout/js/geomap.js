/////////////////////////////////////////Variables
var map;
var mapaBase;
var mapaBaseLabels;
var openStreet;
var source;

var t=0;
var t1=0;


var capaMapageo;
var capaFallas;
var capaPliegues;
var capaVolcanes;

var caparutaMedPto;
var caparutaMedCago;

var geocolActive = 0;
var fallasActive = 0;
var plieguesActive = 0;
var volcanesActive = 0;

var rutaMedPtoActive = 0;
var rutaMedCagoActive = 0;

var transgeocol = 0.5;
var transfallas = 0.5;
var transpliegues = 0.5;

var transrutaMedPto = 0.5;
var transrutaMedCago = 0.5;

const fileses = []
var aux = 0;

var markerGroupMPT;
var markerGroupMCG;

var volcanesIcon = new L.Icon({
  iconUrl: 'layout/styles/images/icon-volcan.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50]
});

var aflorIcon = new L.Icon({
  iconUrl: 'layout/styles/images/icon-aflor.png',
  shadowUrl: 'layout/styles/images/marker-shadow.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50]
});

///////////////////////////////////////////Funcion PPAL

$(document).ready(function () {

  map = L.map('map').setView([6.274880, -75.591174], 12);
  mapaBase = L.esri.basemapLayer('Imagery').addTo(map);
  mapaBaseLabels = L.esri.basemapLayer('ImageryLabels');
  map.addLayer(mapaBaseLabels);
  openStreet = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
  });



  if (aux == 0) {

    var MySource = L.WMS.Source.extend({
      'showFeatureInfo': function (latlng, info) {
        if (!this._map) {
          return;
        }
        var esto = info.split("\n").join("");
        esto = esto.split("</th>").join("");
        esto = esto.split("<tr>").join("");
        esto = esto.split("</tr>").join("");
        esto = esto.split("</td>").join("");
        var separadores = ['<th>', '<td>'];
        var array = esto.split(new RegExp(separadores.join('|'), 'g'));
        var mensaje = "Vacio";
        var y = latlng + "";
        y = y.replace("LatLng", "");
        y = y.replace("(", "");
        y = y.replace(")", "");
        if (array.length == 1) {
          mensaje = "<b>Latitud y Longitud:</b> [" + y + "] ";
        }

        if (array.length == 21) {
          mensaje = "<b><big>Unidad Cronoestratigráfica</big></b> <br>" +
            "<b>Símbolo: </b>" + array[13] + "<br>" +
            "<b>Litología: </b>" + array[14] + "<br>" +
            "<b>Edad: </b>" + array[15] + "<br>";
          if (array[16].length > 7) {
            mensaje = mensaje + "<b>Nombre Común: </b>" + array[16] + "<br>";
          }
          if (array[17].length > 7) {
            mensaje = mensaje + "<b>Comentarios: </b>" + array[17] + "<br>";
          }
          mensaje = mensaje + "<b>Latitud y Longitud:</b> [" + y + "] ";
        }

        if (array.length == 15) {
          if (array[4].length == 16) {
            mensaje = "<b><big>Falla</big></b> <br>" +
              "<b>Tipo: </b>" + array[10] + "<br>";
          }
          if (array[4].length == 17) {
            mensaje = "<b><big>Pliegue</big></b> <br>" +
              "<b>Tipo: </b>" + array[10] + "<br>";
          }
          if (array[11].length > 7) {
            mensaje = mensaje + "<b>Nombre Común: </b>" + array[11] + "<br>";
          }
          if (array[12].length > 7) {
            mensaje = mensaje + "<b>Comentarios: </b>" + array[12] + "<br>";
          }
        }

        if (array.length == 29) {
          mensaje = "<b><big>Pliegue</big></b> <br>" +
            "<b>Tipo: </b>" + array[10] + "<br>";
          if (array[11].length > 7) {
            mensaje = mensaje + "<b>Nombre Común: </b>" + array[11] + "<br>";
          }
          if (array[12].length > 7) {
            mensaje = mensaje + "<b>Comentarios: </b>" + array[12] + "<br>";
          }

          mensaje = mensaje + "<b><big>Falla</big></b> <br>" +
            "<b>Tipo: </b>" + array[24] + "<br>";
          if (array[25].length > 7) {
            mensaje = mensaje + "<b>Nombre Común: </b>" + array[25] + "<br>";
          }
          if (array[26].length > 7) {
            mensaje = mensaje + "<b>Comentarios: </b>" + array[26] + "<br>";
          }
        }

        if (array.length == 35) {
          mensaje = "<b><big>Unidad Cronoestratigráfica</big></b> <br>" +
            "<b>Símbolo: </b>" + array[13] + "<br>" +
            "<b>Litología: </b>" + array[14] + "<br>" +
            "<b>Edad: </b>" + array[15] + "<br>";
          if (array[16].length > 7) {
            mensaje = mensaje + "<b>Nombre Común: </b>" + array[16] + "<br>";
          }
          if (array[17].length > 7) {
            mensaje = mensaje + "<b>Comentarios: </b>" + array[17] + "<br>";
          }
          mensaje = mensaje + "<b>Latitud y Longitud:</b> [" + y + "] <br>";

          if (array[24].length == 16) {
            mensaje = mensaje + "<b><big>Falla</big></b> <br>" +
              "<b>Tipo: </b>" + array[30] + "<br>";
          }
          if (array[24].length == 17) {
            mensaje = mensaje + "<b><big>Pliegue</big></b> <br>" +
              "<b>Tipo: </b>" + array[30] + "<br>";
          }
          if (array[31].length > 7) {
            mensaje = mensaje + "<b>Nombre Común: </b>" + array[31] + "<br>";
          }
          if (array[32].length > 7) {
            mensaje = mensaje + "<b>Comentarios: </b>" + array[32] + "<br>";
          }
        }

        if (array.length == 49) {
          mensaje = "<b><big>Unidad Cronoestratigráfica</big></b> <br>" +
            "<b>Símbolo: </b>" + array[13] + "<br>" +
            "<b>Litología: </b>" + array[14] + "<br>" +
            "<b>Edad: </b>" + array[15] + "<br>";
          if (array[16].length > 7) {
            mensaje = mensaje + "<b>Nombre Común: </b>" + array[16] + "<br>";
          }
          if (array[17].length > 7) {
            mensaje = mensaje + "<b>Comentarios: </b>" + array[17] + "<br>";
          }
          mensaje = mensaje + "<b>Latitud y Longitud:</b> [" + y + "] <br>";

          mensaje = mensaje + "<b><big>Pliegue</big></b> <br>" +
            "<b>Tipo: </b>" + array[30] + "<br>";
          if (array[31].length > 7) {
            mensaje = mensaje + "<b>Nombre Común: </b>" + array[31] + "<br>";
          }
          if (array[32].length > 7) {
            mensaje = mensaje + "<b>Comentarios: </b>" + array[32] + "<br>";
          }

          mensaje = mensaje + "<b><big>Falla</big></b> <br>" +
            "<b>Tipo: </b>" + array[44] + "<br>";
          if (array[45].length > 7) {
            mensaje = mensaje + "<b>Nombre Común: </b>" + array[45] + "<br>";
          }
          if (array[46].length > 7) {
            mensaje = mensaje + "<b>Comentarios: </b>" + array[46] + "<br>";
          }
        }

        this._map.openPopup(mensaje, latlng);

      }
    });

    source = new MySource("https://srvags.sgc.gov.co/arcgis/services/Atlas_Geologico_2015/Atlas_Geologico_Colombiano_2015/MapServer/WMSServer?", {
      opacity: 0.5,
      format: 'image/png',
      transparent: true,
      version: '1.3.0', //wms version (ver get capabilities)
      info_format: "text/html",
      attribution: "Servicio Geológico Colombiano"
    });
    capaMapageo = source.getLayer("0");
    capaPliegues = source.getLayer("1");
    capaFallas = source.getLayer("2");
    aux = 1;

  }

  cargarmapa();

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  var slidercol = $("#transpGeocol")[0];
  var outputcol = $("#valTranspGeocol")[0];
  outputcol.innerHTML = slidercol.value;
  slidercol.oninput = function () {
    outputcol.innerHTML = this.value;
    transgeocol = (100 - parseInt(this.value)) / 100;
    if (capaMapageo != null && geocolActive == 2) {
      capaMapageo.setOpacity(transgeocol);
    }
  }

  var sliderrutaMedPto = $("#transprutaMedPto")[0];
  var outputrutaMedPto = $("#valTransprutaMedPto")[0];
  outputrutaMedPto.innerHTML = sliderrutaMedPto.value;
  sliderrutaMedPto.oninput = function () {
    outputrutaMedPto.innerHTML = this.value;
    transrutaMedPto = (100 - parseInt(this.value)) / 100;
    if (layerrutaMedPto != null && rutaMedPtoActive == 2) {
      layerrutaMedPto.setStyle({
        opacity: transrutaMedPto
      });
    }
  }

  var sliderrutaMedCago = $("#transprutaMedCago")[0];
  var outputrutaMedCago = $("#valTransprutaMedCago")[0];
  outputrutaMedCago.innerHTML = sliderrutaMedCago.value;
  sliderrutaMedCago.oninput = function () {
    outputrutaMedCago.innerHTML = this.value;
    transrutaMedCago = (100 - parseInt(this.value)) / 100;
    if (layerrutaMedCago != null && rutaMedCagoActive == 2) {
      layerrutaMedCago.setStyle({
        opacity: transrutaMedCago
      });
    }
  }

  var sliderfallas = $("#transpFallas")[0];
  var outputfallas = $("#valTranspFallas")[0];
  outputfallas.innerHTML = sliderfallas.value;
  sliderfallas.oninput = function () {
    outputfallas.innerHTML = this.value;
    transfallas = (100 - parseInt(this.value)) / 100;
    if (capaFallas != null && fallasActive == 2) {
      capaFallas.setOpacity(transfallas);
    }
  }

  var sliderpliegues = $("#transpPliegues")[0];
  var outputpliegues = $("#valTranspPliegues")[0];
  outputpliegues.innerHTML = sliderpliegues.value;
  sliderpliegues.oninput = function () {
    outputpliegues.innerHTML = this.value;
    transpliegues = (100 - parseInt(this.value)) / 100;
    if (capaPliegues != null && plieguesActive == 2) {
      capaPliegues.setOpacity(transpliegues);
    }
  }

});

//////////////////////////////////////////////////////////Funciones para cargar rutas
/////////////Ruta Medellin-Puerto Triunfo

$("#btnrutaMedPto").click(function () {

  if (rutaMedPtoActive == 0) {
    var scrip = document.createElement("script");
    scrip.src = "layout/shapefiles/rutaMedPto.js";
    var contenedor = document.getElementById("scri");
    contenedor.appendChild(scrip);
    rutaMedPtoActive = 2;
    setTimeout(cargarrutaMedPto, 500);
  } else if (rutaMedPtoActive == 1) {
    cargarrutaMedPto();
    rutaMedPtoActive = 2;
  } else if (rutaMedPtoActive == 2) {
    map.removeLayer(layerrutaMedPto);
    rutaMedPtoActive = 1;
  }
});

function cargarrutaMedPto() {

  layerrutaMedPto = L.geoJson(rutaMedPto, {
    style: stylerutaMedPto,
    onEachFeature: popuprutaMedPto
  }).addTo(map);
}

function popuprutaMedPto(feature, layer) {

  layer.bindPopup("Ruta Medellín-Puerto Triunfo");
}

function stylerutaMedPto(feature) {
  return {
    weight: 3,
    opacity: transrutaMedPto,
    color: '#FF0000',
  };
}

/////////////Ruta Medellin-Cañas Gordas

$("#btnrutaMedCago").click(function () {

  if (rutaMedCagoActive == 0) {
    var scrip = document.createElement("script");
    scrip.src = "layout/shapefiles/rutaMedCago.js";
    var contenedor = document.getElementById("scri");
    contenedor.appendChild(scrip);
    rutaMedCagoActive = 2;
    setTimeout(cargarrutaMedCago, 500);
  } else if (rutaMedCagoActive == 1) {
    cargarrutaMedCago();
    rutaMedCagoActive = 2;
  } else if (rutaMedCagoActive == 2) {
    map.removeLayer(layerrutaMedCago);
    rutaMedCagoActive = 1;
  }
});

function cargarrutaMedCago() {

  layerrutaMedCago = L.geoJson(rutaMedCago, {
    style: stylerutaMedCago,
    onEachFeature: popuprutaMedCago
  }).addTo(map);
}

function popuprutaMedCago(feature, layer) {

  layer.bindPopup("Ruta Medellín-Cañas Gordas");
}

function stylerutaMedCago(feature) {
  return {
    weight: 3,
    opacity: transrutaMedCago,
    color: '#FF0000',
  };
}

////////////////////////////////////////////Funciones para Cargar los Marcadores

function cargarmapa() {

  markerGroupMCG = L.layerGroup().addTo(map);
  markerGroupMPT = L.layerGroup().addTo(map);

  for (var i = 0; i < marca.length; i++) {
    var mark1 = marca[i];
    var x = mark1.pos.split(", ");
    var y = parseFloat(x[0]);
    var y1 = parseFloat(x[1]);

    if (i >= 0 && i < 9) {
      L.marker([y, y1], {
          icon: aflorIcon
        }).addTo(markerGroupMPT)
        .bindPopup(mark1.cod + " : " + mark1.nombre + "<br>" + mark1.pos).on('click', toggleBounce);
    }

    if (i >= 9) {
      L.marker([y, y1], {
          icon: aflorIcon
        }).addTo(markerGroupMCG)
        .bindPopup(mark1.cod + " : " + mark1.nombre + "<br>" + mark1.pos).on('click', toggleBounce);
    }
  }

  $("#MarkrutaMedCago").prop("checked", true);
  $("#MarkrutaMedPto").prop("checked", true);

}

function borrarMarket(id) {

  if ($("#" + id).prop('checked')) {
    if (id == "MarkrutaMedCago") {
      markerGroupMCG.addTo(map);
    }

    if (id == "MarkrutaMedPto") {
      markerGroupMPT.addTo(map);
    }

  } else {
    if (id == "MarkrutaMedCago") {
      map.removeLayer(markerGroupMCG);
    }

    if (id == "MarkrutaMedPto") {
      map.removeLayer(markerGroupMPT);
    }
  }
}

////////////////////////////////////////////Funciones para Cargar el Mapa Base 

function setBasemap(basemap) {

  var basemap = basemaps.value;

  if (mapaBase) {
    map.removeLayer(mapaBase);
  }

  if (basemap != 'Street') {
    mapaBase = L.esri.basemapLayer(basemap);
  }

  if (basemap == 'Street') {
    mapaBase = openStreet;
  }

  map.addLayer(mapaBase);

  if (mapaBaseLabels) {
    map.removeLayer(mapaBaseLabels);
  }

  if (basemap == 'ShadedRelief' ||
    basemap == 'Gray' ||
    basemap == 'DarkGray' ||
    basemap == 'Imagery'
  ) {
    mapaBaseLabels = L.esri.basemapLayer(basemap + 'Labels');
    map.addLayer(mapaBaseLabels);
  }
}

/////////////////////////////////////////////Funciones de las Barras Laterales

function toggleBounce(e) {

    var coo = this.getLatLng();
    var coor = coo.lat + ", " + coo.lng;
    for (var i = 0; i < marca.length; i++) {
      if (marca[i].pos == coor) {
        t1=marca[i];
      }
    } 
    if(t==0){
      setTimeout(recarga(), 100);
    }
    if (t1==t) {
      setTimeout(recarga(), 100);
    }else{
      t=t1;
    }
   
    cargarlado();

   
}

function cargarlado() {
  var mark2 = t1;
  var imas;
  cargaSidebar = 0;
  document.getElementById('titulo').innerHTML = mark2.nombre;
  document.getElementById('descriaflor').innerHTML = mark2.descrigene;
  document.getElementById('descrimacro').innerHTML = mark2.descrimacro;
  document.getElementById('descrimicro').innerHTML = mark2.descrimicro;

  imas = document.getElementById("aflor1");
  imas.src = 'images/geomap/' + mark2.cod + '/aflor.jpg';

  imas = document.getElementById("aflor2");
  imas.src = 'images/geomap/' + mark2.cod + '/aflorzoom.jpg';

  imas = document.getElementById("macro1");
  imas.src = 'images/geomap/' + mark2.cod + '/macro.jpg';

  imas = document.getElementById("macro2");
  imas.src = 'images/geomap/' + mark2.cod + '/macrozoom.jpg';

  imas = document.getElementById("micronll");
  imas.src = 'images/geomap/' + mark2.cod + '/micronll.jpg';

  imas = document.getElementById("micronx");
  imas.src = 'images/geomap/' + mark2.cod + '/micronx.jpg';
  
}

function recarga() {

  document.getElementById('sidebar').classList.toggle('active');
}

$("#cerrar").click(function () {
  t=0;
  document.getElementById('sidebar').classList.toggle('active');
});

$("#abrir2").click(function () {

  document.getElementById('sidebar2').classList.toggle('active');
});

$("#cerrar2").click(function () {

  document.getElementById('sidebar2').classList.toggle('active');
});

////////////////////////////////////////////Funciones para Cargar Capas Mapas

$("#btnGeocol").click(function () {

  if (geocolActive == 0) {
    geocolActive = 2;
    setTimeout(cargarGeocol, 10);
  } else if (geocolActive == 1) {
    cargarGeocol();
    geocolActive = 2;
  } else if (geocolActive == 2) {
    map.removeLayer(capaMapageo);
    geocolActive = 1;
  }
});

$("#btnFallas").click(function () {

  if (fallasActive == 0) {
    fallasActive = 2;
    setTimeout(cargarFallas, 10);
  } else if (fallasActive == 1) {
    cargarFallas();
    fallasActive = 2;
  } else if (fallasActive == 2) {
    map.removeLayer(capaFallas);
    fallasActive = 1;
  }
});

$("#btnPliegues").click(function () {

  if (plieguesActive == 0) {
    plieguesActive = 2;
    setTimeout(cargarPliegues, 10);
  } else if (plieguesActive == 1) {
    cargarPliegues();
    plieguesActive = 2;
  } else if (plieguesActive == 2) {
    map.removeLayer(capaPliegues);
    plieguesActive = 1;
  }
});

$("#btnVolcanes").click(function () {

  if (volcanesActive == 0) {
    var scrip = document.createElement("script");
    scrip.src = "layout/shapefiles/volcanes.js";
    var contenedor = document.getElementById("scri");
    contenedor.appendChild(scrip);
    volcanesActive = 2;
    setTimeout(cargarVolcanes, 500);
  } else if (volcanesActive == 1) {
    cargarVolcanes();
    volcanesActive = 2;
  } else if (volcanesActive == 2) {
    map.removeLayer(capaVolcanes);
    volcanesActive = 1;
  }
});

function handleFileSelect(evt) {

  var files = evt.target.files; // FileList object
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
      f.size, ' bytes, last modified: ',
      f.lastModifiedDate.toLocaleDateString(), '</li>');
  }
  document.getElementById("archi").style.maxHeight = "0px";
  document.getElementById("archi").style.maxHeight = "378px";
  document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';

  for (var i = 0, f; f = files[i]; i++) {

    var reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e) {

        fetch(e.target.result)
          .then(res => res.text())
          .then(kmltext => {
            // Create new kml overlay
            const parser = new DOMParser();
            const kml = parser.parseFromString(kmltext, 'text/xml');
            const track = new L.KML(kml);
            map.addLayer(track);
            // Adjust map to show the kml
            const bounds = track.getBounds();
            map.fitBounds(bounds);
          });
      };
    })(f);
    reader.readAsDataURL(f);

  }
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);

function cargarGeocol() {
  capaMapageo.addTo(map);
  capaMapageo.setOpacity(transgeocol);
}

function cargarFallas() {
  capaFallas.addTo(map);
  capaFallas.setOpacity(transfallas);
}

function cargarPliegues() {
  capaPliegues.addTo(map);
  capaPliegues.setOpacity(transpliegues);
}

function cargarVolcanes() {

  capaVolcanes = L.geoJson(volcanes, {
    pointToLayer: styleVolcanes,
    onEachFeature: popupVolcanes
  }).addTo(map);
}

function styleVolcanes(feature, latlng) {

  return L.marker(latlng, {
    icon: volcanesIcon
  })
}

function popupVolcanes(feature, layer) {

  if (feature.properties && feature.properties.OBJECTID) {
    layer.bindPopup(feature.properties.OBJECTID + "<br>" + feature.properties.NombreVolcan +
      "<br>" + feature.properties.AlturaSobreNivelMar + " m.s.n.m." + "<br>" + feature.properties.Latitud +
      "<br>" + feature.properties.Longitud + "<br>" + feature.properties.Comentarios);
  }
}