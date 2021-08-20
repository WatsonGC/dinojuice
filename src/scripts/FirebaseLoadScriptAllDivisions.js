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

const divisions = [
    {
        "description": "ARIZONA",
        "division_ID": 5
    },
    {
        "description": "ATLANTA",
        "division_ID": 7
    },
    {
        "description": "ATLANTA",
        "division_ID": 7
    },
    {
        "description": "AUSTIN/SAN ANTONIO",
        "division_ID": 82
    },
    {
        "description": "CAROLINAS",
        "division_ID": 81
    },
    {
        "description": "DALLAS",
        "division_ID": 8
    },
    {
        "description": "DENVER",
        "division_ID": 83
    },
    {
        "description": "DES MOINES",
        "division_ID": 4
    },
    {
        "description": "KANSAS CITY",
        "division_ID": 2
    },
    {
        "description": "REMOTE STORE NETWORK",
        "division_ID": 89
    },
    {
        "description": "ST LOUIS",
        "division_ID": 6
    },
    {
        "description": "TULSA",
        "division_ID": 1
    },
    {
        "description": "WHOLESALE",
        "division_ID": 9
    },
    {
        "description": "WICHITA",
        "division_ID": 3
    }
];

divisions.forEach(function (obj) {
  db.collection('divisions').add({
    description: obj.description,
    division_ID: obj.division_ID
  }).then(function (docRef) {
    console.log('Document written with ID: ', docRef.id);
  })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
});
