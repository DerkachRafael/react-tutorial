import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCVxyb_8xD80QkaNrdS-mBQJXAJregfSvs",
    authDomain: "react-wes-tutorial.firebaseapp.com",
    databaseURL: "https://react-wes-tutorial.firebaseio.com",
})


const base = Rebase.createClass(firebase.database());

export {
    base
}