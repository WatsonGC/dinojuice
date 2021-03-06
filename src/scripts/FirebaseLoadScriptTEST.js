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

const bols = [
  {
    store_Number: 1076,
    bol_Number: '1226329',
    qt_Grade: 2,
    gross: 4000,
    net: 3947,
    actual: 4015,
    variance: 15,
    epA_Date: '2021-08-21T00:00:00',
    delivery_Date: '2021-08-20T09:25:00',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021082001,
    bol_Record_ID: 2021082001,
    json_Delivery_Date: '2021-08-20 09:25:00',
    json_EPA_Date: '2021-08-21 00:00:00',
    tank_Number: 0,
    sequence: 9999
  },
  {
    store_Number: 1076,
    bol_Number: '1226329',
    qt_Grade: 5,
    gross: 4500,
    net: 4449,
    actual: 4516,
    variance: 16,
    epA_Date: '2021-08-21T00:00:00',
    delivery_Date: '2021-08-20T09:25:00',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021082001,
    bol_Record_ID: 2021082001,
    json_Delivery_Date: '2021-08-20 09:25:00',
    json_EPA_Date: '2021-08-21 00:00:00',
    tank_Number: 0,
    sequence: 9999
  },
  {
    store_Number: 1104,
    bol_Number: '173577',
    qt_Grade: 2,
    gross: 9000,
    net: 8881,
    actual: 9031,
    variance: 31,
    epA_Date: '2021-08-21T00:00:00',
    delivery_Date: '2021-08-20T09:22:03',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021082002,
    bol_Record_ID: 2021082002,
    json_Delivery_Date: '2021-08-20 09:22:03',
    json_EPA_Date: '2021-08-21 00:00:00',
    tank_Number: 0,
    sequence: 9999
  },
  {
    store_Number: 1092,
    bol_Number: '14075103',
    qt_Grade: 8,
    gross: 7500,
    net: 7415,
    actual: 7452,
    variance: -48,
    epA_Date: '2021-08-21T00:00:00',
    delivery_Date: '2021-08-20T09:22:00',
    entry_Style: 'Automatic',
    entry_Type: 'Intellifuel',
    bolImage: null,
    delivery_Entry_ID: 2021082004,
    bol_Record_ID: 2021082004,
    json_Delivery_Date: '2021-08-20 09:22:00',
    json_EPA_Date: '2021-08-21 00:00:00',
    tank_Number: 0,
    sequence: 9999
  },
  {
    store_Number: 766,
    bol_Number: '989688',
    qt_Grade: 8,
    gross: 7501,
    net: 7436,
    actual: 7355,
    variance: -146,
    epA_Date: '2021-08-21T00:00:00',
    delivery_Date: '2021-08-20T09:16:33',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021082001,
    bol_Record_ID: 2021082001,
    json_Delivery_Date: '2021-08-20 09:16:33',
    json_EPA_Date: '2021-08-21 00:00:00',
    tank_Number: 0,
    sequence: 9999
  },
  {
    store_Number: 711,
    bol_Number: '989692',
    qt_Grade: 2,
    gross: 5501,
    net: 5429,
    actual: 5589,
    variance: 88,
    epA_Date: '2021-08-21T00:00:00',
    delivery_Date: '2021-08-20T09:11:36',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021082001,
    bol_Record_ID: 2021082001,
    json_Delivery_Date: '2021-08-20 09:11:36',
    json_EPA_Date: '2021-08-21 00:00:00',
    tank_Number: 0,
    sequence: 9999
  },
  {
    store_Number: 711,
    bol_Number: '989692',
    qt_Grade: 5,
    gross: 3499,
    net: 3466,
    actual: 3508,
    variance: 9,
    epA_Date: '2021-08-21T00:00:00',
    delivery_Date: '2021-08-20T09:11:36',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021082001,
    bol_Record_ID: 2021082001,
    json_Delivery_Date: '2021-08-20 09:11:36',
    json_EPA_Date: '2021-08-21 00:00:00',
    tank_Number: 0,
    sequence: 9999
  },
  {
    store_Number: 821,
    bol_Number: '450475',
    qt_Grade: 2,
    gross: 9000,
    net: 8876,
    actual: 9045,
    variance: 45,
    epA_Date: '2021-08-21T00:00:00',
    delivery_Date: '2021-08-20T09:09:13',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021082001,
    bol_Record_ID: 2021082001,
    json_Delivery_Date: '2021-08-20 09:09:13',
    json_EPA_Date: '2021-08-21 00:00:00',
    tank_Number: 0,
    sequence: 9999
  },
  {
    store_Number: 769,
    bol_Number: '989689',
    qt_Grade: 2,
    gross: 7004,
    net: 6912,
    actual: 6937,
    variance: -67,
    epA_Date: '2021-08-21T00:00:00',
    delivery_Date: '2021-08-20T09:03:07',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021082001,
    bol_Record_ID: 2021082001,
    json_Delivery_Date: '2021-08-20 09:03:07',
    json_EPA_Date: '2021-08-21 00:00:00',
    tank_Number: 0,
    sequence: 9999
  },
  {
    store_Number: 769,
    bol_Number: '989689',
    qt_Grade: 5,
    gross: 2000,
    net: 1971,
    actual: 1970,
    variance: -30,
    epA_Date: '2021-08-21T00:00:00',
    delivery_Date: '2021-08-20T09:03:07',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021082001,
    bol_Record_ID: 2021082001,
    json_Delivery_Date: '2021-08-20 09:03:07',
    json_EPA_Date: '2021-08-21 00:00:00',
    tank_Number: 0,
    sequence: 9999
  }
];

bols.forEach(function (obj) {
  db.collection('bols').add({
    store_Number: obj.store_Number,
    bol_Number: obj.bol_Number,
    qt_Grade: obj.qt_Grade,
    gross: obj.gross,
    net: obj.net,
    actual: obj.actual,
    variance: obj.variance,
    epA_Date: obj.epA_Date,
    delivery_Date: obj.delivery_Date,
    entry_Style: obj.entry_Style,
    entry_Type: obj.entry_Type,
    bolImage: obj.bolImage,
    delivery_Entry_ID: obj.delivery_Entry_ID,
    bol_Record_ID: obj.bol_Record_ID,
    json_Delivery_Date: obj.json_Delivery_Date,
    json_EPA_Date: obj.json_EPA_Date,
    tank_Number: obj.tank_Number,
    sequence: obj.sequence
  }).then(function (docRef) {
    console.log('Document written with ID: ', docRef.id);
  })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
});
