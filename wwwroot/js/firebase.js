// config SDK
const firebaseConfig = {
    apiKey: "AIzaSyCz01zlwSeLQv9xZikTDd0FxMbHkSLNR3Q",
    authDomain: "financialplannerapi.firebaseapp.com",
    databaseURL: "https://financialplannerapi-default-rtdb.firebaseio.com",
    projectId: "financialplannerapi",
    storageBucket: "financialplannerapi.appspot.com",
    messagingSenderId: "216295449023",
    appId: "1:216295449023:web:7ee4c554a9f6e1b08e010a"
  };

 
   // Inicializando o Firebase
   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const database = firebase.database();

   
   // Função para verificar se o usuário já está cadastrado
   function checkIfUserExists(email) {
    return firebase.database().ref('users').orderByChild('email').equalTo(email).once('value')
        .then(function(snapshot) {
            return snapshot.exists();
        })
        .catch(function(error) {
            console.error("Erro ao verificar usuário: ", error);
            return false;
        });
}

    // Função JavaScript para salvar o usuário no Firebase Realtime Database
    function saveUserToRealtimeDatabase(name, email) {
        const database = firebase.database();
        const newUserRef = database.ref('users').push();
        newUserRef.set({
            name: name,
            email: email
        }).then(() => {
            console.log("Usuário salvo com sucesso no Realtime Database.");
        }).catch((error) => {
            console.error("Erro ao salvar usuário: ", error);
        });
    }
