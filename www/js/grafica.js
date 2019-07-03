var maquinas, maquinas_hist;
var timer;
var tipo = "movil"; //movil,web, se estable al principio al cargar la página
var datosBarra = "undefined";
var datosPie = "undefined";
var segundosTurno;

maquinas_hist = {};

maquinas = {};


function resumen_todos() {
    //pongo en web
    //Obtener elementos
    const preObject = document.getElementById('objeto');
    const preObjectRed = document.getElementById('objeto_reducido');
    //preObject.innerText = maquinas.length + " - " + JSON.stringify(maquinas, null, 3);
    //Fin pongo en web

    //console.log(maquinas['5']);
    //preObject.innerText = '';
    preObject.innerHTML = '';
    preObjectRed.innerHTML = '';

    let ObjectRed = '';

    for (const maquina in maquinas) {

        if (maquina == "last_update") {
            console.log(`Excluir: ${maquina}`);
            //tratar last_update y ponerlo en cabecera
            console.log(`Last Update: ${maquinas[maquina]}`);
            $('#last_update').html(maquinas[maquina]);
            continue;
        }

        //console.log(`maquinas.${prop} = ${maquinas[prop]}`);
        console.log(`${maquina} => `, maquinas[maquina].descripcion);
        //preObject.innerHTML += '<p>' + `${maquina} => ${maquinas[maquina].descripcion}` + '</p>';

        //Bueno
        //preObject.innerHTML += `<div class="item m${maquina}">${maquina} => ${maquinas[maquina].descripcion}</div>`;

        let estado = maquinas[maquina].estado.trim();
        let desc_inc = maquinas[maquina].desc_incidencia.trim();
        let cod_of = maquinas[maquina].cod_of;
        let operacion = maquinas[maquina].operacion;
        let articulo = maquinas[maquina].articulo;
        desc_inc = desc_inc > "" ? desc_inc : estado;

        let estado2 = desc_inc == "PREVENTIVO GENERAL" ? "preventivo" : "";

        if (operacion == undefined) {
            operacion = '';
        }

        if (cod_of == undefined) {
            cod_of = '';
        } else {
            cod_of = cod_of + '/' + operacion;
        }

        if (articulo == undefined) {
            articulo = '';
        } else {
            let n = articulo.indexOf(" ");
            if (n > 0) {
                articulo = articulo.substring(0, n) + '<br>' + articulo.substring(n + 1, articulo.length);
            }
        }

        let tiempo = maquinas[maquina].tiempo;

        ///*
        preObject.innerHTML += `<div class="item m${maquina}" maquina="${maquina}">
                               <div class="item2 cab_maq ${maquinas[maquina].estado.substring(0, 6).toLowerCase()} ${estado2}" maquina="${maquina}"> 
                                  <strong class="item3" maquina="${maquina}">${maquina}</strong><br>${desc_inc}
                               </div>
                               <strong class="item3" maquina="${maquina}">${maquinas[maquina].descripcion}</strong>
                               <div>
                                  <strong>OF/OPE:</strong> ${cod_of}
                               </div>
                               <div>
                                  <strong>ART:</strong> ${articulo}
                               </div>
                            </div>`;

        ObjectRed += `<div class="itemRed m${maquina}" maquina="${maquina}">
                    <div class="item2 cab_maq ${maquinas[maquina].estado.substring(0, 6).toLowerCase()} ${estado2}" maquina="${maquina}"> 
                      <strong class="item3" maquina="${maquina}">${maquina}&nbsp&nbsp</strong><span class="badge badge-pill" style="position:absolute;right:0.1rem;top:0.25rem;"> ${tiempo}</span><br>${desc_inc}
                    </div>
                    <strong class="item3" maquina="${maquina}">${maquinas[maquina].descripcion}</strong>
                </div>`;
        //*/

        //preObject.innerHTML += '<div class="item m' + maquina +'" maquina="' + maquina + '">' + maquina+'</div>'
    }

    preObjectRed.innerHTML = ObjectRed;
    //alert('chuta');

};

function html_maquina(maquinas, maquina) {

    if (maquinas[maquina] == undefined) {
        maquina = maquina == "5" ? "<h1>DESTAJOS</h1>" : "<h1>Máquina " + maquina + "</h1>";
        return maquina;
    } else {
        if (!maquinas[maquina].hasOwnProperty('estado')) {
            maquina = maquina == "5" ? "<h1>DESTAJOS</h1>" : "<h1>Máquina " + maquina + "</h1>";
            return maquina;
        }
    }

    let html = "";

    //..............
    let estado = maquinas[maquina].estado.trim();
    let desc_inc = maquinas[maquina].desc_incidencia.trim();
    let cod_of = maquinas[maquina].cod_of;
    let operacion = maquinas[maquina].operacion;
    let articulo = maquinas[maquina].articulo;
    desc_inc = desc_inc > "" ? desc_inc : estado;

    let estado2 = desc_inc == "PREVENTIVO GENERAL" ? "preventivo" : "";

    if (operacion == undefined) {
        operacion = '';
    }

    if (cod_of == undefined) {
        cod_of = '';
    } else {
        cod_of = cod_of + '/' + operacion;
    }

    if (articulo == undefined) {
        articulo = '';
    } else {
        let n = articulo.indexOf(" ");
        if (n > 0) {
            articulo = articulo.substring(0, n) + '<br>' + articulo.substring(n + 1, articulo.length);
        }
    }

    if (estado == undefined || estado == 'PARADA') {
        maquinas[maquina].cod_molde = '';
        maquinas[maquina].cantidad_planificada = '';
        maquinas[maquina].cantidad_ok = '';
        maquinas[maquina].golpes_hora = '';
        maquinas[maquina].cavs = '';
    }

    let tiempo = maquinas[maquina].tiempo;

    html += `<div class="itemD m${maquina}" maquina="${maquina}">
                <div class="item2 cab_maq ${maquinas[maquina].estado.substring(0, 6).toLowerCase()} ${estado2}" maquina="${maquina}"> 
                    <strong class="item3" maquina="${maquina}">${maquina}</strong><span class="badge badge-pill" style="position:absolute;right:1rem;">${tiempo}</span><br>${desc_inc}
                </div>
                <strong class="item3" maquina="${maquina}">${maquinas[maquina].descripcion}</strong>
                <div>
                    <strong>OF/OPE:</strong> ${cod_of}
                </div>
                <div>
                    <strong>ART:</strong> ${articulo}
                </div>
                <div>
                    <strong>MOLDE:</strong> ${maquinas[maquina].cod_molde}
                </div>
                <div>
                    <strong>CAVS:</strong> ${maquinas[maquina].cavs}
                </div>
                <div>
                    <strong>OPERARIO:</strong> ${maquinas[maquina].operario.reduce((ops,op) => {return ops + '<br>' + op;},'')}
                </div>
                <div>
                    <strong>C.PLAN:</strong> ${maquinas[maquina].cantidad_planificada}
                </div>
                <div>
                    <strong>C.OK:</strong> ${maquinas[maquina].cantidad_ok}
                </div>
                <div>
                    <strong>GOLPES/H:</strong> ${maquinas[maquina].golpes_hora}
                </div>
            </div>`;
    //..............
    return html;

}

function datos_maquinas() {

    if (maquinas) {

        $('#m1450').html(html_maquina(maquinas, '1450'));
        $('#m1620').html(html_maquina(maquinas, '1620'));
        $('#m1630').html(html_maquina(maquinas, '1630'));
        $('#m1640').html(html_maquina(maquinas, '1640'));
        $('#m1650').html(html_maquina(maquinas, '1650'));
        $('#m1660').html(html_maquina(maquinas, '1660'));
        $('#m1670').html(html_maquina(maquinas, '1670'));
        $('#m1680').html(html_maquina(maquinas, '1680'));
        $('#m1690').html(html_maquina(maquinas, '1690'));
        $('#m1700').html(html_maquina(maquinas, '1700'));
        $('#m1710').html(html_maquina(maquinas, '1710'));

        $('#m2420').html(html_maquina(maquinas, '2420'));
        $('#m2430').html(html_maquina(maquinas, '2430'));
        $('#m2460').html(html_maquina(maquinas, '2460'));
        $('#m2470').html(html_maquina(maquinas, '2470'));
        $('#m2480').html(html_maquina(maquinas, '2480'));
        $('#m2490').html(html_maquina(maquinas, '2490'));
        $('#m2500').html(html_maquina(maquinas, '2500'));
        $('#m2510').html(html_maquina(maquinas, '2510'));
        $('#m2520').html(html_maquina(maquinas, '2520'));
        $('#m2530').html(html_maquina(maquinas, '2530'));

        $('#m3230').html(html_maquina(maquinas, '3230'));
        $('#m3240').html(html_maquina(maquinas, '3240'));
        $('#m3250').html(html_maquina(maquinas, '3250'));
        $('#m9750').html(html_maquina(maquinas, '9750'));
        $('#m9760').html(html_maquina(maquinas, '9760'));

        $('#m4070').html(html_maquina(maquinas, '4070'));
        $('#m4080').html(html_maquina(maquinas, '4080'));
        $('#m4090').html(html_maquina(maquinas, '4090'));
        $('#m5').html(html_maquina(maquinas, '5'));
        $('#mvarios').html(html_maquina(maquinas, 'VARIOS'));

        resumen_todos();
    }

}

function last_update() {

    var date = new Date;
    //date.setTime(result_from_Date_getTime);

    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();

    hour = ("" + hour).length == 1 ? '0' + hour : hour;
    minutes = ("" + minutes).length == 1 ? '0' + minutes : minutes;

    var year = date.getFullYear();
    var month = date.getMonth() + 1; // beware: January = 0; February = 1, etc.
    var day = date.getDate();

    $('#last_update').html(`${day}/${month}/${year} ${hour}:${minutes}`);

}

/*
    setTimeout(function() {
        let maqmodal = $('#maquinaModal').attr("maquina");
        //alert(maqmodal);
        if (maqmodal > "") {
            let cuerpo = html_maquina(maquinas, maqmodal);
            $('.modal-body').html('Detalle de la máquina nuevo ' + maqmodal + cuerpo);
        }
    }, 2000);
    */

function maquina_modal() {
    let maqmodal = $('#maquinaModal').attr("maquina");

    if (maqmodal > "") {
        let cuerpo = html_maquina(maquinas, maqmodal);
        $('.modal-body').html('Detalle de la máquina ' + maqmodal + cuerpo);
    }
}

function poner_eventos() {

    var maq = document.querySelectorAll('.itemD');

    for (var i = 0; i < maq.length; i++) {
        maq[i].addEventListener('click', playController);
    }

    maq = document.querySelectorAll('.itemRed');

    for (var i = 0; i < maq.length; i++) {
        maq[i].addEventListener('click', playController);
    }
}

function quitar_eventos() {

    var maq = document.querySelectorAll('.itemD');

    for (var i = 0; i < maq.length; i++) {
        maq[i].removeEventListener('click', playController);
    }

    maq = document.querySelectorAll('.itemRed');

    for (var i = 0; i < maq.length; i++) {
        maq[i].removeEventListener('click', playController);
    }

}

function playController(e) {

    let clase = this.className;
    clase = '.' + clase.replace(/ /g, ".");
    let maquina = $(clase).attr("maquina");

    let cuerpo = html_maquina(maquinas, maquina);

    //let cuerpo = '<br><p>1 <br></p><p>2 <br></p><p>3 <br></p><p>4 <br></p><p>5 <br></p><p>6 <br></p><p>7 <br></p><p>8 <br></p><p>9 <br></p><p>10<br></p>'

    //funciona
    //$(clase).html("funciona maquina "+ maquina);

    //alert(clase);
    //alert('Máquina: ' + maquina);

    $('#maquinaModal').modal('show')
    $('.modal-body').html('Detalle de la máquina ' + maquina + cuerpo);
    $('#exampleModalLongTitle').html('MÁQUINA ' + maquina);

    //marco modal para poder actualizarlo    
    $('#maquinaModal').attr("maquina", maquina);

}

/*
$(document).ready(function() {

    maquinas = {};
    let poner_eventos_ini = false;

    if (1 == 2 && typeof(Storage) !== "undefined") {
        //Funciona en web
        //localStorage.maquinas = localStorage.maquinas || maquinas;
        //maquinas = JSON.parse(localStorage.maquinas);
        //FIN Funciona en web

        //localStorage.setItem("maquinas", "Smith");
        maquinas = JSON.parse(localStorage.getItem("maquinas"));
        //console.log('LocalStorage', maquinas);
        if (maquinas == null) {
            maquinas = {};
        } else {
            poner_eventos_ini = true;
        }

    } else {
        // Sorry! No Web Storage support..
    }
    //localStorage.maquinas = localStorage.maquinas || maquinas;
    //maquinas = JSON.parse(localStorage.maquinas);

    //last_update();
    //last_update_visor();
    //26-5-19 datos_maquinas();
    //datos_maquina_hist();

    //Los eventos se ponen al leer maquinas de firestore, si las leemos en local hay que ponerlo 
    //26-5-19if (poner_eventos_ini) poner_eventos();

    //26-5-19leer_datos_maquinas();
    leer_datos_maquinas_historico();
    //datos_maquinas();

})
*/

/*
$(document).ready(function() {

    var maq = dame_maquina_url();

    if (maq == null) {
        maq = '1680'; //'2520';
    }

    //alert(maq);
    leer_datos_maquina_historico(maq);
});

function error_grafica() {
    return false;
}
*/

/*
function grafica(historico) {

    console.log(historico);

    var tactual = historico.a;

    //En estado actual pon la fecha fin como last update
    if (tactual.length > 0) {
        tactual[0].fecha_fin = historico.last_update;
        $('#last_update').html(tactual[0].fecha_fin.substring(1, 16));
    }

    tactual = tactual.reverse();

    console.log(tactual);

    var segturno = 8 * 60 * 60;
    var estilo = "";
    var grafica = "";
    var n = 0;
    var segundos = 0;

    tactual.forEach(element => {
        console.log(element.segundos);
        n++;
        segundos = segundos + element.segundos;
        estilo = estilo + ".g" + n + " {width: calc(100% * " + element.segundos + "/" + segturno + ")}"; // background-color: blue;} .g2 {width:calc(100% * 75/100); background-color: red;}";
        //grafica = grafica + "<div class='grafica g" + n + "'>t" + n + "</div>";

        //primera vez
        if (n == 1) {
            grafica = "<div class='graficacontainer d-flex'>";
        }

        grafica = grafica + "<div class='grafica g" + n + "'></div>";

        //Ajuste final, segundos hasta terminar el turno
        if (n == tactual.length) {
            n++;
            segundos = segturno - segundos;
            if (segundos > 0) {
                estilo = estilo + ".g" + n + " {width: calc(100% * " + segundos + "/" + segturno + ")}"; // background-color: blue;} .g2 {width:calc(100% * 75/100); background-color: red;}";
                //grafica = grafica + "<div class='grafica g" + n + "'>t" + n + "</div>";
                grafica = grafica + "<div class='grafica g" + n + "'></div>";
            }

            grafica = grafica + "</div>";
            grafica = grafica + "<div class='guia d-flex'> <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div> </div>";

            //envuelvo datos y guia en barra
            grafica = "<div class='barra'>" + grafica + "</div>";
        }

    });

    //var estilo = ".g1 {width: calc(100% * 25/100); background-color: blue;} .g2 {width:calc(100% * 75/100); background-color: red;}";
    //var grafica = "<div class='grafica g1'>hola</div><div class='grafica g2'>adios</div>";

    //prueba quitar
    //crear div barra con datos y guia
    //grafica = "<div class='barra'>" + grafica + "</div><div class='barra'>" + grafica + "</div>";
    grafica = grafica + grafica + grafica;

    $("#estilo").html(estilo);
    $("#graficas").html(grafica);

    for (var index = 0; index < 9; index++) {
        $("#n" + index).html((+'6' + index) + ':00');
        $("#n" + index).html((+'6' + index));
    }


    var datos = document.querySelectorAll('.grafica');

    for (var i = 0; i < datos.length; i++) {
        datos[i].addEventListener('click', playController2);
    }

    function playController2() {
        alert(this.className);
    }
}

function dame_maquina_url() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var maq = url.searchParams.get("maquina");
    console.log(maq);
    return maq;
}
*/

$(document).ready(function() {

    var maq;
    /*
      maq = dame_maquina_url();
  
      if (maq == null) {
        maq = '1680'; //'2520';
      } //alert(maq);
    */

    maq = getQueryVariable('maquina');

    if (!maq) {
        maq = '1680';
    }

    leer_datos_maquina_historico(maq);

    if (maq == "5" || maq == "VARIOS" || maq == "4070" || maq == "4080" || maq == "4090") {
        if (maq == "5") {
            maq = "DESTAJO";
        }
        if (maq == "4070") {
            maq = "MAQUINA OMSO-5 UVA (1 CAB)";
            maq = "MAQ. 4070 (2 CAB)";
        }
        if (maq == "4080") {
            maq = "MAQUINA OMSO-4 UVA (3 CAB)";
            maq = "MAQ. 4080 (3 CAB)";
        }
        if (maq == "4090") {
            maq = "MAQUINA OMSO-1 UVA (2 CAB)";
            maq = "MAQ. 4090 (2 CAB)";
        }

    } else {
        maq = 'MAQ. ' + maq.substring(1, 3);
    }

    $('#nmaquina').html(maq);

    $(window).resize(function() {
        graficaBarras(datosBarra);
        graficaPie(datosPie);
    });

});

function grafica(historico) {
    console.log(historico);
    var tactual = historico.a; //En estado actual pon la fecha fin como last update
    var turno_ini;

    if (tactual.length > 0) {
        tactual[0].fecha_fin = historico.last_update;
        $('#last_update').html(tactual[0].fecha_fin.substring(0, 16));
        turno_ini = historico.cod_turno;
    }

    if (turno_ini == "1") {
        $('#nturno').html('Mañana');
    }
    if (turno_ini == "2") {
        $('#nturno').html('Tarde');
    }
    if (turno_ini == "3") {
        $('#nturno').html('Noche');
    }

    tactual = tactual.reverse();
    console.log(tactual);
    var segturno = 8 * 60 * 60;
    var estilo = "";
    var grafica = "";
    var n = 0;
    var segundos = 0;
    var inc1 = "";
    var clase = "";
    var popover = "";
    var tiempo = 0;
    var stiempo = "";
    var testado;

    var cabecera = "<div class='nguia'> ESTADO</div>";
    cabecera += "<div class='tincidencia p-1'>inc 1</div>";
    cabecera += "<div class='tincidencia p-1'>inc 2</div>";
    cabecera += "<div class='tincidencia p-1'>inc 3</div>";

    //cabeceras
    var cab = [];
    var estado;
    var incidencia;
    var estados = [];
    var color;
    var tcolor;

    tactual.forEach(function(element) {

        estado = element.estado.trim();
        incidencia = element.desc_incidencia.trim();

        if (incidencia > "") {
            estado = estado + "<br>" + incidencia;
        } else {
            estado = estado;
        }

        //cab[estado] = estado;
        cab[estado] = {};
        cab[estado].estado = element.estado.trim();
        cab[estado].incidencia = incidencia;
        cab[estado].grafica = "";

        //Estados y tiempo para grafica de barras y pie
        estado = element.estado.trim();

        if (typeof estados[estado] === "undefined") {
            estados[estado] = {};
        }

        estados[estado].estado = wordCap(estado);

        //alert(estados[estado].tiempo)
        testado = estados[estado].tiempo;

        if (typeof estados[estado].tiempo === "undefined") {
            estados[estado].tiempo = 0;
        }

        //estados[estado].tiempo += element.segundos;

        estados[estado].tiempo += isNaN(element.segundos) ? 0 : element.segundos;


        tcolor = 'white';

        switch (estado) {
            case 'PRODUCCION':
                color = 'green';
                break;
            case 'PARADA':
                color = 'gray';
                break;
            case 'PREPARACION':
                color = 'dodgerblue';
                break;
            case 'INCIDENCIA':
                color = 'red';
                break;
            case 'PUESTA MARCHA':
                color = 'blue';
                break;
            case 'LISTA':
                color = 'orange';
                tcolor = 'black';
                break;
            case 'TRABAJO DESC':
                color = 'color: #FF6600';
                break;
            case 'PREVENTIVO':
                color = 'color: #FFCA28';
                tcolor = 'black';
                break;
            default:
                color = 'black';
        }

        estados[estado].color = color;
        estados[estado].colortexto = tcolor;
        //FIN Estados y tiempo para grafica de barras y pie

    });

    console.log(estados);

    cabecera = "<div class='nguia'><p class='texinc'> ESTADO</p></div>";


    for (var key in cab) {
        //cabecera += "<div class='inci tincidencia p-1'>" + cab[key] + "</div>";
        cabecera += "<div class='inci tincidencia p-1'>" + key + "</div>";
    }

    cabecera = cabecera.replace(/INCIDENCIA<br>/g, "");

    console.log('cab----------------------', cab, '----------------------------');
    console.log(cabecera);

    tactual.forEach(function(element) {
        console.log(element.segundos);
        n++;
        segundos = segundos + element.segundos;
        estilo = estilo + ".g" + n + " {width: calc(100% * " + element.segundos + "/" + segturno + ")}"; // background-color: blue;} .g2 {width:calc(100% * 75/100); background-color: red;}";
        //grafica = grafica + "<div class='grafica g" + n + "'>t" + n + "</div>";
        //primera vez

        //tiempo popover
        stiempo = element.fecha_ini.trim().substring(10, 20) + ' - ' + element.fecha_fin.trim().substring(10, 20);

        tiempo = element.segundos;

        /*
        if (tiempo < 60) {
            tiempo = ' ' + element.segundos + 's';
        } else {
            tiempo = Math.trunc(tiempo / 60);
            tiempo = ' ' + tiempo + 'm';
        }

        stiempo = stiempo + tiempo;
        */

        stiempo += '  ' + segundosToHoras(element.segundos);
        //Fin tiempos popover

        //por cada tipo incidencia creo una barra
        for (var key in cab) {

            if (inc1 == "") {
                inc1 = key;
            }

            if (n == 1) {
                cab[key].grafica = "<div class='graficacontainer d-flex'>";
            }

            if (element.estado.trim() == cab[key].estado && element.desc_incidencia.trim() == cab[key].incidencia) {
                clase = clase_estado(cab[key].estado, cab[key].incidencia);
            } else {
                clase = "noactividad";
            }

            //cab[key].grafica = cab[key].grafica + "<div class='grafica g" + n + ' ' + clase + "'></div>"; //Ajuste final, segundos hasta terminar el turno

            if (clase == "noactividad") {
                popover = '';
            } else {
                popover = ' data-toggle="popover" data-trigger="focus" data-placement="auto" title="Tiempo" data-content="' + stiempo + '"';
            }

            cab[key].grafica = cab[key].grafica + "<div class='grafica g" + n + ' ' + clase + "' " + popover + "></div>";


            if (n == tactual.length) {

                n++;

                segundos = segturno - segundos;

                if (segundos > 0) {
                    if (inc1 == key) {
                        estilo = estilo + ".g" + n + " {width: calc(100% * " + segundos + "/" + segturno + ")}"; // background-color: blue;} .g2 {width:calc(100% * 75/100); background-color: red;}";
                        //grafica = grafica + "<div class='grafica g" + n + "'>t" + n + "</div>";
                    }

                    cab[key].grafica = cab[key].grafica + "<div class='grafica g" + n + " futuro'></div>";
                }

                cab[key].grafica = cab[key].grafica + "</div>";
                //cab[key].grafica = cab[key].grafica + "<div class='guia d-flex'> <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div> </div>"; //envuelvo datos y guia en barra
                cab[key].grafica = cab[key].grafica + "<div class='guia d-flex'> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>"; //envuelvo datos y guia en barra

                cab[key].grafica = "<div class='barra'>" + cab[key].grafica + "</div>";

                if (n > tactual.length) {
                    n--;
                }
            }

        } //por cada tipo incidencia creo una barra

    }); //var estilo = ".g1 {width: calc(100% * 25/100); background-color: blue;} .g2 {width:calc(100% * 75/100); background-color: red;}";
    //var grafica = "<div class='grafica g1'>hola</div><div class='grafica g2'>adios</div>";
    //prueba quitar
    //crear div barra con datos y guia
    //grafica = "<div class='barra'>" + grafica + "</div><div class='barra'>" + grafica + "</div>";

    grafica = "";
    for (var key3 in cab) {
        grafica += cab[key3].grafica;
        console.log('-----------------', cab[key3].grafica, '-------------------');
    }

    //grafica = grafica + grafica + grafica;

    $("#estilo").html(estilo);
    $("#graficas").html(grafica);
    $("#incidencias").html(cabecera);

    /*
    for (var index = 0; index < 9; index++) {
        $("#n" + index).html(+'6' + index + ':00');
        $("#n" + index).html(+'6' + index);
    }
    */

    var hora = 0;
    //alert(turno_ini);
    if (turno_ini == "1") {
        hora = 6;
    }
    if (turno_ini == "2") {
        hora = 14;
    }
    if (turno_ini == "3") {
        hora = 22;
    }

    for (var index = 0; index < 9; index++) {
        //$("#n" + index).html(+'6' + index + ':00');
        //$("#n" + index).html(+'6' + index);

        if (hora >= 24) {
            hora = 0;
        }

        $("#n" + index).html(hora);
        hora++;

    }

    var datos = document.querySelectorAll('.grafica');

    for (var i = 0; i < datos.length; i++) {
        datos[i].addEventListener('click', playController2);
    }

    //popover en escucha
    $('[data-toggle="popover"]').popover()

    $('.popover-dismiss').popover({
        trigger: 'focus'
    });

    function playController2() {
        //alert(this.className);
        var clase = this.className;
        clase = "." + clase.trim().replace(/ /g, ".");
        //alert(clase);
        //Cierro los popover abiertos para que solo haya uno
        $('[data-toggle="popover"]').popover('hide');
        $(clase).popover('show');
        //Como lo cierro a mano anulo el timer anterior si existe
        clearTimeout(timer);
        //Cierro los popover a los 4 segundos
        timer = setTimeout(function() {
            $('[data-toggle="popover"]').popover('hide');
            $(".progress-bar").removeClass("progress-bar progress-bar-striped progress-bar-animated");
        }, 4000);

        //quito animacion de fondo anterior
        $(".progress-bar").removeClass("progress-bar progress-bar-striped progress-bar-animated");

        //animo el fondo
        if (!(clase.includes('noactividad') || clase.includes('futuro'))) {
            $(clase).addClass("progress-bar progress-bar-striped progress-bar-animated");
        }

    }

    function segundosToHoras(segundos) {

        var tiempo, minutos, horas;

        tiempo = segundos;

        if (tiempo < 60) {
            tiempo = tiempo + 's';
        } else {

            minutos = Math.trunc((tiempo / 60));

            horas = Math.trunc((minutos / 60));
            minutos = minutos - (horas * 60);

            minutos = minutos < 0 ? 0 : minutos;

            minutos = minutos < 10 ? '0' + minutos : '' + minutos;

            tiempo = horas + ':' + minutos;
        }


        return tiempo;
    }

    //Prepara el array para la grafica
    preparaDatosGraficas(estados);

    graficaBarras(datosBarra);
    graficaPie(datosPie);

    //Quito mensaje "leyendo datos" y muestro grafica
    $(".dd-none1").addClass('d-none');
    $(".dd-none2").removeClass('d-none');

}

function clase_estado(estado, desc_inc) {
    estado = estado.trim();
    desc_inc = desc_inc.trim();

    desc_inc = desc_inc > "" ? desc_inc : estado;

    var estado2 = desc_inc == "PREVENTIVO GENERAL" ? "preventivo" : "";

    estado = estado.substring(0, 6).toLowerCase();

    return estado + " " + estado2;
}

function dame_maquina_url() {
    /*
      var url_string = window.location.href;
      var url = new URL(url_string);
      var maq = url.searchParams.get("maquina");
      console.log(maq);
      return maq;
    */
    return "1680";
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

function cerrar_ventana() {
    if (tipo == "movil") {
        //window.location.href = "index.html";
        window.location.replace("index.html");
        history.go(-1);
    } else {
        window.close();
    }
    return false;
}

function error_grafica(terror) {

    if (terror == "Error") {

        if (tipo == "movil") {
            var maquina = getQueryVariable('maquina');
            var boton = '<a class="btn btn-primary" href="grafica.html?maquina=' + maquina + '" role="button">Actualizar</a>';
            $(".dd-none1 h3").html("<div>Error obteniendo datos, intentelo de nuevo más tarde<br><span style='font-size:1rem'>Revise su conexión a internet</span></div><div class='p-2'>" + boton);
        } else {
            //alert("Error obteniendo datos, intentelo de nuevo => " + terror);
            $(".dd-none1 h3").html("<div>Error obteniendo datos, intentelo de nuevo más tarde<br><span style='font-size:1rem'>Revise su conexión a internet</span></div><div class='p-2'><button type='button' class='btn btn-sm btn-primary' onclick='actualizar_ventana()'>Actualizar</button>");
        }

    } else {
        //alert("La máquina no existe => " + terror);
        $(".dd-none1 h3").html("No se dispone de datos para esta máquina");
    }

}

function actualizar_ventana(terror) {
    //alert('actualizo');
    location.reload();
}

function graficaBarras(datos) {

    var dato = [];

    google.charts.load('current', {
        packages: ['corechart', 'bar']
    });

    /*
    if (datos == "undefined") {
        datos = [
            ['Estado', 'Minutos', ],
            ['Producción', 480],
            ['Parada', 60]
        ];

        dato.push('lolo');
        dato.push('23');
        datos.push(dato);

        dato = [];
        dato.push('pepo');
        dato.push('55');

        dato = [];
        dato.push('Ana');
        dato.push('355');

        //datos.push(['lolo', 23]);
        datos.push(dato);
    }
    */

    //Si hay datos pinto la grafica
    if (datos != "undefined") {
        google.charts.setOnLoadCallback(drawBasic);
    }

    function drawBasic() {

        /*
        var data = google.visualization.arrayToDataTable([
            ['Estado', 'Minutos', {
                role: 'style'
            }],
            ['Producción', 430, '#b87333'],
            ['Parada', 100, '#b87333'],
            ['Preparación', 130, '#b87333'],
            ['Incidencia', 209, '#b87333'],
            ['Lista', 15, '#b87333'],
        ]);
        */

        /*
        var adata = google.visualization.arrayToDataTable([
            ['Estado', 'Minutos', {
                role: 'style'
            }],
            ['Producción', 430, '#b87333'], // RGB value
            ['Parada', 100, 'silver'], // English color name
            ['Preparacion', 130, 'gold'],
            ['Incidencia', 21, 'color: #e5e4e2'], // CSS-style declaration
        ]);
        */
        segundosTurno = segundosToHoras(segundosTurno);

        var data = google.visualization.arrayToDataTable(datos);

        /*
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Estado');
        data.addColumn('number', 'Minutos');
        data.addColumn({ type: 'string', role: 'style' });

        data.addRows(3);

        data.setValue(0, 0, 'Producción');
        data.setValue(0, 1, 430);
        data.setValue(0, 2, 'rgb(0, 255, 0)');
        data.setValue(1, 0, 'Parada');
        data.setValue(1, 1, 100);
        data.setValue(1, 2, 'gray');
        data.setValue(2, 0, 'Preparación');
        data.setValue(2, 1, 130);
        data.setValue(2, 2, 'blue');
        */

        var options = {
            title: 'Tiempo de Máquina Turno - ' + segundosTurno + 'h de trabajo.',
            chartArea: {
                width: '62%'
            },
            hAxis: {
                title: 'Tiempo',
                minValue: 0,
                maxValue: 500,
                //ticks: [0, 60, 120, 180, 240, 300, 360, 420, 480, 540]
                ticks: [0, {
                        v: 60,
                        f: '1h'
                    },
                    {
                        v: 120,
                        f: '2h'
                    },
                    {
                        v: 180,
                        f: '3h'
                    },
                    {
                        v: 240,
                        f: '4h'
                    },
                    {
                        v: 300,
                        f: '5h'
                    },
                    {
                        v: 360,
                        f: '6h'
                    },
                    {
                        v: 420,
                        f: '7h'
                    },
                    {
                        v: 480,
                        f: '8h'
                    },
                    {
                        v: 540,
                        f: ''
                    }
                ]
            },
            vAxis: {
                title: 'Estado'
            },
            colors: ['white', '#004411', 'pink'],
            legend: {
                position: "none"
            },
        };

        var chart = new google.visualization.BarChart(document.getElementById('barchart'));

        chart.draw(data, options);
    }
}

function graficaPie(datos) {
    google.charts.load('current', {
        'packages': ['corechart']
    });

    if (datos != "undefined") {
        google.charts.setOnLoadCallback(drawChart);
    }

    function drawChart() {

        /*
        var data = google.visualization.arrayToDataTable([
            ['Estado', 'Horas por turno'],
            ['Producción', 11],
            ['Parada', 2],
            ['Preparación', 2],
            ['Incidencia', 2],
            ['Lista', 7]
        ]);
        */
        var data = google.visualization.arrayToDataTable(datos.datos);

        var options = {
            title: 'Estados Máquina - ' + segundosTurno + 'h de trabajo.',
            slices: [{
                color: 'green',
                textStyle: {
                    color: 'white'
                }
            }, {
                color: 'gray'
            }, {
                color: 'blue'
            }, {
                color: 'red'
            }, {
                color: 'rgb(255, 255, 0)',
                textStyle: {
                    color: 'black'
                }
            }, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        };

        options.slices = datos.slices;

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);

        if ($('svg g g text:last').html() == "Other") {
            $('svg g g text:last').html("Otros");
        }
    }

}

function wordCap(cadena) {
    cadena = cadena.toLowerCase();
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

function preparaDatosGraficas(estados) {

    //barras
    /*
    var data = [
        ['Estado', 'Minutos', {
            role: 'style'
        }],
        ['Producción', 430, '#b87333'], // RGB value
        ['Parada', 100, 'silver'], // English color name
        ['Preparacion', 130, 'gold'],
        ['Incidencia', 21, 'color: #e5e4e2'], // CSS-style declaration
    ];

     data = [
            ['Estado', 'Horas por turno'],
            ['Producción', 11],
            ['Parada', 2],
            ['Preparación', 2],
            ['Incidencia', 2],
            ['Lista', 7]
        ]);

        slices: [{
                color: 'green',
                textStyle: {
                    color: 'white'
                }
            }, {
                color: 'gray'
            }, {
                color: 'blue'
            }, {
                color: 'red'
            }, {
                color: 'rgb(255, 255, 0)',
                textStyle: {
                    color: 'black'
                }
            }, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    */

    var dataB, dataP;
    var est, estado, minutos, color;
    est = '';
    dataB = [];
    dataP = {};
    var slice = {};

    segundosTurno = 0;

    for (var key in estados) {

        segundosTurno += estados[key].tiempo;

        if (est == "") {
            est = key;
            dataB.push(['Estado', 'Minutos', {
                role: 'style'
            }, { role: 'annotation' }]);
            dataP.datos = [];
            dataP.slices = [];
            dataP.datos.push(['Estado', 'Horas por turno']);
        }

        if (Math.round(estados[key].tiempo / 60) < 1) {
            dataB.push([estados[key].estado, Math.round(estados[key].tiempo * 100 / 60) / 100, estados[key].color, segundosToHoras(estados[key].tiempo)]);
            dataP.datos.push([estados[key].estado, Math.round(estados[key].tiempo * 100 / 60) / 100]);
        } else {
            dataB.push([estados[key].estado, Math.round(estados[key].tiempo / 60), estados[key].color, segundosToHoras(estados[key].tiempo)]);
            dataP.datos.push([estados[key].estado, Math.round(estados[key].tiempo / 60)]);
        }

        slice = {};
        slice.color = estados[key].color.substring(0, 6) == "color:" ? estados[key].color.substring(7, 40) : estados[key].color;
        slice.textStyle = {};
        //slice.textStyle.color = 'red';
        slice.textStyle.color = estados[key].colortexto.substring(0, 6) == "color:" ? estados[key].colortexto.substring(7, 40) : estados[key].colortexto;
        dataP.slices.push(slice);
    }

    datosBarra = dataB;
    datosPie = dataP;

    //console.log(datosBarra);
    //console.log(datosPie);

}

function segundosToHoras(segundos) {

    var tiempo, minutos, horas;

    tiempo = segundos;

    if (tiempo < 60) {
        tiempo = tiempo + 's';
    } else {

        minutos = Math.trunc((tiempo / 60));

        horas = Math.trunc((minutos / 60));
        minutos = minutos - (horas * 60);

        minutos = minutos < 0 ? 0 : minutos;

        minutos = minutos < 10 ? '0' + minutos : '' + minutos;

        tiempo = horas + ':' + minutos;
    }

    return tiempo;
}