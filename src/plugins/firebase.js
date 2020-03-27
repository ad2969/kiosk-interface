import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

if (!firebase.apps.length) {
    const config = {
        apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
        authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
        projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: "1:995671840371:web:a763cc3bea651b2b9a3c06",
        measurementId: "G-BXDE9R68H3"
    }
    firebase.initializeApp(config)
}

const db = firebase.firestore()

const settings = {
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
}
db.settings(settings)
db.enablePersistence().catch(
    function (err) {
        console.log(err)
    }
)
const cprTrialsCollection = 'cpr_trials'
firebase.analytics()

const fireDb = {
    createDocument: async (prop) => {
        const ref = db.collection(cprTrialsCollection)
        await ref.doc().set(prop)
        return true
    },
}

export default fireDb
