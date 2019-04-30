(function() {

    maquinas = {
        "5": {
            "cantidad_ok": 85181,
            "cantidad_total": 85181,
            "cod_incidencia": "",
            "cod_maquina": "5",
            "cod_molde": null,
            "cod_seccion": "0",
            "desc_incidencia": "",
            "descripcion": "MONTAJE-DESTAJO",
            "estado": "PARADA",
            "operario": [],
            "tipo_estmaquina": 0
        },
        "1450": {
            "cantidad_ok": 9824940,
            "cantidad_total": 10082485,
            "cod_incidencia": "",
            "cod_maquina": "1450",
            "cod_molde": "230/400",
            "cod_seccion": "COEX",
            "desc_incidencia": "",
            "descripcion": "MAQ. 45",
            "estado": "PARADA",
            "operario": [],
            "tipo_estmaquina": 0
        },
        "1620": {
            "articulo": "50378 BOTELLA 0817 /842 00250cc COEX  0452/BLA",
            "cantidad_ok": 124887,
            "cantidad_planificada": 225600,
            "cantidad_total": 154147,
            "cod_incidencia": "",
            "cod_maquina": "1620",
            "cod_molde": "817/250",
            "cod_of": "118978",
            "cod_seccion": "COEX",
            "desc_incidencia": "",
            "descripcion": "MAQ. 62",
            "estado": "PRODUCCION",
            "golpes_hora": 1012,
            "operacion": 1,
            "operario": [
                "RAMOS RAMIREZ, JOSE VICENTE"
            ],
            "tipo_estmaquina": 2
        },
        "1630": {
            "articulo": "50373 BOTELLA 0817 /842 00500cc COEX  0452/BLA",
            "cantidad_ok": 22475,
            "cantidad_planificada": 61732,
            "cantidad_total": 25304,
            "cod_incidencia": "",
            "cod_maquina": "1630",
            "cod_molde": "817/500",
            "cod_of": "118979",
            "cod_seccion": "COEX",
            "desc_incidencia": "",
            "descripcion": "MAQ. 63",
            "estado": "PRODUCCION",
            "golpes_hora": 632,
            "operacion": 1,
            "operario": [
                "MARTINEZ MORENO, PEDRO JOSE"
            ],
            "tipo_estmaquina": 2
        },
        "1640": {
            "cantidad_ok": 10680460,
            "cantidad_total": 10923172,
            "cod_incidencia": "",
            "cod_maquina": "1640",
            "cod_molde": "812/5000",
            "cod_seccion": "COEX",
            "desc_incidencia": "",
            "descripcion": "MAQ. 64",
            "estado": "PARADA",
            "operario": [],
            "tipo_estmaquina": 0
        },
        "1650": {
            "cantidad_ok": 11259186,
            "cantidad_total": 11574464,
            "cod_incidencia": "",
            "cod_maquina": "1650",
            "cod_molde": "812/5000b",
            "cod_seccion": "COEX",
            "desc_incidencia": "",
            "descripcion": "MAQ. 65 ",
            "estado": "PARADA",
            "operario": [],
            "tipo_estmaquina": 0
        },
        "1660": {
            "articulo": "50372 BOTELLA  817/842  1000CC COEX  0482/BLAN",
            "cantidad_ok": 20569,
            "cantidad_planificada": 89244,
            "cantidad_total": 21776,
            "cod_incidencia": "",
            "cod_maquina": "1660",
            "cod_molde": "817/1000",
            "cod_of": "118977",
            "cod_seccion": "COEX",
            "desc_incidencia": "",
            "descripcion": "MAQ. 66",
            "estado": "PRODUCCION",
            "golpes_hora": 590,
            "operacion": 1,
            "operario": [
                "MARTINEZ PARADINES, LUIS OTILO"
            ],
            "tipo_estmaquina": 2
        },
        "1670": {
            "articulo": "50281 BIDON 0795 /248 05000cc HDPE/AMARILLO",
            "cantidad_ok": 7155,
            "cantidad_planificada": 64512,
            "cantidad_total": 12468,
            "cod_incidencia": "",
            "cod_maquina": "1670",
            "cod_molde": "795/5000",
            "cod_of": "118980",
            "cod_seccion": "COEX",
            "desc_incidencia": "",
            "descripcion": "MAQ. 67",
            "estado": "PRODUCCION",
            "golpes_hora": 241,
            "operacion": 1,
            "operario": [
                "CANALES GOMEZ, MIGUEL"
            ],
            "tipo_estmaquina": 2
        },
        "1680": {
            "articulo": "20235 BOTELLA 0817 /842 01000CC COEX  0482/BLA",
            "cantidad_ok": 84147,
            "cantidad_planificada": 262404,
            "cantidad_total": 88267,
            "cod_incidencia": "",
            "cod_maquina": "1680",
            "cod_molde": "817/1000e",
            "cod_of": "118743",
            "cod_seccion": "COEX",
            "desc_incidencia": "",
            "descripcion": "MAQ. 68",
            "estado": "PRODUCCION",
            "golpes_hora": 807,
            "operacion": 1,
            "operario": [
                "GARCIA HERRAIZ, OSCAR"
            ],
            "tipo_estmaquina": 2
        },
        "1690": {
            "cantidad_ok": 11848567,
            "cantidad_total": 11541457,
            "cod_incidencia": "",
            "cod_maquina": "1690",
            "cod_molde": "782/10000",
            "cod_seccion": "COEX",
            "desc_incidencia": "",
            "descripcion": "MAQ. 69",
            "estado": "PARADA",
            "operario": [],
            "tipo_estmaquina": 0
        },
        "1700": {
            "articulo": "50309 BOTELLA 0411 /9238 00210cc COEX  0672/NA",
            "cantidad_ok": 268310,
            "cantidad_planificada": 418400,
            "cantidad_total": 333532,
            "cod_incidencia": "",
            "cod_maquina": "1700",
            "cod_molde": "411/210",
            "cod_of": "118814",
            "cod_seccion": "COEX",
            "desc_incidencia": "",
            "descripcion": "MAQ. 70",
            "estado": "PRODUCCION",
            "golpes_hora": 1837,
            "operacion": 1,
            "operario": [
                "GUILLAMON MONTES INMACULADA"
            ],
            "tipo_estmaquina": 2
        },
        "1710": {
            "articulo": "60154 BID.783/9230 5L HDPE/AMARILLO (CON ASA)",
            "cantidad_ok": 16327,
            "cantidad_planificada": 80640,
            "cantidad_total": 19090,
            "cod_incidencia": "0102",
            "cod_maquina": "1710",
            "cod_molde": "783/5000c",
            "cod_of": "118725",
            "cod_seccion": "COEX",
            "desc_incidencia": "PUESTA MARCHA",
            "descripcion": "MAQ. 71",
            "estado": "PREPARACION",
            "golpes_hora": 345,
            "operacion": 1,
            "operario": [
                "GARCIA FERRER, IVAN",
                "GARCIA GARCIA, MANUEL",
                "TEJERO ESCRIBA, SERGIO"
            ],
            "tipo_estmaquina": 7
        },
        "2420": {
            "cantidad_ok": 2527248,
            "cantidad_total": 2631457,
            "cod_incidencia": "",
            "cod_maquina": "2420",
            "cod_molde": "55/475",
            "cod_seccion": "SOPL",
            "desc_incidencia": "",
            "descripcion": "MAQ. 42",
            "estado": "PARADA",
            "operario": [],
            "tipo_estmaquina": 0
        },
        "2430": {
            "articulo": "30526 BOTELLA 0818/842 00500cc HDPE/BLANCO",
            "cantidad_ok": 44158,
            "cantidad_planificada": 80520,
            "cantidad_total": 58189,
            "cod_incidencia": "403-4-32",
            "cod_maquina": "2430",
            "cod_molde": "818/500",
            "cod_of": "223374",
            "cod_seccion": "SOPL",
            "desc_incidencia": "AVERIA FLUIDO ELECTRICO",
            "descripcion": "MAQ. 43",
            "estado": "INCIDENCIA",
            "golpes_hora": 858,
            "operacion": 1,
            "operario": [
                "HERNANDEZ DOCO, MIGUEL",
                "MAEZTU GOMEZ, NICOLAS"
            ],
            "tipo_estmaquina": 1
        },
        "2460": {
            "cantidad_ok": 2202424.84,
            "cantidad_total": 2224466.84,
            "cod_incidencia": "",
            "cod_maquina": "2460",
            "cod_molde": "293/750",
            "cod_seccion": "SOPL",
            "desc_incidencia": "",
            "descripcion": "MAQ. 46",
            "estado": "PARADA",
            "operario": [],
            "tipo_estmaquina": 0
        },
        "2470": {
            "cantidad_ok": 29069724,
            "cantidad_total": 29206745,
            "cod_incidencia": "",
            "cod_maquina": "2470",
            "cod_molde": "216/125p",
            "cod_seccion": "SOPL",
            "desc_incidencia": "",
            "descripcion": "MAQ. 47",
            "estado": "PARADA",
            "operario": [],
            "tipo_estmaquina": 0
        },
        "2480": {
            "cantidad_ok": 3813385,
            "cantidad_total": 3830205,
            "cod_incidencia": "",
            "cod_maquina": "2480",
            "cod_molde": null,
            "cod_seccion": "SOPL",
            "desc_incidencia": "",
            "descripcion": "MAQ. 48",
            "estado": "PARADA",
            "operario": [],
            "tipo_estmaquina": 0
        },
        "2490": {
            "articulo": "30342 BOTELLA  216/9146  250cc  HDPE/BLANCO",
            "cantidad_ok": 2664,
            "cantidad_planificada": 10070,
            "cantidad_total": 3187,
            "cod_incidencia": "",
            "cod_maquina": "2490",
            "cod_molde": "216/250p",
            "cod_of": "223487",
            "cod_seccion": "SOPL",
            "desc_incidencia": "",
            "descripcion": "MAQ. 49",
            "estado": "PRODUCCION",
            "golpes_hora": 484,
            "operacion": 1,
            "operario": [
                "LAZARO RODRIGUEZ, MANUEL"
            ],
            "tipo_estmaquina": 2
        },
        "2500": {
            "articulo": "50283 BOTELLA 0406/9228 00100cc HDPE/BLANCO",
            "cantidad_ok": 258712,
            "cantidad_planificada": 304980,
            "cantidad_total": 233536,
            "cod_incidencia": "",
            "cod_maquina": "2500",
            "cod_molde": "406/100",
            "cod_of": "223478",
            "cod_seccion": "SOPL",
            "desc_incidencia": "",
            "descripcion": "MAQ. 50",
            "estado": "PRODUCCION",
            "golpes_hora": 1011,
            "operacion": 1,
            "operario": [
                "CARRASCO, ANTONIA"
            ],
            "tipo_estmaquina": 2
        },
        "2510": {
            "cantidad_ok": 8189592.5,
            "cantidad_total": 8398302,
            "cod_incidencia": "",
            "cod_maquina": "2510",
            "cod_molde": "453/100",
            "cod_seccion": "SOPL",
            "desc_incidencia": "",
            "descripcion": "MAQ. 51",
            "estado": "PARADA",
            "operario": [],
            "tipo_estmaquina": 0
        },
        "2520": {
            "articulo": "60098 BOTELLA 0753/9203 00200cc GLASEADO/NEGRO",
            "cantidad_ok": 81998,
            "cantidad_planificada": 81926,
            "cantidad_total": 100922,
            "cod_incidencia": "",
            "cod_maquina": "2520",
            "cod_molde": "753/200",
            "cod_of": "223491",
            "cod_seccion": "SOPL",
            "desc_incidencia": "",
            "descripcion": "MAQ. 52",
            "estado": "PRODUCCION",
            "golpes_hora": 530,
            "operacion": 1,
            "operario": [
                "FLORES NAVARRO, ESTRELLA                                                                            "
            ],
            "tipo_estmaquina": 2
        },
        "2530": {
            "articulo": "60114 BOTELLA 0763/597 00300cc PETG/VERDE",
            "cantidad_ok": 0,
            "cantidad_planificada": 52877,
            "cantidad_total": 0,
            "cod_incidencia": "",
            "cod_maquina": "2530",
            "cod_molde": "763/300",
            "cod_of": "223509",
            "cod_seccion": "SOPL",
            "desc_incidencia": "",
            "descripcion": "MAQ. 53",
            "estado": "PARADA",
            "golpes_hora": 431,
            "operacion": 1,
            "operario": [],
            "tipo_estmaquina": 0
        },
        "3230": {
            "cantidad_ok": 40602652,
            "cantidad_total": 40939281,
            "cod_incidencia": "",
            "cod_maquina": "3230",
            "cod_molde": "335",
            "cod_seccion": "INYC",
            "desc_incidencia": "",
            "descripcion": "MAQ. 23",
            "estado": "PARADA",
            "operario": [],
            "tipo_estmaquina": 0
        },
        "3240": {
            "articulo": "60115 TAPON BISAGRA OVAL.597 PP/VERDE",
            "cantidad_ok": 1456,
            "cantidad_planificada": 68600,
            "cantidad_total": 1456,
            "cod_incidencia": "",
            "cod_maquina": "3240",
            "cod_molde": "597",
            "cod_of": "324661",
            "cod_seccion": "INYC",
            "desc_incidencia": "",
            "descripcion": "MAQ. 24",
            "estado": "PRODUCCION",
            "golpes_hora": 885,
            "operacion": 1,
            "operario": [
                "PULIDO BALADO, Mª YOLANDA"
            ],
            "tipo_estmaquina": 2
        },
        "3250": {
            "articulo": "30713 TAP.843 C/PRE-C/INDUC. PP/BCO.C/GRABADO",
            "cantidad_ok": 533874,
            "cantidad_planificada": 764280,
            "cantidad_total": 533928,
            "cod_incidencia": "",
            "cod_maquina": "3250",
            "cod_molde": "KS-50b",
            "cod_of": "324654",
            "cod_seccion": "INYC",
            "desc_incidencia": "",
            "descripcion": "MAQ. 25",
            "estado": "PRODUCCION",
            "golpes_hora": 2050,
            "operacion": 1,
            "operario": [
                "PULIDO BALADO, Mª YOLANDA"
            ],
            "tipo_estmaquina": 2
        },
        "4070": {
            "cantidad_ok": 17726132,
            "cantidad_total": 17891541,
            "cod_incidencia": "",
            "cod_maquina": "4070",
            "cod_molde": null,
            "cod_seccion": "SERG",
            "desc_incidencia": "",
            "descripcion": "MAQUINA OMSO-5 UVA (1 CAB)",
            "estado": "PARADA",
            "operario": [],
            "tipo_estmaquina": 0
        },
        "4080": {
            "articulo": "50283 BOTELLA 0406/9228 00100cc HDPE/BLANCO",
            "cantidad_ok": 98408,
            "cantidad_planificada": 125000,
            "cantidad_total": 195396,
            "cod_incidencia": "",
            "cod_maquina": "4080",
            "cod_molde": null,
            "cod_of": "419589",
            "cod_seccion": "SERG",
            "desc_incidencia": "",
            "descripcion": "MAQUINA OMSO-4 UVA (3 CAB)",
            "estado": "PRODUCCION",
            "golpes_hora": 2968,
            "operacion": 1,
            "operario": [
                "ALCOLEA SALVADOR, Mª CARMEN",
                "AREVALO RUIZ, OLGA"
            ],
            "tipo_estmaquina": 2
        },
        "4090": {
            "articulo": "20443 BOTELLA  815/842  1000CC COEX  0482/BLAN",
            "cantidad_ok": 3416,
            "cantidad_planificada": 15984,
            "cantidad_total": 10778,
            "cod_incidencia": "DESC",
            "cod_maquina": "4090",
            "cod_molde": null,
            "cod_of": "419597",
            "cod_seccion": "SERG",
            "desc_incidencia": "PARADA DESCONOCIDA",
            "descripcion": "MAQUINA OMSO-1 UVA (2 CAB)",
            "estado": "INCIDENCIA",
            "golpes_hora": 1335,
            "operacion": 1,
            "operario": [
                "CEDEÑO RODRIGUEZ, Mª PILAR",
                "NOVA RUIZ, Mª ANGELES"
            ],
            "tipo_estmaquina": 1
        },
        "9750": {
            "articulo": "20639 BOTELLA  611/2410  500cc  PET/BLANCO",
            "cantidad_ok": 48991,
            "cantidad_planificada": 63804,
            "cantidad_total": 49152,
            "cod_incidencia": "305",
            "cod_maquina": "9750",
            "cod_molde": "611/500",
            "cod_of": "905930",
            "cod_seccion": "INYC",
            "desc_incidencia": "PRECALENTAMIENTO",
            "descripcion": "MAQ. 75",
            "estado": "PREPARACION",
            "golpes_hora": 774,
            "operacion": 1,
            "operario": [
                "BLANCA RUIZ, FCO. MANUEL"
            ],
            "tipo_estmaquina": 7
        },
        "9760": {
            "articulo": "20609 BOTELLA  610/2410  200cc  PET/BLANCO",
            "cantidad_ok": 13226,
            "cantidad_planificada": 42336,
            "cantidad_total": 13226,
            "cod_incidencia": "",
            "cod_maquina": "9760",
            "cod_molde": "610/200",
            "cod_of": "905936",
            "cod_seccion": "INYC",
            "desc_incidencia": "",
            "descripcion": "MAQ. 76",
            "estado": "PRODUCCION",
            "golpes_hora": 779,
            "operacion": 1,
            "operario": [
                "YUBERO CASAMAYOR, JOSEFINA"
            ],
            "tipo_estmaquina": 2
        },
        "VARIOS": {
            "articulo": "0 TRABAJOS VARIOS",
            "cantidad_ok": 0,
            "cantidad_planificada": 1,
            "cantidad_total": 0,
            "cod_incidencia": "",
            "cod_maquina": "VARIOS",
            "cod_molde": null,
            "cod_of": "TRABS_VARIOS",
            "cod_seccion": "0",
            "desc_incidencia": "",
            "descripcion": "ACTIVIDADES FUERA MÁQUINA",
            "estado": "PRODUCCION",
            "golpes_hora": 0,
            "operacion": 60,
            "operario": [
                "NIÑEROLA FERRER, MARCOS",
                "RUIZ RODRIGUEZ, JOSE MANUEL",
                "PALOMAR ORTIZ, JOSE ENRIQUE"
            ],
            "tipo_estmaquina": 2
        }
    }

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
        //console.log(`maquinas.${prop} = ${maquinas[prop]}`);
        console.log(`${maquina} => `, maquinas[maquina].descripcion);
        //preObject.innerHTML += '<p>' + `${maquina} => ${maquinas[maquina].descripcion}` + '</p>';

        //Bueno
        //preObject.innerHTML += `<div class="item m${maquina}">${maquina} => ${maquinas[maquina].descripcion}</div>`;

        let estado = maquinas[maquina].estado.trim()
        let desc_inc = maquinas[maquina].desc_incidencia.trim()
        let cod_of = maquinas[maquina].cod_of
        let operacion = maquinas[maquina].operacion
        let articulo = maquinas[maquina].articulo
        desc_inc = desc_inc > "" ? desc_inc : estado;

        if (operacion == undefined) {
            operacion = ''
        }

        if (cod_of == undefined) {
            cod_of = ''
        } else {
            cod_of = cod_of + '/' + operacion
        }

        if (articulo == undefined) {
            articulo = ''
        } else {
            let n = articulo.indexOf(" ");
            if (n > 0) {
                articulo = articulo.substring(0, n) + '<br>' + articulo.substring(n + 1, articulo.length);
            }
        }

        ///*
        preObject.innerHTML += `<div class="item m${maquina}" maquina="${maquina}">
                               <div class="item2 cab_maq ${maquinas[maquina].estado.substring(0, 6).toLowerCase()}" maquina="${maquina}"> 
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
                    <div class="item2 cab_maq ${maquinas[maquina].estado.substring(0, 6).toLowerCase()}" maquina="${maquina}"> 
                      <strong class="item3" maquina="${maquina}">${maquina}</strong><br>${desc_inc}
                    </div>
                    <strong class="item3" maquina="${maquina}">${maquinas[maquina].descripcion}</strong>
                </div>`;
        //*/

        //preObject.innerHTML += '<div class="item m' + maquina +'" maquina="' + maquina + '">' + maquina+'</div>'
    }

    preObjectRed.innerHTML = ObjectRed;
    //alert('chuta');

}());