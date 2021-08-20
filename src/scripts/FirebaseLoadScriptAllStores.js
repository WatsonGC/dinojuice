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

const stores = [
    {
        "storeNumber": 1,
        "sequence": 9997
    },
    {
        "storeNumber": 2,
        "sequence": 9998
    },
    {
        "storeNumber": 3,
        "sequence": 9998
    },
    {
        "storeNumber": 4,
        "sequence": 9997
    },
    {
        "storeNumber": 5,
        "sequence": 9998
    },
    {
        "storeNumber": 6,
        "sequence": 9998
    },
    {
        "storeNumber": 7,
        "sequence": 9997
    },
    {
        "storeNumber": 8,
        "sequence": 9998
    },
    {
        "storeNumber": 9,
        "sequence": 9997
    },
    {
        "storeNumber": 10,
        "sequence": 9997
    },
    {
        "storeNumber": 11,
        "sequence": 9997
    },
    {
        "storeNumber": 12,
        "sequence": 9996
    },
    {
        "storeNumber": 13,
        "sequence": 9998
    },
    {
        "storeNumber": 14,
        "sequence": 9998
    },
    {
        "storeNumber": 15,
        "sequence": 9998
    },
    {
        "storeNumber": 16,
        "sequence": 9998
    },
    {
        "storeNumber": 17,
        "sequence": 9998
    },
    {
        "storeNumber": 18,
        "sequence": 9998
    },
    {
        "storeNumber": 19,
        "sequence": 9998
    },
    {
        "storeNumber": 20,
        "sequence": 9998
    },
    {
        "storeNumber": 21,
        "sequence": 9998
    },
    {
        "storeNumber": 22,
        "sequence": 9997
    },
    {
        "storeNumber": 23,
        "sequence": 9996
    },
    {
        "storeNumber": 24,
        "sequence": 9997
    },
    {
        "storeNumber": 25,
        "sequence": 9997
    },
    {
        "storeNumber": 26,
        "sequence": 9997
    },
    {
        "storeNumber": 27,
        "sequence": 9997
    },
    {
        "storeNumber": 28,
        "sequence": 9996
    },
    {
        "storeNumber": 29,
        "sequence": 9997
    },
    {
        "storeNumber": 30,
        "sequence": 9997
    },
    {
        "storeNumber": 31,
        "sequence": 9997
    },
    {
        "storeNumber": 32,
        "sequence": 9998
    },
    {
        "storeNumber": 33,
        "sequence": 9997
    },
    {
        "storeNumber": 34,
        "sequence": 9998
    },
    {
        "storeNumber": 36,
        "sequence": 9998
    },
    {
        "storeNumber": 37,
        "sequence": 9996
    },
    {
        "storeNumber": 38,
        "sequence": 9998
    },
    {
        "storeNumber": 40,
        "sequence": 9997
    },
    {
        "storeNumber": 41,
        "sequence": 9998
    },
    {
        "storeNumber": 42,
        "sequence": 9997
    },
    {
        "storeNumber": 44,
        "sequence": 9997
    },
    {
        "storeNumber": 45,
        "sequence": 9998
    },
    {
        "storeNumber": 50,
        "sequence": 9998
    },
    {
        "storeNumber": 51,
        "sequence": 9998
    },
    {
        "storeNumber": 52,
        "sequence": 9998
    },
    {
        "storeNumber": 53,
        "sequence": 9996
    },
    {
        "storeNumber": 55,
        "sequence": 9998
    },
    {
        "storeNumber": 56,
        "sequence": 9996
    },
    {
        "storeNumber": 57,
        "sequence": 9998
    },
    {
        "storeNumber": 58,
        "sequence": 9998
    },
    {
        "storeNumber": 59,
        "sequence": 9997
    },
    {
        "storeNumber": 62,
        "sequence": 9997
    },
    {
        "storeNumber": 66,
        "sequence": 9997
    },
    {
        "storeNumber": 69,
        "sequence": 9997
    },
    {
        "storeNumber": 70,
        "sequence": 9997
    },
    {
        "storeNumber": 71,
        "sequence": 9997
    },
    {
        "storeNumber": 72,
        "sequence": 9998
    },
    {
        "storeNumber": 74,
        "sequence": 9997
    },
    {
        "storeNumber": 75,
        "sequence": 9998
    },
    {
        "storeNumber": 78,
        "sequence": 9998
    },
    {
        "storeNumber": 79,
        "sequence": 9998
    },
    {
        "storeNumber": 80,
        "sequence": 9998
    },
    {
        "storeNumber": 81,
        "sequence": 9998
    },
    {
        "storeNumber": 82,
        "sequence": 9997
    },
    {
        "storeNumber": 83,
        "sequence": 9998
    },
    {
        "storeNumber": 84,
        "sequence": 9997
    },
    {
        "storeNumber": 85,
        "sequence": 9997
    },
    {
        "storeNumber": 90,
        "sequence": 9997
    },
    {
        "storeNumber": 91,
        "sequence": 9996
    },
    {
        "storeNumber": 93,
        "sequence": 9998
    },
    {
        "storeNumber": 94,
        "sequence": 9998
    },
    {
        "storeNumber": 95,
        "sequence": 9998
    },
    {
        "storeNumber": 96,
        "sequence": 9998
    },
    {
        "storeNumber": 97,
        "sequence": 9997
    },
    {
        "storeNumber": 98,
        "sequence": 9999
    },
    {
        "storeNumber": 99,
        "sequence": 9999
    },
    {
        "storeNumber": 101,
        "sequence": 9999
    },
    {
        "storeNumber": 102,
        "sequence": 9998
    },
    {
        "storeNumber": 106,
        "sequence": 9998
    },
    {
        "storeNumber": 107,
        "sequence": 9999
    },
    {
        "storeNumber": 121,
        "sequence": 9999
    },
    {
        "storeNumber": 150,
        "sequence": 9998
    },
    {
        "storeNumber": 151,
        "sequence": 9997
    },
    {
        "storeNumber": 152,
        "sequence": 9997
    },
    {
        "storeNumber": 153,
        "sequence": 9995
    },
    {
        "storeNumber": 155,
        "sequence": 9997
    },
    {
        "storeNumber": 156,
        "sequence": 9998
    },
    {
        "storeNumber": 157,
        "sequence": 9997
    },
    {
        "storeNumber": 159,
        "sequence": 9998
    },
    {
        "storeNumber": 160,
        "sequence": 9998
    },
    {
        "storeNumber": 161,
        "sequence": 9997
    },
    {
        "storeNumber": 162,
        "sequence": 9998
    },
    {
        "storeNumber": 163,
        "sequence": 9996
    },
    {
        "storeNumber": 165,
        "sequence": 9998
    },
    {
        "storeNumber": 166,
        "sequence": 9998
    },
    {
        "storeNumber": 167,
        "sequence": 9998
    },
    {
        "storeNumber": 168,
        "sequence": 9996
    },
    {
        "storeNumber": 169,
        "sequence": 9997
    },
    {
        "storeNumber": 170,
        "sequence": 9997
    },
    {
        "storeNumber": 171,
        "sequence": 9997
    },
    {
        "storeNumber": 172,
        "sequence": 9998
    },
    {
        "storeNumber": 173,
        "sequence": 9997
    },
    {
        "storeNumber": 174,
        "sequence": 9997
    },
    {
        "storeNumber": 175,
        "sequence": 9997
    },
    {
        "storeNumber": 176,
        "sequence": 9996
    },
    {
        "storeNumber": 178,
        "sequence": 9998
    },
    {
        "storeNumber": 179,
        "sequence": 9998
    },
    {
        "storeNumber": 180,
        "sequence": 9996
    },
    {
        "storeNumber": 181,
        "sequence": 9997
    },
    {
        "storeNumber": 182,
        "sequence": 9997
    },
    {
        "storeNumber": 183,
        "sequence": 9998
    },
    {
        "storeNumber": 184,
        "sequence": 9997
    },
    {
        "storeNumber": 185,
        "sequence": 9997
    },
    {
        "storeNumber": 186,
        "sequence": 9998
    },
    {
        "storeNumber": 188,
        "sequence": 9998
    },
    {
        "storeNumber": 189,
        "sequence": 9998
    },
    {
        "storeNumber": 190,
        "sequence": 9997
    },
    {
        "storeNumber": 191,
        "sequence": 9997
    },
    {
        "storeNumber": 193,
        "sequence": 9996
    },
    {
        "storeNumber": 194,
        "sequence": 9997
    },
    {
        "storeNumber": 197,
        "sequence": 9997
    },
    {
        "storeNumber": 198,
        "sequence": 9999
    },
    {
        "storeNumber": 199,
        "sequence": 9998
    },
    {
        "storeNumber": 200,
        "sequence": 9997
    },
    {
        "storeNumber": 201,
        "sequence": 9997
    },
    {
        "storeNumber": 202,
        "sequence": 9998
    },
    {
        "storeNumber": 203,
        "sequence": 9997
    },
    {
        "storeNumber": 204,
        "sequence": 9997
    },
    {
        "storeNumber": 205,
        "sequence": 9997
    },
    {
        "storeNumber": 206,
        "sequence": 9998
    },
    {
        "storeNumber": 208,
        "sequence": 9997
    },
    {
        "storeNumber": 209,
        "sequence": 9997
    },
    {
        "storeNumber": 210,
        "sequence": 9998
    },
    {
        "storeNumber": 212,
        "sequence": 9998
    },
    {
        "storeNumber": 213,
        "sequence": 9998
    },
    {
        "storeNumber": 215,
        "sequence": 9998
    },
    {
        "storeNumber": 216,
        "sequence": 9997
    },
    {
        "storeNumber": 217,
        "sequence": 9997
    },
    {
        "storeNumber": 218,
        "sequence": 9998
    },
    {
        "storeNumber": 219,
        "sequence": 9998
    },
    {
        "storeNumber": 221,
        "sequence": 9997
    },
    {
        "storeNumber": 222,
        "sequence": 9998
    },
    {
        "storeNumber": 224,
        "sequence": 9997
    },
    {
        "storeNumber": 225,
        "sequence": 9998
    },
    {
        "storeNumber": 226,
        "sequence": 9998
    },
    {
        "storeNumber": 227,
        "sequence": 9998
    },
    {
        "storeNumber": 228,
        "sequence": 9998
    },
    {
        "storeNumber": 229,
        "sequence": 9997
    },
    {
        "storeNumber": 230,
        "sequence": 9998
    },
    {
        "storeNumber": 231,
        "sequence": 9998
    },
    {
        "storeNumber": 233,
        "sequence": 9998
    },
    {
        "storeNumber": 234,
        "sequence": 9998
    },
    {
        "storeNumber": 235,
        "sequence": 9998
    },
    {
        "storeNumber": 236,
        "sequence": 9998
    },
    {
        "storeNumber": 238,
        "sequence": 9999
    },
    {
        "storeNumber": 239,
        "sequence": 9998
    },
    {
        "storeNumber": 240,
        "sequence": 9998
    },
    {
        "storeNumber": 241,
        "sequence": 9999
    },
    {
        "storeNumber": 242,
        "sequence": 9998
    },
    {
        "storeNumber": 243,
        "sequence": 9998
    },
    {
        "storeNumber": 245,
        "sequence": 9999
    },
    {
        "storeNumber": 246,
        "sequence": 9999
    },
    {
        "storeNumber": 247,
        "sequence": 9999
    },
    {
        "storeNumber": 248,
        "sequence": 9999
    },
    {
        "storeNumber": 249,
        "sequence": 9999
    },
    {
        "storeNumber": 252,
        "sequence": 9999
    },
    {
        "storeNumber": 259,
        "sequence": 9999
    },
    {
        "storeNumber": 264,
        "sequence": 9999
    },
    {
        "storeNumber": 268,
        "sequence": 9999
    },
    {
        "storeNumber": 269,
        "sequence": 9999
    },
    {
        "storeNumber": 296,
        "sequence": 9999
    },
    {
        "storeNumber": 310,
        "sequence": 9997
    },
    {
        "storeNumber": 313,
        "sequence": 9997
    },
    {
        "storeNumber": 314,
        "sequence": 9997
    },
    {
        "storeNumber": 315,
        "sequence": 9997
    },
    {
        "storeNumber": 316,
        "sequence": 9998
    },
    {
        "storeNumber": 320,
        "sequence": 9998
    },
    {
        "storeNumber": 321,
        "sequence": 9998
    },
    {
        "storeNumber": 322,
        "sequence": 9998
    },
    {
        "storeNumber": 326,
        "sequence": 9997
    },
    {
        "storeNumber": 327,
        "sequence": 9998
    },
    {
        "storeNumber": 328,
        "sequence": 9998
    },
    {
        "storeNumber": 329,
        "sequence": 9997
    },
    {
        "storeNumber": 343,
        "sequence": 9998
    },
    {
        "storeNumber": 345,
        "sequence": 9997
    },
    {
        "storeNumber": 347,
        "sequence": 9998
    },
    {
        "storeNumber": 349,
        "sequence": 9997
    },
    {
        "storeNumber": 353,
        "sequence": 9998
    },
    {
        "storeNumber": 356,
        "sequence": 9997
    },
    {
        "storeNumber": 357,
        "sequence": 9998
    },
    {
        "storeNumber": 358,
        "sequence": 9997
    },
    {
        "storeNumber": 359,
        "sequence": 9998
    },
    {
        "storeNumber": 360,
        "sequence": 9997
    },
    {
        "storeNumber": 363,
        "sequence": 9998
    },
    {
        "storeNumber": 366,
        "sequence": 9997
    },
    {
        "storeNumber": 368,
        "sequence": 9998
    },
    {
        "storeNumber": 369,
        "sequence": 9997
    },
    {
        "storeNumber": 372,
        "sequence": 9998
    },
    {
        "storeNumber": 373,
        "sequence": 9997
    },
    {
        "storeNumber": 374,
        "sequence": 9997
    },
    {
        "storeNumber": 376,
        "sequence": 9998
    },
    {
        "storeNumber": 378,
        "sequence": 9998
    },
    {
        "storeNumber": 383,
        "sequence": 9998
    },
    {
        "storeNumber": 384,
        "sequence": 9997
    },
    {
        "storeNumber": 386,
        "sequence": 9998
    },
    {
        "storeNumber": 388,
        "sequence": 9998
    },
    {
        "storeNumber": 389,
        "sequence": 9998
    },
    {
        "storeNumber": 391,
        "sequence": 9998
    },
    {
        "storeNumber": 394,
        "sequence": 9997
    },
    {
        "storeNumber": 396,
        "sequence": 9998
    },
    {
        "storeNumber": 400,
        "sequence": 9998
    },
    {
        "storeNumber": 401,
        "sequence": 9999
    },
    {
        "storeNumber": 402,
        "sequence": 9999
    },
    {
        "storeNumber": 404,
        "sequence": 9999
    },
    {
        "storeNumber": 405,
        "sequence": 9998
    },
    {
        "storeNumber": 406,
        "sequence": 9999
    },
    {
        "storeNumber": 407,
        "sequence": 9999
    },
    {
        "storeNumber": 408,
        "sequence": 9999
    },
    {
        "storeNumber": 409,
        "sequence": 9999
    },
    {
        "storeNumber": 410,
        "sequence": 9999
    },
    {
        "storeNumber": 411,
        "sequence": 9999
    },
    {
        "storeNumber": 412,
        "sequence": 9999
    },
    {
        "storeNumber": 413,
        "sequence": 9999
    },
    {
        "storeNumber": 414,
        "sequence": 9999
    },
    {
        "storeNumber": 416,
        "sequence": 9999
    },
    {
        "storeNumber": 417,
        "sequence": 9999
    },
    {
        "storeNumber": 418,
        "sequence": 9999
    },
    {
        "storeNumber": 419,
        "sequence": 9998
    },
    {
        "storeNumber": 420,
        "sequence": 9999
    },
    {
        "storeNumber": 421,
        "sequence": 9999
    },
    {
        "storeNumber": 422,
        "sequence": 9999
    },
    {
        "storeNumber": 423,
        "sequence": 9999
    },
    {
        "storeNumber": 425,
        "sequence": 9999
    },
    {
        "storeNumber": 426,
        "sequence": 9999
    },
    {
        "storeNumber": 427,
        "sequence": 9999
    },
    {
        "storeNumber": 429,
        "sequence": 9999
    },
    {
        "storeNumber": 430,
        "sequence": 9999
    },
    {
        "storeNumber": 431,
        "sequence": 9998
    },
    {
        "storeNumber": 432,
        "sequence": 9999
    },
    {
        "storeNumber": 433,
        "sequence": 9999
    },
    {
        "storeNumber": 434,
        "sequence": 9999
    },
    {
        "storeNumber": 435,
        "sequence": 9999
    },
    {
        "storeNumber": 436,
        "sequence": 9999
    },
    {
        "storeNumber": 437,
        "sequence": 9999
    },
    {
        "storeNumber": 438,
        "sequence": 9999
    },
    {
        "storeNumber": 439,
        "sequence": 9999
    },
    {
        "storeNumber": 440,
        "sequence": 9999
    },
    {
        "storeNumber": 441,
        "sequence": 9999
    },
    {
        "storeNumber": 442,
        "sequence": 9999
    },
    {
        "storeNumber": 443,
        "sequence": 9998
    },
    {
        "storeNumber": 444,
        "sequence": 9999
    },
    {
        "storeNumber": 445,
        "sequence": 9999
    },
    {
        "storeNumber": 446,
        "sequence": 9999
    },
    {
        "storeNumber": 447,
        "sequence": 9999
    },
    {
        "storeNumber": 448,
        "sequence": 9999
    },
    {
        "storeNumber": 449,
        "sequence": 9998
    },
    {
        "storeNumber": 451,
        "sequence": 9999
    },
    {
        "storeNumber": 452,
        "sequence": 9999
    },
    {
        "storeNumber": 453,
        "sequence": 9999
    },
    {
        "storeNumber": 454,
        "sequence": 9999
    },
    {
        "storeNumber": 456,
        "sequence": 9999
    },
    {
        "storeNumber": 457,
        "sequence": 9999
    },
    {
        "storeNumber": 458,
        "sequence": 9999
    },
    {
        "storeNumber": 459,
        "sequence": 9999
    },
    {
        "storeNumber": 460,
        "sequence": 9999
    },
    {
        "storeNumber": 461,
        "sequence": 9998
    },
    {
        "storeNumber": 463,
        "sequence": 9999
    },
    {
        "storeNumber": 467,
        "sequence": 9999
    },
    {
        "storeNumber": 468,
        "sequence": 9999
    },
    {
        "storeNumber": 469,
        "sequence": 9999
    },
    {
        "storeNumber": 470,
        "sequence": 9999
    },
    {
        "storeNumber": 471,
        "sequence": 9999
    },
    {
        "storeNumber": 472,
        "sequence": 9999
    },
    {
        "storeNumber": 473,
        "sequence": 9999
    },
    {
        "storeNumber": 474,
        "sequence": 9999
    },
    {
        "storeNumber": 476,
        "sequence": 9999
    },
    {
        "storeNumber": 477,
        "sequence": 9999
    },
    {
        "storeNumber": 478,
        "sequence": 9999
    },
    {
        "storeNumber": 479,
        "sequence": 9999
    },
    {
        "storeNumber": 481,
        "sequence": 9999
    },
    {
        "storeNumber": 482,
        "sequence": 9999
    },
    {
        "storeNumber": 484,
        "sequence": 9999
    },
    {
        "storeNumber": 485,
        "sequence": 9999
    },
    {
        "storeNumber": 486,
        "sequence": 9999
    },
    {
        "storeNumber": 487,
        "sequence": 9999
    },
    {
        "storeNumber": 488,
        "sequence": 9999
    },
    {
        "storeNumber": 490,
        "sequence": 9997
    },
    {
        "storeNumber": 492,
        "sequence": 9999
    },
    {
        "storeNumber": 493,
        "sequence": 9999
    },
    {
        "storeNumber": 494,
        "sequence": 9999
    },
    {
        "storeNumber": 495,
        "sequence": 9999
    },
    {
        "storeNumber": 496,
        "sequence": 9999
    },
    {
        "storeNumber": 497,
        "sequence": 9998
    },
    {
        "storeNumber": 499,
        "sequence": 9999
    },
    {
        "storeNumber": 500,
        "sequence": 9999
    },
    {
        "storeNumber": 513,
        "sequence": 9998
    },
    {
        "storeNumber": 514,
        "sequence": 9998
    },
    {
        "storeNumber": 515,
        "sequence": 9998
    },
    {
        "storeNumber": 516,
        "sequence": 9997
    },
    {
        "storeNumber": 517,
        "sequence": 9998
    },
    {
        "storeNumber": 523,
        "sequence": 9997
    },
    {
        "storeNumber": 527,
        "sequence": 9997
    },
    {
        "storeNumber": 530,
        "sequence": 9997
    },
    {
        "storeNumber": 531,
        "sequence": 9998
    },
    {
        "storeNumber": 534,
        "sequence": 9997
    },
    {
        "storeNumber": 535,
        "sequence": 9997
    },
    {
        "storeNumber": 538,
        "sequence": 9998
    },
    {
        "storeNumber": 541,
        "sequence": 9997
    },
    {
        "storeNumber": 544,
        "sequence": 9998
    },
    {
        "storeNumber": 554,
        "sequence": 9998
    },
    {
        "storeNumber": 559,
        "sequence": 9997
    },
    {
        "storeNumber": 560,
        "sequence": 9998
    },
    {
        "storeNumber": 562,
        "sequence": 9999
    },
    {
        "storeNumber": 576,
        "sequence": 9999
    },
    {
        "storeNumber": 577,
        "sequence": 9999
    },
    {
        "storeNumber": 579,
        "sequence": 9998
    },
    {
        "storeNumber": 580,
        "sequence": 9999
    },
    {
        "storeNumber": 585,
        "sequence": 9999
    },
    {
        "storeNumber": 586,
        "sequence": 9999
    },
    {
        "storeNumber": 587,
        "sequence": 9999
    },
    {
        "storeNumber": 588,
        "sequence": 9999
    },
    {
        "storeNumber": 589,
        "sequence": 9999
    },
    {
        "storeNumber": 591,
        "sequence": 9999
    },
    {
        "storeNumber": 594,
        "sequence": 9999
    },
    {
        "storeNumber": 596,
        "sequence": 9999
    },
    {
        "storeNumber": 598,
        "sequence": 9999
    },
    {
        "storeNumber": 599,
        "sequence": 9999
    },
    {
        "storeNumber": 601,
        "sequence": 9998
    },
    {
        "storeNumber": 602,
        "sequence": 9998
    },
    {
        "storeNumber": 603,
        "sequence": 9999
    },
    {
        "storeNumber": 604,
        "sequence": 9998
    },
    {
        "storeNumber": 605,
        "sequence": 9998
    },
    {
        "storeNumber": 606,
        "sequence": 9998
    },
    {
        "storeNumber": 607,
        "sequence": 9998
    },
    {
        "storeNumber": 608,
        "sequence": 9998
    },
    {
        "storeNumber": 609,
        "sequence": 9998
    },
    {
        "storeNumber": 610,
        "sequence": 9998
    },
    {
        "storeNumber": 611,
        "sequence": 9998
    },
    {
        "storeNumber": 612,
        "sequence": 9998
    },
    {
        "storeNumber": 614,
        "sequence": 9999
    },
    {
        "storeNumber": 615,
        "sequence": 9998
    },
    {
        "storeNumber": 618,
        "sequence": 9999
    },
    {
        "storeNumber": 621,
        "sequence": 9999
    },
    {
        "storeNumber": 622,
        "sequence": 9999
    },
    {
        "storeNumber": 623,
        "sequence": 9997
    },
    {
        "storeNumber": 624,
        "sequence": 9998
    },
    {
        "storeNumber": 625,
        "sequence": 9999
    },
    {
        "storeNumber": 626,
        "sequence": 9998
    },
    {
        "storeNumber": 627,
        "sequence": 9999
    },
    {
        "storeNumber": 628,
        "sequence": 9998
    },
    {
        "storeNumber": 629,
        "sequence": 9998
    },
    {
        "storeNumber": 630,
        "sequence": 9999
    },
    {
        "storeNumber": 632,
        "sequence": 9999
    },
    {
        "storeNumber": 633,
        "sequence": 9999
    },
    {
        "storeNumber": 634,
        "sequence": 9998
    },
    {
        "storeNumber": 635,
        "sequence": 9997
    },
    {
        "storeNumber": 636,
        "sequence": 9998
    },
    {
        "storeNumber": 637,
        "sequence": 9999
    },
    {
        "storeNumber": 638,
        "sequence": 9998
    },
    {
        "storeNumber": 639,
        "sequence": 9998
    },
    {
        "storeNumber": 640,
        "sequence": 9999
    },
    {
        "storeNumber": 641,
        "sequence": 9998
    },
    {
        "storeNumber": 642,
        "sequence": 9998
    },
    {
        "storeNumber": 643,
        "sequence": 9998
    },
    {
        "storeNumber": 644,
        "sequence": 9998
    },
    {
        "storeNumber": 645,
        "sequence": 9998
    },
    {
        "storeNumber": 646,
        "sequence": 9999
    },
    {
        "storeNumber": 647,
        "sequence": 9999
    },
    {
        "storeNumber": 648,
        "sequence": 9998
    },
    {
        "storeNumber": 649,
        "sequence": 9999
    },
    {
        "storeNumber": 650,
        "sequence": 9998
    },
    {
        "storeNumber": 651,
        "sequence": 9999
    },
    {
        "storeNumber": 652,
        "sequence": 9999
    },
    {
        "storeNumber": 654,
        "sequence": 9999
    },
    {
        "storeNumber": 655,
        "sequence": 9998
    },
    {
        "storeNumber": 656,
        "sequence": 9998
    },
    {
        "storeNumber": 657,
        "sequence": 9999
    },
    {
        "storeNumber": 658,
        "sequence": 9999
    },
    {
        "storeNumber": 659,
        "sequence": 9999
    },
    {
        "storeNumber": 660,
        "sequence": 9999
    },
    {
        "storeNumber": 661,
        "sequence": 9998
    },
    {
        "storeNumber": 662,
        "sequence": 9998
    },
    {
        "storeNumber": 663,
        "sequence": 9999
    },
    {
        "storeNumber": 664,
        "sequence": 9999
    },
    {
        "storeNumber": 665,
        "sequence": 9999
    },
    {
        "storeNumber": 668,
        "sequence": 9999
    },
    {
        "storeNumber": 669,
        "sequence": 9999
    },
    {
        "storeNumber": 670,
        "sequence": 9999
    },
    {
        "storeNumber": 671,
        "sequence": 9999
    },
    {
        "storeNumber": 672,
        "sequence": 9999
    },
    {
        "storeNumber": 673,
        "sequence": 9999
    },
    {
        "storeNumber": 674,
        "sequence": 9999
    },
    {
        "storeNumber": 675,
        "sequence": 9999
    },
    {
        "storeNumber": 676,
        "sequence": 9999
    },
    {
        "storeNumber": 678,
        "sequence": 9999
    },
    {
        "storeNumber": 679,
        "sequence": 9999
    },
    {
        "storeNumber": 687,
        "sequence": 9999
    },
    {
        "storeNumber": 688,
        "sequence": 9999
    },
    {
        "storeNumber": 694,
        "sequence": 9999
    },
    {
        "storeNumber": 695,
        "sequence": 9999
    },
    {
        "storeNumber": 697,
        "sequence": 9999
    },
    {
        "storeNumber": 698,
        "sequence": 9999
    },
    {
        "storeNumber": 700,
        "sequence": 9999
    },
    {
        "storeNumber": 701,
        "sequence": 9998
    },
    {
        "storeNumber": 703,
        "sequence": 9997
    },
    {
        "storeNumber": 704,
        "sequence": 9998
    },
    {
        "storeNumber": 705,
        "sequence": 9998
    },
    {
        "storeNumber": 706,
        "sequence": 9997
    },
    {
        "storeNumber": 707,
        "sequence": 9998
    },
    {
        "storeNumber": 708,
        "sequence": 9998
    },
    {
        "storeNumber": 709,
        "sequence": 9998
    },
    {
        "storeNumber": 710,
        "sequence": 9998
    },
    {
        "storeNumber": 711,
        "sequence": 9999
    },
    {
        "storeNumber": 712,
        "sequence": 9999
    },
    {
        "storeNumber": 713,
        "sequence": 9998
    },
    {
        "storeNumber": 714,
        "sequence": 9998
    },
    {
        "storeNumber": 716,
        "sequence": 9999
    },
    {
        "storeNumber": 717,
        "sequence": 9999
    },
    {
        "storeNumber": 718,
        "sequence": 9999
    },
    {
        "storeNumber": 719,
        "sequence": 9999
    },
    {
        "storeNumber": 720,
        "sequence": 9998
    },
    {
        "storeNumber": 721,
        "sequence": 9998
    },
    {
        "storeNumber": 722,
        "sequence": 9999
    },
    {
        "storeNumber": 723,
        "sequence": 9999
    },
    {
        "storeNumber": 724,
        "sequence": 9996
    },
    {
        "storeNumber": 725,
        "sequence": 9997
    },
    {
        "storeNumber": 726,
        "sequence": 9999
    },
    {
        "storeNumber": 727,
        "sequence": 9998
    },
    {
        "storeNumber": 728,
        "sequence": 9998
    },
    {
        "storeNumber": 729,
        "sequence": 9999
    },
    {
        "storeNumber": 730,
        "sequence": 9999
    },
    {
        "storeNumber": 731,
        "sequence": 9998
    },
    {
        "storeNumber": 732,
        "sequence": 9999
    },
    {
        "storeNumber": 733,
        "sequence": 9998
    },
    {
        "storeNumber": 734,
        "sequence": 9998
    },
    {
        "storeNumber": 735,
        "sequence": 9998
    },
    {
        "storeNumber": 736,
        "sequence": 9997
    },
    {
        "storeNumber": 737,
        "sequence": 9999
    },
    {
        "storeNumber": 738,
        "sequence": 9999
    },
    {
        "storeNumber": 739,
        "sequence": 9999
    },
    {
        "storeNumber": 740,
        "sequence": 9998
    },
    {
        "storeNumber": 741,
        "sequence": 9998
    },
    {
        "storeNumber": 742,
        "sequence": 9998
    },
    {
        "storeNumber": 743,
        "sequence": 9998
    },
    {
        "storeNumber": 744,
        "sequence": 9999
    },
    {
        "storeNumber": 745,
        "sequence": 9998
    },
    {
        "storeNumber": 746,
        "sequence": 9999
    },
    {
        "storeNumber": 747,
        "sequence": 9998
    },
    {
        "storeNumber": 748,
        "sequence": 9998
    },
    {
        "storeNumber": 749,
        "sequence": 9998
    },
    {
        "storeNumber": 750,
        "sequence": 9999
    },
    {
        "storeNumber": 751,
        "sequence": 9999
    },
    {
        "storeNumber": 752,
        "sequence": 9998
    },
    {
        "storeNumber": 753,
        "sequence": 9999
    },
    {
        "storeNumber": 754,
        "sequence": 9998
    },
    {
        "storeNumber": 755,
        "sequence": 9998
    },
    {
        "storeNumber": 756,
        "sequence": 9998
    },
    {
        "storeNumber": 757,
        "sequence": 9999
    },
    {
        "storeNumber": 758,
        "sequence": 9998
    },
    {
        "storeNumber": 759,
        "sequence": 9998
    },
    {
        "storeNumber": 760,
        "sequence": 9999
    },
    {
        "storeNumber": 761,
        "sequence": 9999
    },
    {
        "storeNumber": 763,
        "sequence": 9999
    },
    {
        "storeNumber": 764,
        "sequence": 9999
    },
    {
        "storeNumber": 765,
        "sequence": 9999
    },
    {
        "storeNumber": 766,
        "sequence": 9999
    },
    {
        "storeNumber": 768,
        "sequence": 9999
    },
    {
        "storeNumber": 769,
        "sequence": 9999
    },
    {
        "storeNumber": 770,
        "sequence": 9999
    },
    {
        "storeNumber": 771,
        "sequence": 9998
    },
    {
        "storeNumber": 772,
        "sequence": 9999
    },
    {
        "storeNumber": 773,
        "sequence": 9999
    },
    {
        "storeNumber": 774,
        "sequence": 9999
    },
    {
        "storeNumber": 775,
        "sequence": 9999
    },
    {
        "storeNumber": 776,
        "sequence": 9999
    },
    {
        "storeNumber": 777,
        "sequence": 9999
    },
    {
        "storeNumber": 778,
        "sequence": 9999
    },
    {
        "storeNumber": 779,
        "sequence": 9999
    },
    {
        "storeNumber": 780,
        "sequence": 9999
    },
    {
        "storeNumber": 781,
        "sequence": 9999
    },
    {
        "storeNumber": 782,
        "sequence": 9998
    },
    {
        "storeNumber": 783,
        "sequence": 9999
    },
    {
        "storeNumber": 784,
        "sequence": 9999
    },
    {
        "storeNumber": 786,
        "sequence": 9999
    },
    {
        "storeNumber": 787,
        "sequence": 9999
    },
    {
        "storeNumber": 788,
        "sequence": 9999
    },
    {
        "storeNumber": 789,
        "sequence": 9999
    },
    {
        "storeNumber": 790,
        "sequence": 9999
    },
    {
        "storeNumber": 791,
        "sequence": 9999
    },
    {
        "storeNumber": 792,
        "sequence": 9999
    },
    {
        "storeNumber": 793,
        "sequence": 9999
    },
    {
        "storeNumber": 794,
        "sequence": 9999
    },
    {
        "storeNumber": 795,
        "sequence": 9997
    },
    {
        "storeNumber": 796,
        "sequence": 9999
    },
    {
        "storeNumber": 797,
        "sequence": 9999
    },
    {
        "storeNumber": 798,
        "sequence": 9999
    },
    {
        "storeNumber": 799,
        "sequence": 9998
    },
    {
        "storeNumber": 800,
        "sequence": 9999
    },
    {
        "storeNumber": 801,
        "sequence": 9999
    },
    {
        "storeNumber": 802,
        "sequence": 9999
    },
    {
        "storeNumber": 803,
        "sequence": 9999
    },
    {
        "storeNumber": 804,
        "sequence": 9999
    },
    {
        "storeNumber": 805,
        "sequence": 9999
    },
    {
        "storeNumber": 806,
        "sequence": 9999
    },
    {
        "storeNumber": 807,
        "sequence": 9999
    },
    {
        "storeNumber": 808,
        "sequence": 9999
    },
    {
        "storeNumber": 810,
        "sequence": 9999
    },
    {
        "storeNumber": 811,
        "sequence": 9999
    },
    {
        "storeNumber": 812,
        "sequence": 9999
    },
    {
        "storeNumber": 813,
        "sequence": 9999
    },
    {
        "storeNumber": 814,
        "sequence": 9999
    },
    {
        "storeNumber": 815,
        "sequence": 9999
    },
    {
        "storeNumber": 816,
        "sequence": 9999
    },
    {
        "storeNumber": 819,
        "sequence": 9999
    },
    {
        "storeNumber": 820,
        "sequence": 9999
    },
    {
        "storeNumber": 821,
        "sequence": 9999
    },
    {
        "storeNumber": 823,
        "sequence": 9999
    },
    {
        "storeNumber": 824,
        "sequence": 9999
    },
    {
        "storeNumber": 825,
        "sequence": 9999
    },
    {
        "storeNumber": 828,
        "sequence": 9999
    },
    {
        "storeNumber": 829,
        "sequence": 9999
    },
    {
        "storeNumber": 831,
        "sequence": 9999
    },
    {
        "storeNumber": 832,
        "sequence": 9999
    },
    {
        "storeNumber": 834,
        "sequence": 9999
    },
    {
        "storeNumber": 835,
        "sequence": 9999
    },
    {
        "storeNumber": 837,
        "sequence": 9999
    },
    {
        "storeNumber": 838,
        "sequence": 9999
    },
    {
        "storeNumber": 839,
        "sequence": 9999
    },
    {
        "storeNumber": 841,
        "sequence": 9999
    },
    {
        "storeNumber": 842,
        "sequence": 9999
    },
    {
        "storeNumber": 843,
        "sequence": 9999
    },
    {
        "storeNumber": 844,
        "sequence": 9999
    },
    {
        "storeNumber": 845,
        "sequence": 9999
    },
    {
        "storeNumber": 847,
        "sequence": 9999
    },
    {
        "storeNumber": 848,
        "sequence": 9999
    },
    {
        "storeNumber": 849,
        "sequence": 9999
    },
    {
        "storeNumber": 850,
        "sequence": 9999
    },
    {
        "storeNumber": 851,
        "sequence": 9999
    },
    {
        "storeNumber": 852,
        "sequence": 9999
    },
    {
        "storeNumber": 853,
        "sequence": 9998
    },
    {
        "storeNumber": 854,
        "sequence": 9999
    },
    {
        "storeNumber": 855,
        "sequence": 9999
    },
    {
        "storeNumber": 856,
        "sequence": 9999
    },
    {
        "storeNumber": 857,
        "sequence": 9999
    },
    {
        "storeNumber": 858,
        "sequence": 9999
    },
    {
        "storeNumber": 859,
        "sequence": 9999
    },
    {
        "storeNumber": 860,
        "sequence": 9999
    },
    {
        "storeNumber": 861,
        "sequence": 9999
    },
    {
        "storeNumber": 862,
        "sequence": 9999
    },
    {
        "storeNumber": 863,
        "sequence": 9999
    },
    {
        "storeNumber": 864,
        "sequence": 9999
    },
    {
        "storeNumber": 865,
        "sequence": 9999
    },
    {
        "storeNumber": 866,
        "sequence": 9999
    },
    {
        "storeNumber": 867,
        "sequence": 9999
    },
    {
        "storeNumber": 868,
        "sequence": 9999
    },
    {
        "storeNumber": 869,
        "sequence": 9999
    },
    {
        "storeNumber": 870,
        "sequence": 9999
    },
    {
        "storeNumber": 871,
        "sequence": 9999
    },
    {
        "storeNumber": 873,
        "sequence": 9999
    },
    {
        "storeNumber": 874,
        "sequence": 9999
    },
    {
        "storeNumber": 875,
        "sequence": 9999
    },
    {
        "storeNumber": 876,
        "sequence": 9999
    },
    {
        "storeNumber": 877,
        "sequence": 9999
    },
    {
        "storeNumber": 878,
        "sequence": 9999
    },
    {
        "storeNumber": 879,
        "sequence": 9999
    },
    {
        "storeNumber": 880,
        "sequence": 9999
    },
    {
        "storeNumber": 881,
        "sequence": 9998
    },
    {
        "storeNumber": 882,
        "sequence": 9999
    },
    {
        "storeNumber": 883,
        "sequence": 9999
    },
    {
        "storeNumber": 884,
        "sequence": 9999
    },
    {
        "storeNumber": 885,
        "sequence": 9999
    },
    {
        "storeNumber": 886,
        "sequence": 9999
    },
    {
        "storeNumber": 887,
        "sequence": 9999
    },
    {
        "storeNumber": 888,
        "sequence": 9999
    },
    {
        "storeNumber": 889,
        "sequence": 9999
    },
    {
        "storeNumber": 891,
        "sequence": 9999
    },
    {
        "storeNumber": 892,
        "sequence": 9999
    },
    {
        "storeNumber": 893,
        "sequence": 9999
    },
    {
        "storeNumber": 894,
        "sequence": 9999
    },
    {
        "storeNumber": 896,
        "sequence": 9999
    },
    {
        "storeNumber": 897,
        "sequence": 9999
    },
    {
        "storeNumber": 898,
        "sequence": 9999
    },
    {
        "storeNumber": 899,
        "sequence": 9999
    },
    {
        "storeNumber": 900,
        "sequence": 9999
    },
    {
        "storeNumber": 901,
        "sequence": 9999
    },
    {
        "storeNumber": 902,
        "sequence": 9999
    },
    {
        "storeNumber": 903,
        "sequence": 9999
    },
    {
        "storeNumber": 904,
        "sequence": 9999
    },
    {
        "storeNumber": 905,
        "sequence": 9999
    },
    {
        "storeNumber": 906,
        "sequence": 9999
    },
    {
        "storeNumber": 907,
        "sequence": 9999
    },
    {
        "storeNumber": 908,
        "sequence": 9999
    },
    {
        "storeNumber": 909,
        "sequence": 9999
    },
    {
        "storeNumber": 910,
        "sequence": 9999
    },
    {
        "storeNumber": 911,
        "sequence": 9999
    },
    {
        "storeNumber": 912,
        "sequence": 9999
    },
    {
        "storeNumber": 913,
        "sequence": 9999
    },
    {
        "storeNumber": 914,
        "sequence": 9999
    },
    {
        "storeNumber": 915,
        "sequence": 9999
    },
    {
        "storeNumber": 916,
        "sequence": 9999
    },
    {
        "storeNumber": 917,
        "sequence": 9999
    },
    {
        "storeNumber": 918,
        "sequence": 9999
    },
    {
        "storeNumber": 919,
        "sequence": 9999
    },
    {
        "storeNumber": 920,
        "sequence": 9999
    },
    {
        "storeNumber": 921,
        "sequence": 9999
    },
    {
        "storeNumber": 922,
        "sequence": 9999
    },
    {
        "storeNumber": 923,
        "sequence": 9999
    },
    {
        "storeNumber": 924,
        "sequence": 9999
    },
    {
        "storeNumber": 925,
        "sequence": 9999
    },
    {
        "storeNumber": 926,
        "sequence": 9999
    },
    {
        "storeNumber": 927,
        "sequence": 9999
    },
    {
        "storeNumber": 928,
        "sequence": 9999
    },
    {
        "storeNumber": 929,
        "sequence": 9999
    },
    {
        "storeNumber": 930,
        "sequence": 9999
    },
    {
        "storeNumber": 931,
        "sequence": 9999
    },
    {
        "storeNumber": 932,
        "sequence": 9999
    },
    {
        "storeNumber": 933,
        "sequence": 9999
    },
    {
        "storeNumber": 934,
        "sequence": 9999
    },
    {
        "storeNumber": 935,
        "sequence": 9999
    },
    {
        "storeNumber": 936,
        "sequence": 9999
    },
    {
        "storeNumber": 937,
        "sequence": 9999
    },
    {
        "storeNumber": 938,
        "sequence": 9999
    },
    {
        "storeNumber": 939,
        "sequence": 9999
    },
    {
        "storeNumber": 940,
        "sequence": 9999
    },
    {
        "storeNumber": 941,
        "sequence": 9999
    },
    {
        "storeNumber": 942,
        "sequence": 9999
    },
    {
        "storeNumber": 943,
        "sequence": 9999
    },
    {
        "storeNumber": 944,
        "sequence": 9999
    },
    {
        "storeNumber": 946,
        "sequence": 9999
    },
    {
        "storeNumber": 947,
        "sequence": 9999
    },
    {
        "storeNumber": 949,
        "sequence": 9999
    },
    {
        "storeNumber": 950,
        "sequence": 9999
    },
    {
        "storeNumber": 951,
        "sequence": 9999
    },
    {
        "storeNumber": 952,
        "sequence": 9999
    },
    {
        "storeNumber": 953,
        "sequence": 9999
    },
    {
        "storeNumber": 954,
        "sequence": 9999
    },
    {
        "storeNumber": 955,
        "sequence": 9999
    },
    {
        "storeNumber": 956,
        "sequence": 9999
    },
    {
        "storeNumber": 957,
        "sequence": 9999
    },
    {
        "storeNumber": 958,
        "sequence": 9999
    },
    {
        "storeNumber": 959,
        "sequence": 9999
    },
    {
        "storeNumber": 960,
        "sequence": 9999
    },
    {
        "storeNumber": 963,
        "sequence": 9999
    },
    {
        "storeNumber": 964,
        "sequence": 9999
    },
    {
        "storeNumber": 965,
        "sequence": 9999
    },
    {
        "storeNumber": 966,
        "sequence": 9999
    },
    {
        "storeNumber": 967,
        "sequence": 9999
    },
    {
        "storeNumber": 968,
        "sequence": 9999
    },
    {
        "storeNumber": 969,
        "sequence": 9999
    },
    {
        "storeNumber": 970,
        "sequence": 9999
    },
    {
        "storeNumber": 971,
        "sequence": 9999
    },
    {
        "storeNumber": 972,
        "sequence": 9999
    },
    {
        "storeNumber": 973,
        "sequence": 9999
    },
    {
        "storeNumber": 974,
        "sequence": 9999
    },
    {
        "storeNumber": 975,
        "sequence": 9999
    },
    {
        "storeNumber": 976,
        "sequence": 9999
    },
    {
        "storeNumber": 977,
        "sequence": 9999
    },
    {
        "storeNumber": 979,
        "sequence": 9999
    },
    {
        "storeNumber": 980,
        "sequence": 9999
    },
    {
        "storeNumber": 982,
        "sequence": 9999
    },
    {
        "storeNumber": 983,
        "sequence": 9999
    },
    {
        "storeNumber": 984,
        "sequence": 9999
    },
    {
        "storeNumber": 985,
        "sequence": 9999
    },
    {
        "storeNumber": 986,
        "sequence": 9999
    },
    {
        "storeNumber": 987,
        "sequence": 9999
    },
    {
        "storeNumber": 988,
        "sequence": 9999
    },
    {
        "storeNumber": 989,
        "sequence": 9999
    },
    {
        "storeNumber": 990,
        "sequence": 9999
    },
    {
        "storeNumber": 991,
        "sequence": 9999
    },
    {
        "storeNumber": 992,
        "sequence": 9999
    },
    {
        "storeNumber": 993,
        "sequence": 9999
    },
    {
        "storeNumber": 994,
        "sequence": 9999
    },
    {
        "storeNumber": 995,
        "sequence": 9999
    },
    {
        "storeNumber": 997,
        "sequence": 9999
    },
    {
        "storeNumber": 998,
        "sequence": 9999
    },
    {
        "storeNumber": 999,
        "sequence": 9999
    },
    {
        "storeNumber": 1003,
        "sequence": 9999
    },
    {
        "storeNumber": 1004,
        "sequence": 9999
    },
    {
        "storeNumber": 1008,
        "sequence": 9999
    },
    {
        "storeNumber": 1009,
        "sequence": 9999
    },
    {
        "storeNumber": 1010,
        "sequence": 9999
    },
    {
        "storeNumber": 1011,
        "sequence": 9999
    },
    {
        "storeNumber": 1012,
        "sequence": 9999
    },
    {
        "storeNumber": 1016,
        "sequence": 9999
    },
    {
        "storeNumber": 1017,
        "sequence": 9999
    },
    {
        "storeNumber": 1021,
        "sequence": 9999
    },
    {
        "storeNumber": 1022,
        "sequence": 9999
    },
    {
        "storeNumber": 1023,
        "sequence": 9999
    },
    {
        "storeNumber": 1024,
        "sequence": 9999
    },
    {
        "storeNumber": 1025,
        "sequence": 9999
    },
    {
        "storeNumber": 1028,
        "sequence": 9999
    },
    {
        "storeNumber": 1029,
        "sequence": 9999
    },
    {
        "storeNumber": 1030,
        "sequence": 9999
    },
    {
        "storeNumber": 1031,
        "sequence": 9999
    },
    {
        "storeNumber": 1032,
        "sequence": 9999
    },
    {
        "storeNumber": 1042,
        "sequence": 9999
    },
    {
        "storeNumber": 1043,
        "sequence": 9999
    },
    {
        "storeNumber": 1044,
        "sequence": 9999
    },
    {
        "storeNumber": 1045,
        "sequence": 9999
    },
    {
        "storeNumber": 1048,
        "sequence": 9999
    },
    {
        "storeNumber": 1049,
        "sequence": 9999
    },
    {
        "storeNumber": 1051,
        "sequence": 9999
    },
    {
        "storeNumber": 1052,
        "sequence": 9999
    },
    {
        "storeNumber": 1053,
        "sequence": 9999
    },
    {
        "storeNumber": 1054,
        "sequence": 9999
    },
    {
        "storeNumber": 1057,
        "sequence": 9999
    },
    {
        "storeNumber": 1059,
        "sequence": 9999
    },
    {
        "storeNumber": 1060,
        "sequence": 9999
    },
    {
        "storeNumber": 1061,
        "sequence": 9999
    },
    {
        "storeNumber": 1062,
        "sequence": 9999
    },
    {
        "storeNumber": 1065,
        "sequence": 9999
    },
    {
        "storeNumber": 1070,
        "sequence": 9999
    },
    {
        "storeNumber": 1071,
        "sequence": 9999
    },
    {
        "storeNumber": 1072,
        "sequence": 9999
    },
    {
        "storeNumber": 1074,
        "sequence": 9999
    },
    {
        "storeNumber": 1075,
        "sequence": 9999
    },
    {
        "storeNumber": 1076,
        "sequence": 9999
    },
    {
        "storeNumber": 1077,
        "sequence": 9999
    },
    {
        "storeNumber": 1079,
        "sequence": 9999
    },
    {
        "storeNumber": 1082,
        "sequence": 9999
    },
    {
        "storeNumber": 1087,
        "sequence": 9999
    },
    {
        "storeNumber": 1091,
        "sequence": 9999
    },
    {
        "storeNumber": 1092,
        "sequence": 9999
    },
    {
        "storeNumber": 1093,
        "sequence": 9999
    },
    {
        "storeNumber": 1098,
        "sequence": 9999
    },
    {
        "storeNumber": 1099,
        "sequence": 9999
    },
    {
        "storeNumber": 1100,
        "sequence": 9999
    },
    {
        "storeNumber": 1101,
        "sequence": 9999
    },
    {
        "storeNumber": 1102,
        "sequence": 9999
    },
    {
        "storeNumber": 1104,
        "sequence": 9999
    },
    {
        "storeNumber": 1105,
        "sequence": 9999
    },
    {
        "storeNumber": 1106,
        "sequence": 9999
    },
    {
        "storeNumber": 1107,
        "sequence": 9999
    },
    {
        "storeNumber": 1108,
        "sequence": 9999
    },
    {
        "storeNumber": 1109,
        "sequence": 9999
    },
    {
        "storeNumber": 1110,
        "sequence": 9999
    },
    {
        "storeNumber": 1111,
        "sequence": 9999
    },
    {
        "storeNumber": 1112,
        "sequence": 9999
    },
    {
        "storeNumber": 1113,
        "sequence": 9999
    },
    {
        "storeNumber": 1114,
        "sequence": 9999
    },
    {
        "storeNumber": 1115,
        "sequence": 9999
    },
    {
        "storeNumber": 1116,
        "sequence": 9999
    },
    {
        "storeNumber": 1117,
        "sequence": 9999
    },
    {
        "storeNumber": 1118,
        "sequence": 9999
    },
    {
        "storeNumber": 1119,
        "sequence": 9999
    },
    {
        "storeNumber": 1120,
        "sequence": 9999
    },
    {
        "storeNumber": 1121,
        "sequence": 9999
    },
    {
        "storeNumber": 1126,
        "sequence": 9999
    },
    {
        "storeNumber": 1127,
        "sequence": 9999
    },
    {
        "storeNumber": 1128,
        "sequence": 9999
    },
    {
        "storeNumber": 1129,
        "sequence": 9999
    },
    {
        "storeNumber": 1130,
        "sequence": 9999
    },
    {
        "storeNumber": 1131,
        "sequence": 9999
    },
    {
        "storeNumber": 1132,
        "sequence": 9999
    },
    {
        "storeNumber": 1133,
        "sequence": 9999
    },
    {
        "storeNumber": 1134,
        "sequence": 9999
    },
    {
        "storeNumber": 1135,
        "sequence": 9999
    },
    {
        "storeNumber": 1137,
        "sequence": 9999
    },
    {
        "storeNumber": 1138,
        "sequence": 9999
    },
    {
        "storeNumber": 1140,
        "sequence": 9999
    },
    {
        "storeNumber": 1143,
        "sequence": 9999
    },
    {
        "storeNumber": 1144,
        "sequence": 9999
    },
    {
        "storeNumber": 1145,
        "sequence": 9999
    },
    {
        "storeNumber": 1146,
        "sequence": 9999
    },
    {
        "storeNumber": 1147,
        "sequence": 9999
    },
    {
        "storeNumber": 1149,
        "sequence": 9999
    },
    {
        "storeNumber": 1177,
        "sequence": 9999
    },
    {
        "storeNumber": 1178,
        "sequence": 9999
    },
    {
        "storeNumber": 1180,
        "sequence": 9999
    },
    {
        "storeNumber": 1181,
        "sequence": 9999
    },
    {
        "storeNumber": 1198,
        "sequence": 9999
    },
    {
        "storeNumber": 1400,
        "sequence": 9999
    },
    {
        "storeNumber": 1401,
        "sequence": 9999
    },
    {
        "storeNumber": 1402,
        "sequence": 9999
    },
    {
        "storeNumber": 1403,
        "sequence": 9999
    },
    {
        "storeNumber": 1404,
        "sequence": 9999
    },
    {
        "storeNumber": 1406,
        "sequence": 9999
    },
    {
        "storeNumber": 1407,
        "sequence": 9999
    },
    {
        "storeNumber": 1408,
        "sequence": 9999
    },
    {
        "storeNumber": 1409,
        "sequence": 9999
    },
    {
        "storeNumber": 1411,
        "sequence": 9999
    },
    {
        "storeNumber": 1412,
        "sequence": 9999
    },
    {
        "storeNumber": 1415,
        "sequence": 9999
    },
    {
        "storeNumber": 1416,
        "sequence": 9999
    },
    {
        "storeNumber": 1420,
        "sequence": 9999
    },
    {
        "storeNumber": 1422,
        "sequence": 9999
    },
    {
        "storeNumber": 1424,
        "sequence": 9999
    },
    {
        "storeNumber": 1425,
        "sequence": 9999
    },
    {
        "storeNumber": 1428,
        "sequence": 9999
    },
    {
        "storeNumber": 1435,
        "sequence": 9999
    },
    {
        "storeNumber": 1450,
        "sequence": 9999
    },
    {
        "storeNumber": 1452,
        "sequence": 9999
    },
    {
        "storeNumber": 1453,
        "sequence": 9999
    },
    {
        "storeNumber": 1454,
        "sequence": 9999
    },
    {
        "storeNumber": 1456,
        "sequence": 9999
    },
    {
        "storeNumber": 1460,
        "sequence": 9999
    },
    {
        "storeNumber": 1461,
        "sequence": 9999
    },
    {
        "storeNumber": 1463,
        "sequence": 9999
    },
    {
        "storeNumber": 1464,
        "sequence": 9999
    },
    {
        "storeNumber": 1469,
        "sequence": 9999
    },
    {
        "storeNumber": 1470,
        "sequence": 9999
    },
    {
        "storeNumber": 1475,
        "sequence": 9999
    },
    {
        "storeNumber": 1476,
        "sequence": 9999
    },
    {
        "storeNumber": 1479,
        "sequence": 9999
    },
    {
        "storeNumber": 1482,
        "sequence": 9999
    },
    {
        "storeNumber": 1483,
        "sequence": 9999
    },
    {
        "storeNumber": 1487,
        "sequence": 9999
    },
    {
        "storeNumber": 1490,
        "sequence": 9999
    },
    {
        "storeNumber": 1492,
        "sequence": 9999
    },
    {
        "storeNumber": 1493,
        "sequence": 9999
    },
    {
        "storeNumber": 1496,
        "sequence": 9999
    },
    {
        "storeNumber": 1702,
        "sequence": 9999
    },
    {
        "storeNumber": 1710,
        "sequence": 9999
    },
    {
        "storeNumber": 1713,
        "sequence": 9999
    },
    {
        "storeNumber": 1714,
        "sequence": 9999
    },
    {
        "storeNumber": 1715,
        "sequence": 9999
    },
    {
        "storeNumber": 1720,
        "sequence": 9999
    },
    {
        "storeNumber": 1721,
        "sequence": 9999
    },
    {
        "storeNumber": 1722,
        "sequence": 9999
    },
    {
        "storeNumber": 1727,
        "sequence": 9999
    },
    {
        "storeNumber": 1853,
        "sequence": 9999
    },
    {
        "storeNumber": 1863,
        "sequence": 9999
    },
    {
        "storeNumber": 1865,
        "sequence": 9999
    },
    {
        "storeNumber": 1871,
        "sequence": 9999
    },
    {
        "storeNumber": 1875,
        "sequence": 9999
    },
    {
        "storeNumber": 1878,
        "sequence": 9999
    },
    {
        "storeNumber": 1883,
        "sequence": 9999
    },
    {
        "storeNumber": 1886,
        "sequence": 9999
    },
    {
        "storeNumber": 1900,
        "sequence": 9999
    },
    {
        "storeNumber": 1909,
        "sequence": 9999
    },
    {
        "storeNumber": 1917,
        "sequence": 9999
    },
    {
        "storeNumber": 1918,
        "sequence": 9999
    },
    {
        "storeNumber": 1923,
        "sequence": 9999
    },
    {
        "storeNumber": 1935,
        "sequence": 9999
    },
    {
        "storeNumber": 1942,
        "sequence": 9999
    },
    {
        "storeNumber": 1953,
        "sequence": 9999
    },
    {
        "storeNumber": 1964,
        "sequence": 9999
    },
    {
        "storeNumber": 1976,
        "sequence": 9999
    },
    {
        "storeNumber": 4003,
        "sequence": 9999
    },
    {
        "storeNumber": 4005,
        "sequence": 9999
    },
    {
        "storeNumber": 4006,
        "sequence": 9999
    },
    {
        "storeNumber": 4007,
        "sequence": 9999
    },
    {
        "storeNumber": 4009,
        "sequence": 9999
    },
    {
        "storeNumber": 4012,
        "sequence": 9999
    },
    {
        "storeNumber": 4014,
        "sequence": 9999
    },
    {
        "storeNumber": 4016,
        "sequence": 9999
    },
    {
        "storeNumber": 4017,
        "sequence": 9999
    },
    {
        "storeNumber": 4018,
        "sequence": 9999
    },
    {
        "storeNumber": 4025,
        "sequence": 9999
    },
    {
        "storeNumber": 4026,
        "sequence": 9999
    },
    {
        "storeNumber": 4029,
        "sequence": 9999
    },
    {
        "storeNumber": 4034,
        "sequence": 9999
    },
    {
        "storeNumber": 4036,
        "sequence": 9999
    },
    {
        "storeNumber": 4037,
        "sequence": 9999
    },
    {
        "storeNumber": 4040,
        "sequence": 9999
    },
    {
        "storeNumber": 4044,
        "sequence": 9999
    },
    {
        "storeNumber": 4045,
        "sequence": 9999
    },
    {
        "storeNumber": 4047,
        "sequence": 9999
    },
    {
        "storeNumber": 4048,
        "sequence": 9999
    },
    {
        "storeNumber": 4049,
        "sequence": 9999
    },
    {
        "storeNumber": 4051,
        "sequence": 9999
    },
    {
        "storeNumber": 4054,
        "sequence": 9999
    },
    {
        "storeNumber": 4055,
        "sequence": 9999
    },
    {
        "storeNumber": 4056,
        "sequence": 9999
    },
    {
        "storeNumber": 4058,
        "sequence": 9999
    },
    {
        "storeNumber": 4059,
        "sequence": 9999
    },
    {
        "storeNumber": 4062,
        "sequence": 9999
    },
    {
        "storeNumber": 4064,
        "sequence": 9999
    },
    {
        "storeNumber": 4066,
        "sequence": 9999
    },
    {
        "storeNumber": 4067,
        "sequence": 9999
    },
    {
        "storeNumber": 4068,
        "sequence": 9999
    },
    {
        "storeNumber": 4069,
        "sequence": 9999
    },
    {
        "storeNumber": 4070,
        "sequence": 9999
    },
    {
        "storeNumber": 4126,
        "sequence": 9999
    },
    {
        "storeNumber": 4127,
        "sequence": 9999
    },
    {
        "storeNumber": 4128,
        "sequence": 9999
    },
    {
        "storeNumber": 4129,
        "sequence": 9999
    },
    {
        "storeNumber": 4130,
        "sequence": 9999
    },
    {
        "storeNumber": 4132,
        "sequence": 9999
    },
    {
        "storeNumber": 4134,
        "sequence": 9999
    },
    {
        "storeNumber": 4135,
        "sequence": 9999
    },
    {
        "storeNumber": 4137,
        "sequence": 9999
    },
    {
        "storeNumber": 4138,
        "sequence": 9999
    },
    {
        "storeNumber": 4142,
        "sequence": 9999
    },
    {
        "storeNumber": 4143,
        "sequence": 9999
    },
    {
        "storeNumber": 4146,
        "sequence": 9999
    },
    {
        "storeNumber": 4150,
        "sequence": 9999
    },
    {
        "storeNumber": 4153,
        "sequence": 9999
    },
    {
        "storeNumber": 4156,
        "sequence": 9999
    },
    {
        "storeNumber": 4159,
        "sequence": 9999
    },
    {
        "storeNumber": 4161,
        "sequence": 9999
    },
    {
        "storeNumber": 4163,
        "sequence": 9999
    },
    {
        "storeNumber": 7061,
        "sequence": 9999
    },
    {
        "storeNumber": 7135,
        "sequence": 9999
    },
    {
        "storeNumber": 7145,
        "sequence": 9999
    },
    {
        "storeNumber": 7220,
        "sequence": 9999
    },
    {
        "storeNumber": 7901,
        "sequence": 9999
    },
    {
        "storeNumber": 7903,
        "sequence": 9999
    },
    {
        "storeNumber": 7904,
        "sequence": 9999
    }
];

stores.forEach(function (obj) {
  db.collection('stores').add({
    storeNumber: obj.storeNumber,
    sequence: obj.sequence
  }).then(function (docRef) {
    console.log('Document written with ID: ', docRef.id);
  })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
});
