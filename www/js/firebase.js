//Initialize Firebase
var config = {
    
};

firebase.initializeApp(config);

/*
function last_update_visor() {

    var dbRef = firebase.database().ref().child('last_update');

    dbRef.on('value', snap => $('#last_update').html(snap.val()));

}
*/

function last_update_visor() {

    var dbRef = firebase.database().ref().child('last_update');
    dbRef.on('value', function(snap) {
        return $('#last_update').html(snap.val());
    });
}

function leer_datos_maquinas() {

    //lecturas continuas
    db = firebase.firestore();

    var doc = db.collection('planta');

    var observer = doc.onSnapshot(docSnapshot => {

        console.log('lecturas ini');
        docSnapshot.forEach((doc) => {

            console.log(doc.data());
            maquinas = doc.data();

            if (typeof(Storage) !== "undefined") {
                //localStorage.maquinas = JSON.stringify(maquinas);
                localStorage.setItem("maquinas", JSON.stringify(maquinas));
            } else {
                // Sorry! No Web Storage support..
            }
            //maquinas = JSON.parse(localStorage.maquinas);
            //localStorage.maquinas = JSON.stringify(maquinas);
            //localStorage.maquinas = localStorage.maquinas || maquinas;

            quitar_eventos();
            datos_maquinas();
            maquina_modal();
            poner_eventos();

        });
        console.log('lecturas fin');
    });
}

function leer_datos_maquina_historico(maquina) {

    //lecturas continuas
    db = firebase.firestore();

    var docRef = db.collection('planta_historico').doc(maquina);

    var observer = docRef.get().then(doc => {

        if (doc.exists) {

            //console.log('lecturas historico ini');
            //console.log(doc.data());
            maquinas_hist = doc.data();
            grafica(maquinas_hist);

        } else {
            // doc.data() will be undefined in this case
            console.log("No existe el documento!");
            error_grafica("No existe");
        }

        console.log('lecturas historico fin');

    }).catch(function(error) {
        console.log("Error Obteniendo el documento:", error);
        error_grafica("Error");
    });
}

/*
ocRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
*/
