// Initialize Firebase
var config = {
    apiKey: "AIzaSyBu7XI4XMH3C34q9k8SdBByt0vWQB97mwM",
    authDomain: "proteoip.firebaseapp.com",
    databaseURL: "https://proteoip.firebaseio.com",
    projectId: "proteoip",
    storageBucket: "proteoip.appspot.com",
    messagingSenderId: "337155340154"
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

            quitar_eventos();
            datos_maquinas();
            maquina_modal();
            poner_eventos();

        });
        console.log('lecturas fin');
    });
}