/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyBn0IMRFzxed4Eq_3yifffn81wazUB7zvA',
  projectId: 'dinojuice-26ea5'
});

const db = firebase.firestore();

const tanks = [
  {
    store_Number: 366,
    epa_Tank_Id: 2013121703,
    tank_Number: 4,
    grade: 13,
    description: 'DIESEL-AUTO'
  },
  {
    store_Number: 366,
    epa_Tank_Id: 2013121702,
    tank_Number: 3,
    grade: 5,
    description: 'PREMIUM'
  },
  {
    store_Number: 366,
    epa_Tank_Id: 2013121701,
    tank_Number: 1,
    grade: 2,
    description: 'UNLEADED'
  },
  {
    store_Number: 366,
    epa_Tank_Id: 2013121704,
    tank_Number: 5,
    grade: 1,
    description: 'UNL-NO-ETHANOL'
  },
  {
    store_Number: 366,
    epa_Tank_Id: 0,
    tank_Number: 0,
    grade: 0,
    description: 'ALL TANKS'
  }
];

tanks.forEach(function (obj) {
  db.collection('tanks').add({
	  obj
  }).then(function (docRef) {
    console.log('Document written with ID: ', docRef.id);
  })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
});
