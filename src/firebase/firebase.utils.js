import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAZb7BOeBjy8YWdJsOR0fiLZn6X8AMB6rw",
    authDomain: "maps-react-6ae65.firebaseapp.com",
    databaseURL: "https://maps-react-6ae65.firebaseio.com",
    projectId: "maps-react-6ae65",
    storageBucket: "maps-react-6ae65.appspot.com",
    messagingSenderId: "83284038674",
    appId: "1:83284038674:web:78aaada933c58882d1b4cb",
    measurementId: "G-G8RM0FK3VK"
};

firebase.initializeApp(firebaseConfig);

export var firestore = firebase.firestore();

export const addLocations = async (itemKey, objectToAdd) => {
    const collectionRef = firestore.collection(itemKey);

    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })
    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { name, location } = doc.data();
        return {
            id: doc.id,
            name,
            location
        };
    });
    const transformed = transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.name.toLowerCase()] = collection;
        return accumulator;
    }, {});
    return transformed;
};

export default firebase;