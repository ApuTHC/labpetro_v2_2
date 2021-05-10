///Variables

var colores = ["Incoloro", "Gris", "Rojo", "Amarillo", "Verde", "Azul", "Cafe"],
colores_n = ["Incoloro", "Gris", "Rojo", "Amarillo", "Verde", "Azul y Violeta", "Café"],
opciones = ["intro", "repaso", "guia", "comenzar"],
formaAzul = ["TabularAz", "LaminasAz", "OtroAz"],
formaAzul_n = ["Tabular", "Prismas Largos", "Otro"],
formaVerde = ["PrismasLV", "PrismasCV", "LaminasAV", "OtroV"],
formaVerde_n = ["Prismas Largos", "Prismas Cortos", "Láminas", "Otro"],
formaAmar = ["PrismasCAma", "LaminasAAma", "RombosAma", "OtroAma"],
formaAmar_n = ["Prismas Cortos", "Láminas ", "Rombos", "Otro"],
formaCafe2 = ["PrismasLCa2", "PrismasCCa2", "LaminasACa2", "RombosCa2"],
formaCafe2_n = ["Prismas Largos", "Prismas Cortos", "Láminas ", "Rombos"],
formaCafe = ["PrismasCCa1", "RombosCa1", "OtroCa1"],
formaCafe_n = ["Prismas Cortos", "Rombos", "Otro"],
formaGris1 = ["PrimerO", "SegundoO", "TercerO", "Anomalo"],
formaGris1_n = ["Primer Orden", "Segundo Orden", "Tercer Orden", "Anómalo"],
formaGris2 = ["PrismasLGr", "HexagonalGr", "RombosAma", "OtroGr"],
formaGris2_n = ["Prismas Largos", "Hexagonal", "Rombos", "Otro"],
formaIncoloro1 = ["PrismasLIn1", "OtroIn1"],
formaIncoloro1_n = ["Prismas Largos", "Otro"],
formaIncoloro2 = ["LaminasAIn2", "OtroIn2"],
formaIncoloro2_n = ["Láminas", "Otro"],
formaIncoloro3 = ["PrismasLIn3", "RombosIn3", "OtroIn3"],
formaIncoloro3_n = ["Prismas Largos", "Rombos", "Otro"];

$(document).ready(function () {

    $("#resp").hide();
    $("#resp").width("0%");
    $("#primero").width("100%");
    Bienvenidos();

});

function Bienvenidos() {

    $("#resp").hide();
    $("#resp").width("0%");
    if ($("#Pregu").length) {
        $("#Pregu").remove();
    }

    $("#conte a").attr("class", "but");
    $("#intro").attr("class", "but active");

    if ($("#segundo").length) {
        $("#segundo").remove();
    }
    $("#primero").append($('<h1></h1>').attr("id", "Pregu").attr("class", "texti"));
    $('#Pregu').html("<p>Bienvenido al identificador de minerales bajo el microscopio petrográfico.</p>" +
        "<p>Esta es una herramienta que te ayudará a reconocer los minerales en sección delgada a partir de sus propiedades ópticas y morfométricas.</p>" +
        "<p>La herramienta es una ayuda o una guía, recuerda que tu eres el que debe determinar el mineral correcto bajo tu criterio.</p>" +
        "<p>Recuerda: Los minerales pueden ser muy variables en sus propiedades, este identificador NO asegura que elijas el mineral correcto, visitar frecuentemente el laboratorio y preguntar a los monitores es la mejor forma de mejorar tu criterio.</p>"
    );
    $("#Respuesta").html("");
}

function Funcionamiento() {

    $("#resp").hide();
    $("#resp").width("0%");
    if ($("#Pregu").length) {
        $("#Pregu").remove();
    }

    $("#conte a").attr("class", "but");
    $("#guia").attr("class", "but active");

    if ($("#segundo").length) {
        $("#segundo").remove();
    }
    $("#primero").append($('<h1></h1>').attr("id", "Pregu").attr("class", "texti"));
    $("#Pregu").html("Seleccione las propiedades del mineral observado. <br>" +
        "En la parte inferior aparecerán los resultados a medida que se elijan las propiedades. <br>" +
        "Estos resultados se filtrarán cada vez más a medida que se avance.<br>" +
        "Debe recordar que estos minerales son los más probables, está en su criterio elegir.<br>" +
        "Debido a la variabilidad de los minerales NO base todos sus criterios en este identificador.<br>"
    );
    $("#Respuesta").html("");
}

function Repaso() {

    $("#resp").hide();
    $("#resp").width("0%");
    if ($("#Pregu").length) {
        $("#Pregu").remove();
    }

    $("#conte a").attr("class", "but");
    $("#repaso").attr("class", "but active");

    if ($("#segundo").length) {
        $("#segundo").remove();
    }

    $("#Respuesta").html("");
    $("#primero").append($('<h1></h1>').attr("id", "Pregu").attr("class", "texti"));
    $("#Pregu").html("<p>Antes de comenzar repasemos las propiedades ópticas y morfométricas.<br></p>" +
        "<p><h1>Propiedades ópticas:</h1> Color y pleocroismo; relieve; color de interferencia; ángulo de extinción; elongación; figura de interferencia.<br></p>" +
        "<p><h1>Propiedades morfométricas:</h1> Grado de cristalinidad; forma; hábito; clivaje y fractura; inclusiones y alteraciones; maclas y texturas</p>"
    );
}

function Color() {
    $("#resp").show();
    $("#resp").width("100%");

    $("#conte a").attr("class", "but");
    $("#comenzar").attr("class", "but active");
    if ($("#segundo").length) {
        $("#segundo").remove();
    }
    $("#Pregu").remove();
    var divi = $('<div></div>').attr("class", "conte").attr("id", "segundo");
    divi.append($('<h1></h1>').attr("id", "Pregu").attr("class", "texti").html("¿Cuál es el Color del Mineral?"));
    for (let index = 0; index < colores.length; index++) {
        var ases = $('<div></div>').attr("class", "but1")
            .attr("onClick", "Tree('" + colores[index] + "')")
            .css('background-image', "url('images/identificador/" + colores[index] + ".jpg')");
        ases.append($('<div></div>').attr("class", "but2")
            .attr("id", "" + colores[index]).html("<br>" + colores_n[index])
        );
        divi.append(ases);
    }
    $("#primero").append(divi);
    $("#Respuesta").html("Por Favor Seleccione Alguna Opción");
}

function Tree(color) {
    if ($("#tercero").length) {
        $("#tercero").remove();
    }
    if ($("#Pregunta").length) {
        $("#Pregunta").remove();
    }

    $("#segundo .but2").attr("class", "but2");
    $("#" + color).attr("class", "but2 active");


    if (color == "Incoloro") {

        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Granate, Fluorita, Analcima, Halita, Silvita, Ópalo, Vídrio Volcánico, Pumpellyita, Epidota, Fogopita</p>" +
            "<p>Turmalina, Andalucita, Calcita, Cordierita, Apatito, Antofilita, Esfena, Dolomita, Zoisita, Clinozoisita</p>" +
            "<p>Cuarzo, Talco, Feldespatos, Moscovita, Circón, Olivino, Sillimanita, Tremolita, Leucita, Clorita</p>");
        $("#segundo").append($('<h1></h1>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿El Mineral es Isótropo?"));
        Isotrop("IncoloroBranch1");

    } else if (color == "Gris") {

        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Granate, Fluorita, Analcima, Halita, Silvita, Ópalo, Vídrio Volcánico, Pumpellyita, Epidota, Fogopita</p>" +
            "<p>Turmalina, Andalucita, Calcita, Cordierita, Apatito, Antofilita, Esfena, Dolomita, Zoisita, Clinozoisita</p>" +
            "<p>Cuarzo, Talco, Feldespatos, Moscovita, Circón, Olivino, Sillimanita, Tremolita, Leucita, Clorita</p>");
        $("#segundo").append($('<h1></h1>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿El Mineral es Isótropo?"));
        Isotrop("GrisBranch1");

    } else if (color == "Azul") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Cordierita, Glaucofana, Cianita, Celestina, Turmalina, Corindón (Zafiro)</p>");
        $("#segundo").append($('<h1></h1>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "tercero");
        for (let index = 0; index < formaAzul.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .attr("onClick", "AzulVioletaBranch('" + formaAzul[index] + "')")
                .css('background-image', "url('images/identificador/" + formaAzul[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2")
                .attr("id", "" + formaAzul[index]).html("<br>" + formaAzul_n[index])
            );
            divi.append(ases);
        }
        $("#segundo").append(divi);


    } else if (color == "Cafe") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena, Etaurolita, Sillimanita, Ortopiroxeno, Hornblenda, Antofilita, Aegirina, Biotita, Circón, Ópalo, Vídrio Volcánico</p>" +
            "<p>Rutilo, Calcedonia, Casiterita, Dolomita, Siderita, Turmalina, Arcillas, Flogopita, Clorita, Augita, Dravita, Olivino</p>");
        $("#segundo").append($('<h1></h1>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿El Mineral es Isótropo?"));
        Isotrop("CafeBranch");

    } else if (color == "Verde") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Clorita, Serpentina, Biotita, Glauconita, Turmalina, Casiterita, Actinolita, Aegirina, Epidota</p>" +
            "<p>Hornblenda, Pumpellyita, Ortopiroxeno, Anfíbol, Onfacita, Fluorita</p>");
        $("#segundo").append($('<h1></h1>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿El Mineral es Isótropo?"));
        Isotrop("VerdeBranch");

    } else if (color == "Rojo") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Vídrio Volcánico, Rodocrosita, Turmalina, Casiterita, Rutilo, Ortopiroxeno, Rodonita, Granate</p>");
        $("#segundo").append($('<h1></h1>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿El Mineral es Isótropo?"));
        Isotrop("RojoBranch");

    } else if (color == "Amarillo") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Biotita, Turmalina, Casiterita, Flogopita, Olivino, Pumpellyita, Estaurolita, Esfena</p>");
        $("#segundo").append($('<h1></h1>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿El Mineral es Pleocroico?"));
        var divi = $('<div></div>').attr("class", "conte").attr("id", "tercero");

        var ases = $('<div></div>').attr("class", "but1")
            .attr("onClick", "AmarilloBranch('Si')")
            .css('background-image', "url('images/identificador/pleo.jpg')");
        ases.append($('<div></div>').attr("class", "but2")
            .attr("id", "Si").html("<br>Si")
        );
        divi.append(ases);

        var ases = $('<div></div>').attr("class", "but1")
            .attr("onClick", "AmarilloBranch('No')")
            .css('background-image', "url('images/identificador/nopleo.jpg')");
        ases.append($('<div></div>').attr("class", "but2")
            .attr("id", "No").html("<br>No")
        );
        divi.append(ases);
        $("#segundo").append(divi);
    }
}

function Isotrop(functions) {
    var divi = $('<div></div>').attr("class", "conte").attr("id", "tercero");

    var ases = $('<div></div>').attr("class", "but1")
        .attr("onClick", functions + "('Si')")
        .css('background-image', "url('images/identificador/isotropo.jpg')");
    ases.append($('<div></div>').attr("class", "but2")
        .attr("id", "Si").html("<br>Si")
    );
    divi.append(ases);

    var ases = $('<div></div>').attr("class", "but1")
        .attr("onClick", functions + "('No')")
        .css('background-image', "url('images/identificador/noisotropo.jpg')");
    ases.append($('<div></div>').attr("class", "but2")
        .attr("id", "No").html("<br>No")
    );
    divi.append(ases);
    $("#segundo").append(divi);
}

function Clivaje(functions) {

    if ($("#cuarto").length) {
        $("#cuarto").remove();
    }

    var divi = $('<div></div>').attr("class", "conte").attr("id", "cuarto");

    var ases = $('<div></div>').attr("class", "but1")
        .attr("onClick", functions + "('Si')")
        .css('background-image', "url('images/identificador/fluorita.jpg')");
    ases.append($('<div></div>').attr("class", "but2")
        .attr("id", "Sic").html("<br>Si")
    );
    divi.append(ases);

    var ases = $('<div></div>').attr("class", "but1")
        .attr("onClick", functions + "('No')")
        .css('background-image', "url('images/identificador/vidrio.jpg')");
    ases.append($('<div></div>').attr("class", "but2")
        .attr("id", "Noc").html("<br>No")
    );
    divi.append(ases);

    $("#tercero").append(divi);

}

function RojoBranch(Isotropo) {

    if (Isotropo == "Si") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Vídrio Volcánico, Granate, Cromita</p>");
        $('#No').attr("class", "but2");
        $('#Si').attr("class", "but2 active");
    } else {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Casiterita, Rutilo, Ortopiroxeno, Biotita</p>");
        $('#Si').attr("class", "but2");
        $('#No').attr("class", "but2 active");

    }
}

function CafeBranch(Isotropo) {
    if ($("#cuarto").length) {
        $("#cuarto").remove();
    }
    if ($("#Pregunta1").length) {
        $("#Pregunta1").remove();
    }

    if (Isotropo == "Si") {
        $('#No').attr("class", "but2");
        $('#Si').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Ópalo, Vídrio Volcánico</p>");
        $("#Pregunta1").html("");

    } else {
        $('#Si').attr("class", "but2");
        $('#No').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena, Estaurolita, Sillimanita, Ortopiroxeno, Hornblenda, Antofilita, Aegirina, Biotita, Circón, Rutilo</p>" +
            "<p>Calcedonia, Casiterita, Dolomita, Siderita, Turmalina, Arcillas, Flogopita, Clorita, Augita, Dravita, Olivino</p>");
        $("#tercero").append($('<h1></h1>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Se Evidencia Clivaje en el Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "cuarto");

        var ases = $('<div></div>').attr("class", "but1")
            .attr("onClick", "CafeBranch1('Si')")
            .css('background-image', "url('images/identificador/clivaje.jpg')");
        ases.append($('<div></div>').attr("class", "but2")
            .attr("id", "Sic").html("<br>Si")
        );
        divi.append(ases);

        var ases = $('<div></div>').attr("class", "but1")
            .attr("onClick", "CafeBranch1('No')")
            .css('background-image', "url('images/identificador/noclivaje.jpg')");
        ases.append($('<div></div>').attr("class", "but2")
            .attr("id", "Noc").html("<br>No")
        );
        divi.append(ases);

        $("#tercero").append(divi);
    }


}

function CafeBranch1(Clivaje) {
    if ($("#quinto").length) {
        $("#quinto").remove();
    }
    if ($("#Pregunta2").length) {
        $("#Pregunta2").remove();
    }

    if (Clivaje == "Si") {
        $('#Noc').attr("class", "but2");
        $('#Sic').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Sillimanita, Ortopiroxeno, Hornblenda, Antofilita, Aegirina, Biotita, Dolomita, Siderita, Flogopita, Clorita, Augita</p>");
        $("#cuarto").append($('<h1></h1>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");
        for (let index = 0; index < formaCafe2.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .attr("onClick", "CafeBranch1A('" + formaCafe2[index] + "')")
                .css('background-image', "url('images/identificador/" + formaCafe2[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2")
                .attr("id", "" + formaCafe2[index]).html("<br>" + formaCafe2_n[index])
            );
            divi.append(ases);
        }
        $("#cuarto").append(divi);

    } else {
        $('#Sic').attr("class", "but2");
        $('#Noc').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena, Estaurolita, Circón, Rutilo, Calcedonia, Casiterita, Turmalina, Arcillas, Olivino</p>");
        $("#cuarto").append($('<h1></h1>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");
        for (let index = 0; index < formaCafe.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .attr("onClick", "CafeBranch1B('" + formaCafe[index] + "')")
                .css('background-image', "url('images/identificador/" + formaCafe[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2")
                .attr("id", "" + formaCafe[index]).html("<br>" + formaCafe_n[index])
            );
            divi.append(ases);
        }
        $("#cuarto").append(divi);
    }

}

function CafeBranch1A(Forma) {

    $('#quinto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "LaminasACa2") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Clorita, Biotita, Flogopita</p>");

    } else if (Forma == "PrismasCCa2") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Ortopiroxeno, Augita, Aegirina</p>");

    } else if (Forma == "RombosCa2") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Dolomita, Siderita</p>");

    } else if (Forma == "PrismasLCa2") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Hornblenda, Antofilita</p>");

    }
}

function CafeBranch1B(Forma) {

    $('#quinto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "PrismasCCa1") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Turmalina, Estaurolita</p>");

    } else if (Forma == "RombosCa1") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena</p>");

    } else if (Forma == "OtroCa1") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Circón, Rutilo, Olivino, Arcillas, Casiterita, Calcedonia</p>");
    }
}

function IncoloroBranch1(Isotropo) {

    if ($("#cuarto").length) {
        $("#cuarto").remove();
    }
    if ($("#Pregunta1").length) {
        $("#Pregunta1").remove();
    }

    if (Isotropo == "Si") {
        $('#No').attr("class", "but2");
        $('#Si').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Granate, Fluorita, Analcima, Halita, Silvita, Ópalo, Vídrio Volcánico</p>");
        $("#tercero").append($('<h1></h1>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Se Evidencia Clivaje en el Mineral?"));
        Clivaje("IncoloroBranch1_1");

    } else {
        $('#Si').attr("class", "but2");
        $('#No').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Pumpellyita, Epidota, Flogopita, Cuarzo, Talco, Feldespatos, Moscovita, Circón, Olivino, Sillimanita, Tremolita, Leucita, Clorita</p>" +
            "<p>Andalucita, Calcita, Cordierita, Apatito, Antofilita, Esfena, Dolomita, Zoisita, Clinozoisita</p>");
        $("#tercero").append($('<h1></h1>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Cuál es el Orden del Color de Interferencia?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "cuarto");
        for (let index = 0; index < formaGris1.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .attr("onClick", "IncoloroBranch1_2('" + formaGris1[index] + "')")
                .css('background-image', "url('images/identificador/" + formaGris1[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2")
                .attr("id", "" + formaGris1[index]).html("<br>" + formaGris1_n[index])
            );
            divi.append(ases);
        }
        $("#tercero").append(divi);
    }
}

function IncoloroBranch1_2(Orden) {

    if ($("#quinto").length) {
        $("#quinto").remove();
    }
    if ($("#Pregunta2").length) {
        $("#Pregunta2").remove();
    }

    $('#cuarto .but2').attr("class", "but2");
    $('#' + Orden).attr("class", "but2 active");

    if (Orden == "PrimerO") {

        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Pumpellyita, Anadalucita, Apatito, Cordierita, Antofilita, Tremolita, Cuarzo, Leucita, Sillimanita, Feldespatos</p>");
        $("#cuarto").append($('<h1></h1>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Se Evidencia Clivaje en el Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");

        var ases = $('<div></div>').attr("class", "but1")
            .attr("onClick", "IncoloroBranch1_2A" + "('Si')")
            .css('background-image', "url('images/identificador/clivajeincoloro.jpg')");
        ases.append($('<div></div>').attr("class", "but2")
            .attr("id", "Sic").html("<br>Si")
        );
        divi.append(ases);

        var ases = $('<div></div>').attr("class", "but1")
            .attr("onClick", "IncoloroBranch1_2A" + "('No')")
            .css('background-image', "url('images/identificador/noclivajeincoloro.jpg')");
        ases.append($('<div></div>').attr("class", "but2")
            .attr("id", "Noc").html("<br>No")
        );
        divi.append(ases);

        $("#cuarto").append(divi);

    } else if (Orden == "SegundoO") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Pumpellyita, Antofilita, Tremolita, Olivino.</p>");
        $("#cuarto").append($('<h1></h1>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");
        for (let index = 0; index < formaIncoloro1.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .attr("onClick", "IncoloroBranch1_2B('" + formaIncoloro1[index] + "')")
                .css('background-image', "url('images/identificador/" + formaIncoloro1[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2")
                .attr("id", "" + formaIncoloro1[index]).html("<br>" + formaIncoloro1_n[index])
            );
            divi.append(ases);
        }
        $("#cuarto").append(divi);

    } else if (Orden == "TercerO") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Moscovita, Talco, Flogopita, Epidota, Talco, Olivino, Circón, Calcita, Dolomita.</p>");
        $("#cuarto").append($('<h1></h1>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");
        for (let index = 0; index < formaIncoloro2.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .attr("onClick", "IncoloroBranch1_2C('" + formaIncoloro2[index] + "')")
                .css('background-image', "url('images/identificador/" + formaIncoloro2[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2")
                .attr("id", "" + formaIncoloro2[index]).html("<br>" + formaIncoloro2_n[index])
            );
            divi.append(ases);
        }
        $("#cuarto").append(divi);
    } else if (Orden == "Anomalo") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena, Clorita, Zoisita, Clinozoisita</p>");
    }
}

function IncoloroBranch1_2C(Forma) {

    $('#quinto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "LaminasAIn2") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Moscovita, Talco</p>");

    } else if (Forma == "OtroIn2") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Olivino, Epidota, Circón</p>");

    }
}

function IncoloroBranch1_2B(Forma) {

    $('#quinto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "PrismasLIn1") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Pumpellyita, Antofilita, Tremolita.</p>");

    } else if (Forma == "OtroIn1") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Olivino</p>");

    }
}

function IncoloroBranch1_2A(Clivaje) {

    if ($("#sexto").length) {
        $("#sexto").remove();
    }
    if ($("#Pregunta3").length) {
        $("#Pregunta3").remove();
    }

    if (Clivaje == "Si") {
        $('#Noc').attr("class", "but2");
        $('#Sic').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Tremolita, Feldespatos, Leucita, Pumpellyita, Andalucita, Cordierita, Antofiita, Sillimanita</p>");
        $("#quinto").append($('<h1></h1>').attr("id", "Pregunta3").attr("class", "texti1")
            .html("¿El Mineral Presenta Maclas?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "sexto");

        var ases = $('<div></div>').attr("class", "but1")
            .attr("onClick", "IncoloroBranch1_2A1" + "('Si')")
            .css('background-image', "url('images/identificador/macla.jpg')");
        ases.append($('<div></div>').attr("class", "but2")
            .attr("id", "Sic1").html("<br>Si")
        );
        divi.append(ases);

        var ases = $('<div></div>').attr("class", "but1")
            .attr("onClick", "IncoloroBranch1_2A1" + "('No')")
            .css('background-image', "url('images/identificador/nomacla.jpg')");
        ases.append($('<div></div>').attr("class", "but2")
            .attr("id", "Noc1").html("<br>No")
        );
        divi.append(ases);

        $("#quinto").append(divi);

    } else {
        $('#Sic').attr("class", "but2");
        $('#Noc').attr("class", "but2 active");
        $("#Pregunta3").html("");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Cuarzo, Olivino, Apatito</p>");
    }
}

function IncoloroBranch1_2A1(Maclas) {

    if ($("#septimo").length) {
        $("#septimo").remove();
    }
    if ($("#Pregunta4").length) {
        $("#Pregunta4").remove();
    }

    if (Maclas == "Si") {
        $('#Noc1').attr("class", "but2");
        $('#Sic1').attr("class", "but2 active");
        $("#Pregunta4").html("");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Feldespatos, Leucita</p>");

    } else {
        $('#Sic1').attr("class", "but2");
        $('#Noc1').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Feldespatos, Tremolita, Pumpellyita, Andalucita, Cordierita, Antofilita, Sillimanita.</p>");
        $("#sexto").append($('<h1></h1>').attr("id", "Pregunta4").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "septimo");
        for (let index = 0; index < formaIncoloro3.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .attr("onClick", "IncoloroBranch1_2A1A('" + formaIncoloro3[index] + "')")
                .css('background-image', "url('images/identificador/" + formaIncoloro3[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2")
                .attr("id", "" + formaIncoloro3[index]).html("<br>" + formaIncoloro3_n[index])
            );
            divi.append(ases);
        }
        $("#sexto").append(divi);
    }
}

function IncoloroBranch1_2A1A(Forma) {

    $('#septimo .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "PrismasLIn3") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Andalucita, Tremolita, Pumpellyita, Antofilita, Sillimanita</p>");

    } else if (Forma == "OtroIn3") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Feldespatos, Cordierita</p>");

    } else if (Forma == "RombosIn3") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Andalucita, Sillimanita</p>");
    }
}

function IncoloroBranch1_1(Clivaje) {

    if (Clivaje == "Si") {
        $('#Noc').attr("class", "but2");
        $('#Sic').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Fluorita, Halita</p>");

    } else {
        $('#Sic').attr("class", "but2");
        $('#Noc').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Granate, Ópalo, Vídrio Volcánico</p>");
    }

}

function GrisBranch1(Isotropo) {

    if ($("#cuarto").length) {
        $("#cuarto").remove();
    }
    if ($("#Pregunta1").length) {
        $("#Pregunta1").remove();
    }

    if (Isotropo == "Si") {
        $('#No').attr("class", "but2");
        $('#Si').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Granate, Fluorita, Analcima, Halita, Silvita, Ópalo, Vídrio Volcánico</p>");
        $("#tercero").append($('<h1></h1>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Se Evidencia Clivaje en el Mineral?"));
        Clivaje("GrisBranch1_1");
    } else {
        $('#Si').attr("class", "but2");
        $('#No').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Pumpellyita, Epidota, Flogopita</p>" +
            "<p>Turmalina, Andalucita, Calcita, Cordierita, Apatito, Antofilita, Esfena, Dolomita, Zoisita, Clinozoisita</p>" +
            "<p>Cuarzo, Talco, Teldespatos, Moscovita, Circón, Olivino, Sillimanita, Tremolita, Leucita, Clorita</p>");
        $("#tercero").append($('<h1></h1>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Se Evidencia Clivaje en el Mineral?"));
        Clivaje("GrisBranch1_2");
    }
}

function GrisBranch1_1(Clivaje) {

    if (Clivaje == "Si") {
        $('#Noc').attr("class", "but2");
        $('#Sic').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Fluorita, Halita</p>");


    } else {
        $('#Sic').attr("class", "but2");
        $('#Noc').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Granate, Ópalo, Vídrio Volcánico</p>");

    }

}

function GrisBranch1_2(Clivaje) {

    if ($("#quinto").length) {
        $("#quinto").remove();
    }
    if ($("#Pregunta2").length) {
        $("#Pregunta2").remove();
    }

    if (Clivaje == "Si") {
        $('#Noc').attr("class", "but2");
        $('#Sic').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Feldespatos, Moscovita, Clorita, Tremolita, Calcita, Antofilita, Dolomita, Zoisita, Clinozoisita, Flogopita, Epidota, Sillimanita, Andalucita, Talco</p>");
        $("#cuarto").append($('<h1></h1>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Cuál es el Orden del Color de Interferencia?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");
        for (let index = 0; index < formaGris1.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .attr("onClick", "GrisBranch1_2A('" + formaGris1[index] + "')")
                .css('background-image', "url('images/identificador/" + formaGris1[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2")
                .attr("id", "" + formaGris1[index]).html("<br>" + formaGris1_n[index])
            );
            divi.append(ases);
        }
        $("#cuarto").append(divi);

    } else {
        $('#Sic').attr("class", "but2");
        $('#Noc').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Pumpellyita, Turmalina, Cordierita, Apatito, Esfena, Cuarzo, Olivino, Leucita</p>");
        $("#cuarto").append($('<h1></h1>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));


        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");
        for (let index = 0; index < formaGris2.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .attr("onClick", "GrisBranch1_2B('" + formaGris2[index] + "')")
                .css('background-image', "url('images/identificador/" + formaGris2[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2")
                .attr("id", "" + formaGris2[index]).html("<br>" + formaGris2_n[index])
            );
            divi.append(ases);
        }
        $("#cuarto").append(divi);
    }

}

function GrisBranch1_2A(Orden) {

    $('#quinto .but2').attr("class", "but2");
    $('#' + Orden).attr("class", "but2 active");

    if (Orden == "PrimerO") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Feldespatos, Antofilita, Sillimanita, Andalucita, Tremolita.</p>");

    } else if (Orden == "SegundoO") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Tremolita,  Antofilita, Tremolita</p>");

    } else if (Orden == "TercerO") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Flogopita, Talco, Dolomita</p>");

    } else if (Orden == "Anomalo") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Clorita, Zoisita, Clinozoisita, Talco</p>");
    }
}

function GrisBranch1_2B(Forma) {

    $('#quinto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "HexagonalGr") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Apatito</p>");

    } else if (Forma == "PrismasLGr") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Turmalina, Pumpellyita</p>");

    } else if (Forma == "RombosAma") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena</p>");

    } else if (Forma == "OtroGr") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Casiterita, Cordierita, Cuarzo, Olivino, leucita</p>");
    }
}

function AmarilloBranch(pleo) {
    if ($("#cuarto").length) {
        $("#cuarto").remove();
    }
    if ($("#Pregunta1").length) {
        $("#Pregunta1").remove();
    }

    if (pleo == 'Si') {
        $('#No').attr("class", "but2");
        $('#Si').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Biotita, Turmalina, Casiterita, Flogopita, Pumpellyita, Esfena, Estaurolita</p>");
        $("#tercero").append($('<h1></h1>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "cuarto");
        for (let index = 0; index < formaAmar.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .attr("onClick", "AmarilloBranch1('" + formaAmar[index] + "')")
                .css('background-image', "url('images/identificador/" + formaAmar[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2")
                .attr("id", "" + formaAmar[index]).html("<br>" + formaAmar_n[index])
            );
            divi.append(ases);
        }
        $("#tercero").append(divi);

    } else {
        $("#Pregunta1").html("");
        $('#Si').attr("class", "but2");
        $('#No').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Olivino</p>");
    }
}

function AmarilloBranch1(Forma) {

    $('#cuarto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "LaminasAAma") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Biotita, Flogopita</p>");

    } else if (Forma == "PrismasCAma") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Ortopiroxeno, Onfacita, Aegirina, Estaurolita</p>");

    } else if (Forma == "RombosAma") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena</p>");

    } else if (Forma == "OtroAma") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Casiterita, Epidota</p>");

    }
}

function VerdeBranch(Isotropo) {
    if ($("#cuarto").length) {
        $("#cuarto").remove();
    }
    if ($("#Pregunta1").length) {
        $("#Pregunta1").remove();
    }

    if (Isotropo == "Si") {
        $('#No').attr("class", "but2");
        $('#Si').attr("class", "but2 active");
        $("#Pregunta1").html("");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Fluorita</p>");
    } else {
        $('#Si').attr("class", "but2");
        $('#No').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Clorita, Serpentina, Biotita, Glauconita, Turmalina, Casiterita, Actinolita, Aegirina, Epidota, Hornblenda, Pumpellyita, Ortopiroxeno, Onfacita</p>");
        $("#tercero").append($('<h1></h1>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "cuarto");
        for (let index = 0; index < formaVerde.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .attr("onClick", "VerdeBranch1('" + formaVerde[index] + "')")
                .css('background-image', "url('images/identificador/" + formaVerde[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2")
                .attr("id", "" + formaVerde[index]).html("<br>" + formaVerde_n[index])
            );
            divi.append(ases);
        }
        $("#tercero").append(divi);
    }
}

function VerdeBranch1(Forma) {

    $('#cuarto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "LaminasAV") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Clorita, Biotita</p>");

    } else if (Forma == "PrismasLV") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p> Actinolita, Hornblenda, Pumpellyita</p>");

    } else if (Forma == "PrismasCV") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Ortopiroxeno, Onfacita, Aegirina</p>");

    } else if (Forma == "OtroV") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Turmalina, Glauconita, Epidota</p>");

    }
}

function AzulVioletaBranch(Forma) {

    $('#tercero .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "TabularAz") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Cianita</p>");

    } else if (Forma == "OtroAz") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Cordierita, Corindón (Zafiro)</p>");

    } else if (Forma == "LaminasAz") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Glaucofana, Turmalina</p>");
    }
}