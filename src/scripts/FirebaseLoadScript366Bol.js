/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const firebase = require('firebase');
// Required for side-effects .
require('firebase/firestore');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyBn0IMRFzxed4Eq_3yifffn81wazUB7zvA',
  projectId: 'dinojuice-26ea5'
});

const db = firebase.firestore();

const bols = [
  {
    store_Number: 366,
    bol_Number: '908741',
    qt_Grade: 2,
    gross: 7002,
    net: 6928,
    actual: 7047,
    variance: 45,
    epA_Date: '2021-08-02T00:00:00',
    delivery_Date: '2021-08-01T02:31:53',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080101,
    bol_Record_ID: 2021080101,
    json_Delivery_Date: '2021-08-01 02:31:53',
    json_EPA_Date: '2021-08-02 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '908741',
    qt_Grade: 5,
    gross: 1500,
    net: 1480,
    actual: 1509,
    variance: 9,
    epA_Date: '2021-08-02T00:00:00',
    delivery_Date: '2021-08-01T02:31:53',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080101,
    bol_Record_ID: 2021080101,
    json_Delivery_Date: '2021-08-01 02:31:53',
    json_EPA_Date: '2021-08-02 00:00:00',
    tank_Number: 3,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742138',
    qt_Grade: 2,
    gross: 6004,
    net: 5937,
    actual: 6041,
    variance: 37,
    epA_Date: '2021-08-03T00:00:00',
    delivery_Date: '2021-08-02T10:52:00',
    entry_Style: 'Automatic',
    entry_Type: 'Intellifuel',
    bolImage: null,
    delivery_Entry_ID: 2021080201,
    bol_Record_ID: 2021080201,
    json_Delivery_Date: '2021-08-02 10:52:00',
    json_EPA_Date: '2021-08-03 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742138',
    qt_Grade: 5,
    gross: 2501,
    net: 2472,
    actual: 2521,
    variance: 20,
    epA_Date: '2021-08-03T00:00:00',
    delivery_Date: '2021-08-02T10:52:00',
    entry_Style: 'Automatic',
    entry_Type: 'Intellifuel',
    bolImage: null,
    delivery_Entry_ID: 2021080201,
    bol_Record_ID: 2021080201,
    json_Delivery_Date: '2021-08-02 10:52:00',
    json_EPA_Date: '2021-08-03 00:00:00',
    tank_Number: 3,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742184',
    qt_Grade: 13,
    gross: 7001,
    net: 6934,
    actual: 6989,
    variance: -12,
    epA_Date: '2021-08-03T00:00:00',
    delivery_Date: '2021-08-02T18:17:23',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080202,
    bol_Record_ID: 2021080202,
    json_Delivery_Date: '2021-08-02 18:17:23',
    json_EPA_Date: '2021-08-03 00:00:00',
    tank_Number: 4,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '908948',
    qt_Grade: 2,
    gross: 8501,
    net: 8406,
    actual: 8513,
    variance: 12,
    epA_Date: '2021-08-04T00:00:00',
    delivery_Date: '2021-08-03T13:11:23',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080301,
    bol_Record_ID: 2021080301,
    json_Delivery_Date: '2021-08-03 13:11:23',
    json_EPA_Date: '2021-08-04 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742382',
    qt_Grade: 2,
    gross: 7004,
    net: 6893,
    actual: 7076,
    variance: 72,
    epA_Date: '2021-08-05T00:00:00',
    delivery_Date: '2021-08-04T14:52:02',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080401,
    bol_Record_ID: 2021080401,
    json_Delivery_Date: '2021-08-04 14:52:02',
    json_EPA_Date: '2021-08-05 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742382',
    qt_Grade: 5,
    gross: 1500,
    net: 1475,
    actual: 1508,
    variance: 8,
    epA_Date: '2021-08-05T00:00:00',
    delivery_Date: '2021-08-04T14:52:02',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080401,
    bol_Record_ID: 2021080401,
    json_Delivery_Date: '2021-08-04 14:52:02',
    json_EPA_Date: '2021-08-05 00:00:00',
    tank_Number: 3,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '909076',
    qt_Grade: 2,
    gross: 6061,
    net: 6004,
    actual: 6052,
    variance: -9,
    epA_Date: '2021-08-06T00:00:00',
    delivery_Date: '2021-08-05T01:57:13',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080501,
    bol_Record_ID: 2021080501,
    json_Delivery_Date: '2021-08-05 01:57:13',
    json_EPA_Date: '2021-08-06 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '909076',
    qt_Grade: 5,
    gross: 2440,
    net: 2413,
    actual: 2465,
    variance: 25,
    epA_Date: '2021-08-06T00:00:00',
    delivery_Date: '2021-08-05T01:57:13',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080501,
    bol_Record_ID: 2021080501,
    json_Delivery_Date: '2021-08-05 01:57:13',
    json_EPA_Date: '2021-08-06 00:00:00',
    tank_Number: 3,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742578',
    qt_Grade: 2,
    gross: 7004,
    net: 6924,
    actual: 7040,
    variance: 36,
    epA_Date: '2021-08-07T00:00:00',
    delivery_Date: '2021-08-06T12:25:06',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080601,
    bol_Record_ID: 2021080601,
    json_Delivery_Date: '2021-08-06 12:25:06',
    json_EPA_Date: '2021-08-07 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742578',
    qt_Grade: 1,
    gross: 1500,
    net: 1480,
    actual: 1458,
    variance: -42,
    epA_Date: '2021-08-07T00:00:00',
    delivery_Date: '2021-08-06T12:25:06',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080601,
    bol_Record_ID: 2021080601,
    json_Delivery_Date: '2021-08-06 12:25:06',
    json_EPA_Date: '2021-08-07 00:00:00',
    tank_Number: 5,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742689',
    qt_Grade: 2,
    gross: 7004,
    net: 6892,
    actual: 7024,
    variance: 20,
    epA_Date: '2021-08-08T00:00:00',
    delivery_Date: '2021-08-07T16:56:48',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080701,
    bol_Record_ID: 2021080701,
    json_Delivery_Date: '2021-08-07 16:56:48',
    json_EPA_Date: '2021-08-08 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742689',
    qt_Grade: 5,
    gross: 1500,
    net: 1470,
    actual: 1507,
    variance: 7,
    epA_Date: '2021-08-08T00:00:00',
    delivery_Date: '2021-08-07T16:56:48',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080701,
    bol_Record_ID: 2021080701,
    json_Delivery_Date: '2021-08-07 16:56:48',
    json_EPA_Date: '2021-08-08 00:00:00',
    tank_Number: 3,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742769',
    qt_Grade: 2,
    gross: 7006,
    net: 6927,
    actual: 6967,
    variance: -39,
    epA_Date: '2021-08-10T00:00:00',
    delivery_Date: '2021-08-09T01:58:25',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080901,
    bol_Record_ID: 2021080901,
    json_Delivery_Date: '2021-08-09 01:58:25',
    json_EPA_Date: '2021-08-10 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742769',
    qt_Grade: 5,
    gross: 1500,
    net: 1483,
    actual: 1501,
    variance: 1,
    epA_Date: '2021-08-10T00:00:00',
    delivery_Date: '2021-08-09T01:58:25',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080901,
    bol_Record_ID: 2021080901,
    json_Delivery_Date: '2021-08-09 01:58:25',
    json_EPA_Date: '2021-08-10 00:00:00',
    tank_Number: 3,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742862',
    qt_Grade: 2,
    gross: 7003,
    net: 6909,
    actual: 7109,
    variance: 106,
    epA_Date: '2021-08-10T00:00:00',
    delivery_Date: '2021-08-09T20:32:14',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080902,
    bol_Record_ID: 2021080902,
    json_Delivery_Date: '2021-08-09 20:32:14',
    json_EPA_Date: '2021-08-10 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742862',
    qt_Grade: 5,
    gross: 1504,
    net: 1480,
    actual: 1665,
    variance: 161,
    epA_Date: '2021-08-10T00:00:00',
    delivery_Date: '2021-08-09T20:32:14',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021080902,
    bol_Record_ID: 2021080902,
    json_Delivery_Date: '2021-08-09 20:32:14',
    json_EPA_Date: '2021-08-10 00:00:00',
    tank_Number: 3,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '742879',
    qt_Grade: 2,
    gross: 8503,
    net: 8397,
    actual: 8563,
    variance: 60,
    epA_Date: '2021-08-11T00:00:00',
    delivery_Date: '2021-08-10T03:14:18',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081001,
    bol_Record_ID: 2021081001,
    json_Delivery_Date: '2021-08-10 03:14:18',
    json_EPA_Date: '2021-08-11 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '909681',
    qt_Grade: 2,
    gross: 6879,
    net: 6753,
    actual: 6869,
    variance: -10,
    epA_Date: '2021-08-12T00:00:00',
    delivery_Date: '2021-08-11T14:42:33',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081101,
    bol_Record_ID: 2021081101,
    json_Delivery_Date: '2021-08-11 14:42:33',
    json_EPA_Date: '2021-08-12 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '909681',
    qt_Grade: 5,
    gross: 1621,
    net: 1588,
    actual: 1624,
    variance: 3,
    epA_Date: '2021-08-12T00:00:00',
    delivery_Date: '2021-08-11T14:42:33',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081101,
    bol_Record_ID: 2021081101,
    json_Delivery_Date: '2021-08-11 14:42:33',
    json_EPA_Date: '2021-08-12 00:00:00',
    tank_Number: 3,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '909726',
    qt_Grade: 2,
    gross: 8504,
    net: 8392,
    actual: 8553,
    variance: 49,
    epA_Date: '2021-08-13T00:00:00',
    delivery_Date: '2021-08-12T03:00:09',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081201,
    bol_Record_ID: 2021081201,
    json_Delivery_Date: '2021-08-12 03:00:09',
    json_EPA_Date: '2021-08-13 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '743178',
    qt_Grade: 2,
    gross: 6006,
    net: 5896,
    actual: 6053,
    variance: 47,
    epA_Date: '2021-08-13T00:00:00',
    delivery_Date: '2021-08-12T18:32:37',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081202,
    bol_Record_ID: 2021081202,
    json_Delivery_Date: '2021-08-12 18:32:37',
    json_EPA_Date: '2021-08-13 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '743178',
    qt_Grade: 1,
    gross: 2505,
    net: 2451,
    actual: 2454,
    variance: -51,
    epA_Date: '2021-08-13T00:00:00',
    delivery_Date: '2021-08-12T18:32:37',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081202,
    bol_Record_ID: 2021081202,
    json_Delivery_Date: '2021-08-12 18:32:37',
    json_EPA_Date: '2021-08-13 00:00:00',
    tank_Number: 5,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '909902',
    qt_Grade: 2,
    gross: 6064,
    net: 6004,
    actual: 6081,
    variance: 17,
    epA_Date: '2021-08-14T00:00:00',
    delivery_Date: '2021-08-13T14:45:00',
    entry_Style: 'Automatic',
    entry_Type: 'Intellifuel',
    bolImage: null,
    delivery_Entry_ID: 2021081301,
    bol_Record_ID: 2021081301,
    json_Delivery_Date: '2021-08-13 14:45:00',
    json_EPA_Date: '2021-08-14 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '909902',
    qt_Grade: 5,
    gross: 2441,
    net: 2409,
    actual: 2434,
    variance: -7,
    epA_Date: '2021-08-14T00:00:00',
    delivery_Date: '2021-08-13T14:45:00',
    entry_Style: 'Automatic',
    entry_Type: 'Intellifuel',
    bolImage: null,
    delivery_Entry_ID: 2021081301,
    bol_Record_ID: 2021081301,
    json_Delivery_Date: '2021-08-13 14:45:00',
    json_EPA_Date: '2021-08-14 00:00:00',
    tank_Number: 3,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '910008',
    qt_Grade: 2,
    gross: 8507,
    net: 8405,
    actual: 8527,
    variance: 20,
    epA_Date: '2021-08-15T00:00:00',
    delivery_Date: '2021-08-14T16:52:00',
    entry_Style: 'Automatic',
    entry_Type: 'Intellifuel',
    bolImage: null,
    delivery_Entry_ID: 2021081401,
    bol_Record_ID: 2021081401,
    json_Delivery_Date: '2021-08-14 16:52:00',
    json_EPA_Date: '2021-08-15 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '910078',
    qt_Grade: 2,
    gross: 6500,
    net: 6420,
    actual: 6566,
    variance: 66,
    epA_Date: '2021-08-16T00:00:00',
    delivery_Date: '2021-08-15T14:38:10',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081501,
    bol_Record_ID: 2021081501,
    json_Delivery_Date: '2021-08-15 14:38:10',
    json_EPA_Date: '2021-08-16 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '910078',
    qt_Grade: 5,
    gross: 2001,
    net: 1968,
    actual: 2002,
    variance: 1,
    epA_Date: '2021-08-16T00:00:00',
    delivery_Date: '2021-08-15T14:38:10',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081501,
    bol_Record_ID: 2021081501,
    json_Delivery_Date: '2021-08-15 14:38:10',
    json_EPA_Date: '2021-08-16 00:00:00',
    tank_Number: 3,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '743446',
    qt_Grade: 13,
    gross: 7500,
    net: 7434,
    actual: 7494,
    variance: -6,
    epA_Date: '2021-08-17T00:00:00',
    delivery_Date: '2021-08-16T11:50:00',
    entry_Style: 'Automatic',
    entry_Type: 'Intellifuel',
    bolImage: null,
    delivery_Entry_ID: 2021081601,
    bol_Record_ID: 2021081601,
    json_Delivery_Date: '2021-08-16 11:50:00',
    json_EPA_Date: '2021-08-17 00:00:00',
    tank_Number: 4,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '910202',
    qt_Grade: 2,
    gross: 6999,
    net: 6938,
    actual: 6958,
    variance: -41,
    epA_Date: '2021-08-18T00:00:00',
    delivery_Date: '2021-08-17T06:26:57',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081701,
    bol_Record_ID: 2021081701,
    json_Delivery_Date: '2021-08-17 06:26:57',
    json_EPA_Date: '2021-08-18 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '910202',
    qt_Grade: 5,
    gross: 1501,
    net: 1488,
    actual: 1531,
    variance: 30,
    epA_Date: '2021-08-18T00:00:00',
    delivery_Date: '2021-08-17T06:26:57',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081701,
    bol_Record_ID: 2021081701,
    json_Delivery_Date: '2021-08-17 06:26:57',
    json_EPA_Date: '2021-08-18 00:00:00',
    tank_Number: 3,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '910266',
    qt_Grade: 2,
    gross: 8500,
    net: 8395,
    actual: 8546,
    variance: 46,
    epA_Date: '2021-08-18T00:00:00',
    delivery_Date: '2021-08-17T16:28:03',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081702,
    bol_Record_ID: 2021081702,
    json_Delivery_Date: '2021-08-17 16:28:03',
    json_EPA_Date: '2021-08-18 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '910326',
    qt_Grade: 2,
    gross: 6499,
    net: 6433,
    actual: 6514,
    variance: 15,
    epA_Date: '2021-08-19T00:00:00',
    delivery_Date: '2021-08-18T07:50:55',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081801,
    bol_Record_ID: 2021081801,
    json_Delivery_Date: '2021-08-18 07:50:55',
    json_EPA_Date: '2021-08-19 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '910326',
    qt_Grade: 5,
    gross: 1940,
    net: 1918,
    actual: 1954,
    variance: 14,
    epA_Date: '2021-08-19T00:00:00',
    delivery_Date: '2021-08-18T07:50:55',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081801,
    bol_Record_ID: 2021081801,
    json_Delivery_Date: '2021-08-18 07:50:55',
    json_EPA_Date: '2021-08-19 00:00:00',
    tank_Number: 3,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '910377',
    qt_Grade: 2,
    gross: 8500,
    net: 8403,
    actual: 8504,
    variance: 4,
    epA_Date: '2021-08-19T00:00:00',
    delivery_Date: '2021-08-18T15:35:07',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081802,
    bol_Record_ID: 2021081802,
    json_Delivery_Date: '2021-08-18 15:35:07',
    json_EPA_Date: '2021-08-19 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '743747',
    qt_Grade: 2,
    gross: 8505,
    net: 8411,
    actual: 8563,
    variance: 58,
    epA_Date: '2021-08-20T00:00:00',
    delivery_Date: '2021-08-19T13:13:23',
    entry_Style: 'Automatic',
    entry_Type: 'In-Store',
    bolImage: null,
    delivery_Entry_ID: 2021081901,
    bol_Record_ID: 2021081901,
    json_Delivery_Date: '2021-08-19 13:13:23',
    json_EPA_Date: '2021-08-20 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '743825',
    qt_Grade: 2,
    gross: 7003,
    net: 6933,
    actual: 7061,
    variance: 58,
    epA_Date: '2021-08-21T00:00:00',
    delivery_Date: '2021-08-20T06:28:00',
    entry_Style: 'Automatic',
    entry_Type: 'Intellifuel',
    bolImage: null,
    delivery_Entry_ID: 2021082001,
    bol_Record_ID: 2021082001,
    json_Delivery_Date: '2021-08-20 06:28:00',
    json_EPA_Date: '2021-08-21 00:00:00',
    tank_Number: 1,
    sequence: 9997
  },
  {
    store_Number: 366,
    bol_Number: '743825',
    qt_Grade: 5,
    gross: 1500,
    net: 1485,
    actual: 1496,
    variance: -4,
    epA_Date: '2021-08-21T00:00:00',
    delivery_Date: '2021-08-20T06:28:00',
    entry_Style: 'Automatic',
    entry_Type: 'Intellifuel',
    bolImage: null,
    delivery_Entry_ID: 2021082001,
    bol_Record_ID: 2021082001,
    json_Delivery_Date: '2021-08-20 06:28:00',
    json_EPA_Date: '2021-08-21 00:00:00',
    tank_Number: 3,
    sequence: 9997
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
