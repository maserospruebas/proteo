﻿var maquinas, maquinas_hist;

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
                    <strong>OPERARIO:</strong> ${maquinas[maquina].operario.reduce((ops,op) => {return ops + '<br>' + op},'')}
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

function grafica(historico) {

    console.log(historico);

    var tactual = historico.a;

    //En estado actual pon la fecha fin como last update
    if (tactual.length > 0) {
        tactual[0].fecha_fin = historico.last_update;
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
            grafica = "<div id='grafica' class='d-flex'>";
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
        }


    });

    //var estilo = ".g1 {width: calc(100% * 25/100); background-color: blue;} .g2 {width:calc(100% * 75/100); background-color: red;}";
    //var grafica = "<div class='grafica g1'>hola</div><div class='grafica g2'>adios</div>";

    //prueba quitar
    //crear div barra con datos y guia
    grafica = "<div class='barra' style='position:relative'>" + grafica + "</div><div class='barra' style='position:relative'>" + grafica + "</div>";

    $("#estilo").html(estilo);
    $("#graficas").html(grafica);

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