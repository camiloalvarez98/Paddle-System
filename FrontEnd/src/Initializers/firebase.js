import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDrhTSV6-EeTuMyE04cVaQgHPYx0o78Ebc",
    authDomain: "padel-dbf34.firebaseapp.com",
    projectId: "padel-dbf34",
    storageBucket: "padel-dbf34.appspot.com",
    messagingSenderId: "766424782615",
    appId: "1:766424782615:web:77ca471b0e978281d7c952"
})


/**
 * la autenticacion la pueda ultizar en cualquer parte de mi app, la exporto asi para que se importe con el mismo nombre auth
 * 
*/
export const auth = firebase.auth();
export default app;