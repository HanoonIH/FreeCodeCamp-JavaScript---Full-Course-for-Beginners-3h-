var a = 4;
var b = 2;
var remainder = 11 % 3;
var fName = "Hanoon";
var lName = " Ibn Haneef";
var fullName = fName + lName;
var myString = "Hadsf\"sdfdfsa\"dfsdf\"sdfsdf\"";
var str1 = `"dsfgfdg'fgdg'dgdfg"`;
var str2 = "first line\n \t \\ \' \" \b";
var str3 = "hanoon" + " ibn haneef";
str3 += " from vallikkunnu";
var firstNameLength = fName.length;
var lastNameLength = lName.length;
var firstLetterOfFirstName = fName[0];
var lastLetterOfLastName = lName[lName.length - 1];
var myArray = ["hih", 19, "vallikkunnu", 7356420465];
var nestedArray = [["hih", 19], ["abh", 21], "nih"];
nestedArray[2] = 2001;
nestedArray2Of2 = nestedArray[1][1];
nestedArray.push(["hanoon", 001], "khair");
var popedFromArray = nestedArray.pop();
var shiftedFromArray = nestedArray.shift();
nestedArray.unshift(["i'm back", 007])


a += 5;
b--;

//console.log(nestedArray)

// madlibs game
//console.log("**madlibs game**");

function wordBlanks(noun, adjective, verb, adverb) {

    var gameResult = "";
    gameResult += "The " + adjective + " " + noun + " " + verb + " to the bathroom " + adverb;

    return gameResult;
}
//console.log(wordBlanks("pig", "round", "jump", "suddenly"));

// functions
function functionWithArgs(x, y) {
    console.log(x - y)
}
//functionWithArgs(23, 3);

// global variables
var globalVariable = 12;

function gv() {
    globalVariable1 = 23;
    //console.log(globalVariable1);
}

function gv1() {
    var globalVariable = 100;
    //console.log(globalVariable1);
    return globalVariable;
}

//gv();
// gv1();
// console.log(gv1());
// console.log(globalVariable);

//return
function returnTest(num) {
    num * 10;
}
//console.log(returnTest(11));

// stand in line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

//console.log("Before: " + JSON.stringify(testArr));
//console.log(nextInLine(testArr, 6));
//console.log("After: " + testArr);


// if 
function checkTrueOrFalse(trueOrFalse) {
    if (trueOrFalse) {
        return "Yes, it is TRUE!";
    }
    return "No, it is FALSE";
}
//console.log(checkTrueOrFalse(false));

function testEqual(val) {
    if (val == 10) {
        return "we are made for each other ☺♥♥";
    }
    return "unfortunately....:( "
}
//console.log(testEqual(10));

function strictEqual(val, val1) {
    if (val === val1) {
        return "equal";
    }
    return "not equal";
}
//console.log(strictEqual("3", 3));

function strictNotEqual(val, val1) {
    if (val !== val1) {
        return "not equal";
    }
    return "equal";
}
//console.log(strictNotEqual("3", 3));

function comparisonOperator(val) {
    if (val > 50) {
        return val + " is greater than 50";
    }
    if (val < 50) {
        return val + " is less than 50";
    }
    return val + " is equal to 50";
}
//console.log(comparisonOperator(50.5));

function comparisonOperator1(val) {
    if (val >= 50) {
        return val + " is greater than or equal to 50";
    }
    if (val <= 50) {
        return val + " is less than or equal to 50";
    }
}
//console.log(comparisonOperator1(50));

function comparisonOperatorAnd(val) {
    if (val < 50 && val > 25) {
        return val + " is greater than 25 and less than 50";
    }
    // if (val < 50) {
    //     return val + " is less than 50";
    // }
    return val + " is not in between 25 and 50";
}
//console.log(comparisonOperatorAnd(25));

function comparisonOperatorOr(val) {
    if (val < 50 || val > 25) {
        return val + " is greater than 25 or less than 50";
    }
    // if (val < 50) {
    //     return val + " is less than 50";
    // }
    // return val + " is not in between 25 and 50";
}
//console.log(comparisonOperatorOr(2));


// if else
function ifElse(val) {
    if (val > 50) {
        return val + " is greater 50";
    } else {
        return val + " is less than 50";
    }
    //return val + " is not in between 25 and 50";
}
//console.log(ifElse(25));

// else if
function ifElseIf(val) {
    if (val > 100) {
        return val + " is greater 100";
    } else if (val > 50 && val < 100) {
        return val + " is greater than 50";
    } else {
        return val + " is not greater than 50 or 100";
    }
}
//console.log(ifElseIf(525));


// chain if else
function chainIfElse(val) {
    if (val < 5) {
        return "tiny";
    } else if (val < 10) {
        return "small";
    } else if (val < 15) {
        return "medium";
    } else if (val < 20) {
        return "large";
    } else if (val < 25) {
        return "huge";
    } else {
        return "pls enter a number less than 25"
    }
}
//console.log(chainIfElse(25));

// Golf Score
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}
//console.log(golfScore(5, 7));

// Switch
var names = ["Alpha", "Beta", "Gamma", "Delta","only upto 4"];
function switchTest(val) {
    switch(val) {
        case 1:
            return names[0];
            break;
        case 2:
            return names[1];
            break;
        case 3:
            return names[2];
            break;  
        case 4:
            return names[3];
            break;    
        default:
            return names[4];          
    }
}
//console.log(switchTest(5));

var names = ["Low", "Medium", "High", "Out of coverage"];
function multipleSwitchSameOutput(val) {
    switch(val) {
        case 1:
        case 2:
        case 3:  
            return names[0];
            break;
        case 4:
        case 5:
        case 6:  
            return names[1];
            break;
        case 7:
        case 8:
        case 9:  
            return names[2];
            break;
    }
}
//console.log(multipleSwitchSameOutput(8));

//boolean return
function booleanReturn(a, b) {
    return a < b;
}
//console.log(booleanReturn(5, 3));

// card game
var count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = "Hold";
    if (count > 0) {
        holdbet = "Bet";
    }
    return count + " " + holdbet;
}
cc(2); cc('K'); cc(5); cc('K'); cc(3);
//console.log(cc(4));

// objects
var ourDog = {
    "name": "Balu",
    "legs": 4,
    "color": ["Black"],
    "breed name": "Theruvu"
};
var myDog = {
    "name": "Arjun",
    "legs": 3,
    "color": ["cream"],
    "breed name": "Bull dog"
};
ourDog.name = "Babu Namboothiri"
var myDogName = myDog.name;
var ourDogLegs = ourDog.legs;
var myDogBreed = myDog["breed name"];
var ourDogName = ourDog["name"];
//console.log(ourDogName);

var playerList = {
    10: "Messi",
    7: "Ronaldo",
    11: "Neymar"
}
var playerNumber = 7;
var playerName = playerList[7];

ourDog.weight = 10.3;
myDog["weight"] = 7.4;

delete ourDog.color;
//console.log(ourDog);

//object lookup
var lookupList = {
    1:"Apple",
    2:"Banana",
    3:"Carrot",
    4:"Dominos",
    5:"Egg"
};
function objectLookUp(val) {
    var result = lookupList[val];
    return result;
}
//console.log(objectLookUp(2));
function checkObject(checkProp) {
    if (lookupList.hasOwnProperty(checkProp)) {
        return lookupList[checkProp];
    } else {
        return "Not found lol :( "
    }
};
//console.log(checkObject(6));

// Objects inside objects
var myVehicle = {
    "car": {
        "hatchBack": {
            "Wagon R": "Gray,Auto,Full option",
            "Mini Cooper": "Red,Manual,Full"
        },
        "suv": {
            "Fortuner": "White,Auto,Second"
        }
    },
    "Commercial":{
        "Pick Up": {
            "Nay Kurkkan": "Yellow, AC, 1 Ton"
        }
    }
};
var myHatchBack = myVehicle.car.hatchBack["Wagon R"];
var myNaiKurkkan = myVehicle.Commercial["Pick Up"]["Nay Kurkkan"];
//console.log(myNaiKurkkan);

// Arrays and Objects compilation
// Array > Object > Array
var myDress =[
    {
        type: "formal",
        list: [
            "Over coat",
            "Pants",
            "Shirt"
        ]
    },
    {
        type: "in-formal",
        list: [
            "T-shirt",
            "Boxer",
            "Slippers"
        ]
    }
];
var myInFormalDress = myDress[1].list[1];
//console.log(myInFormalDress);

var collection = {
    "1": {
        "name": "Hanoon",
        "age": "19",
        "place": "Vallikkunnu",
        "Study": [
            "Pulikkal"
        ],
        "Work": "Calicut"
    },
    "2": {
        "name": "Rajan",
        "age": "29",
        "place": "Mannur",
        "Study": [
            "Kannur"
        ]
    },
    "3": {
        "name": "Fahad",
        "age": "20",
        "place": "Shornoor"
    },
    "4": {
        "name": "Ayyappan",
        "age": "56"
    },
    "5": {
        "name": "Bahu Bali"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection)); // this makes a copy of above for preventing lost wehn change

function updateCollection(number, prop, value) {
    if (value === "") {
        delete collection[number][prop];
    } else if (prop === "Study") {
        collection[number][prop] = collection[number][prop] || [];
        collection[number][prop].push(value);
    } else {
        collection[number][prop] = value;
    }

    return collection;
}
updateCollection("3", "Study", "Oxford");
updateCollection("2", "place", ""); // this deletes prop= place of number= 2
updateCollection("1", "Study", "Pulikkal");
var update = updateCollection("5", "age", "40");
// console.log(update);

// While loop
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
//console.log(myArray);

// For loops
var myArray = [];
for (var i = 50; i > 0; i-=2) {
    myArray.push(i);
}
//console.log(myArray);

myArray = [1, 4, 6, 8, 10];
var myArrayTotal = 0;
for (i = 0; i < myArray.length; i++) {
    myArrayTotal += myArray[i];
}
//console.log(myArrayTotal);

var nestedArray = [[1,2],[3,4],[5,6,7],[8,9],[10]];
var nestedArrayTotal = 0;
for (i = 0; i < nestedArray.length; i++) {
    for (j = 0; j < nestedArray[i].length; j++) {
        nestedArrayTotal += nestedArray[i][j];
    }
}
//console.log(nestedArrayTotal);

// Do...While loop
myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
} while (i < 5)
//console.log(i, myArray);

// Profile Look Up
var contacts = [
    {
        "firstName": "Hanoon",
        "lastName": "Ibn Haneef",
        "number": "7356420465",
        "tags": ["friend","college","msm"]
    },
    {
        "firstName": "Afthab",
        "lastName": "P.T",
        "number": "9567593813",
        "tags": ["friend","keezhayil","msm"]
    },
    {
        "firstName": "Aliyan",
        "lastName": "Lalu",
        "number": "9876543210",
        "tags": ["family","gulf"]
    },
    {
        "firstName": "Hakeem",
        "lastName": "Hakzz",
        "number": "798197514",
        "tags": ["friend","plus 2","cbhss"]
    }
];

function profileSearch(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property :(";
        }
    }
    return "No contact found :( "
}
//console.log(profileSearch("Hakeem", "tags"));

// Random Decimal Number
//console.log(Math.random());

// Random Whole Number
//console.log(Math.floor(Math.random() * 200)); // this will give a random number inbetween 0 and 200 and not 200

// Random Number within a custom Range
//console.log(Math.floor(Math.random() * (range - start + 1)) + start) // where start and range are range // +1 to include range also

function randomRange(start, range) {
    return Math.floor(Math.random() * (range - start)) + start;
}
//console.log(randomRange(5, 10));

// String to Integer conversion using parseInt function
//console.log(parseInt("53453"));

// Binary to integer conversion using parseInt
//console.log(parseInt("10011", 2)); // the 2 after comma tells javascript the given number is binary

// Conditional or Ternary operator ?
// condition ? if-true : if-false;
function checkEqual(a, b) {
    return a === b ? "Sheri" : "thettipoyallo";
    //return a === b;
}
//console.log(checkEqual(1, 1));

// Nested Conditional operator
// condition ? if-true : else-if-condition ? if-true : if-false;
function checkSign(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
//console.log(checkSign(1.3));

// let and var
// let cannot duplicate

// scope of var and let
// let is block scope
function checkScope() {
"use strict";
    var l = "function scope";
    if (true) {
        var l = "block scope";
        console.log("Block scope l is: " + l);
    }
    console.log("function scope l is: " + l);
    return l;
}
//checkScope(); // this will give both "block scope"

function checkScope() {
"use strict";
    let l = "function scope";
    if (true) {
        let l = "block scope";
        console.log("Block scope l is: " + l);
    }
    console.log("function scope l is: " + l);
    return l;
}
//checkScope(); // this will give first "block scope" second "function scope"

// Const
// Read only, no re asignment
// ♥ use CAPITAL to const to identify

//const array
// object mutation
const CONSTARRAY = [1, 2, 3];

//Object.freeze(CONSTARRAY); // this prevent mutation

//CONSTARRAY = [2, 3, 1]; // this will not work
CONSTARRAY[0] = 3; //and THIS
CONSTARRAY[1] = 2; // WILL
CONSTARRAY[2] = 1; // WORK
//console.log(CONSTARRAY);

// Anonymous functions
// var magic = function() {
//     return new Date();
// };
// var magic = () => { //shortened form > arrow functions
//     return new Date();
// };
const magic = () => new Date(); // shortened form > if only one return

// Getting parameters in arrow functions
var myConcat = (arr1, arr2) => arr1.concat(arr2);
//console.log(myConcat([1,2] , [3,4,5]));

// High order arrow functions
const myConstArray = [3, 4.5, 67, -4, 75.4, -34, 7];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}
//console.log(squareList(myConstArray));

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
}) ();
//console.log(increment(14,3));

// Rest operator (...)
//without rest operator
// const sum = (function() {
//     return function sum(x, y, z) {
//         const args = [x, y, z];
//         return args.reduce((a, b) => a + b, 0); // this function sum up all values of array and reutrn the sum
//     };
// }) ();
//console.log(sum(1, 5, 4));

// with rest operator(...)
const sum = (function() {
    return function sum(...args) { // this will convert everything that passed in to a one array called 'args'(any name)
        return args.reduce((a, b) => a + b, 0); // this funcyion sumup all values of array and reutrn the sum
    };
}) ();
//console.log(sum(1, 5, 4, 5, 5));

//Spread operator (...)
// without
const sprdArr1 = ['jan', 'feb', 'mar', 'apr', 'may'];
let sprdArr2;
// (function() {
//     sprdArr2 = sprdArr1; // now array1 equals array2
//     sprdArr1[0] = 'potap'; // this will also change sprdArr2[0]
// }) ();
// //console.log(sprdArr2);

// with spread ...
(function() {
    sprdArr2 = [...sprdArr1]; // now only array1's content is equal to array2
    sprdArr1[0] = 'potap'
}) ();
// console.log(sprdArr2);


//Use Destructuring Assignment to Assign Variables from Objects
// normal way
var obj1 = {x: 12, y:54, z:76}
var a = obj1.x; // a = 12
var b = obj1.y;
var c = obj1.z;
// destructive way
var { x : d, y : e, z : f } = obj1; // d=12, e=54, f=76
//console.log(e);

const AVG_TEMPERATURES = {
    today: 37,
    tomorrow: 36.5
};
function getTemperatureOfTmrw (avgTemp) {
    "use strict";
    // const TEMP_OF_TOMORROW = avgTemp.tomorrow;
    const { tomorrow : TEMP_OF_TOMORROW } = avgTemp;
    return TEMP_OF_TOMORROW; 
}
//console.log(getTemperatureOfTmrw(AVG_TEMPERATURES));


// Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    today: { min: 35, max: 37.4 },
    tomorrow: { min: 36.2, max: 37 }
}
function getMaxTemperatureOfTmrw (forecast) {
    "use strict";
    // const maxTemperatureOfTmrw = forecast.tomorrow.max;
    const { tomorrow : { max : maxTemperatureOfTmrw }} = forecast;
    return maxTemperatureOfTmrw;
}
//console.log(getMaxTemperatureOfTmrw(LOCAL_FORECAST));


// Destructuring Assignment to Assign Variables from Arrays






















// var isLoggedIn = true; 
// var isEmailVerified = true;
// var isCorrectCardInfo = true;
//
// if  (isLoggedIn) {
//     console.log("Logged in successfully.");
//     if (isEmailVerified) {
//         console.log("Email is verified.");
//         if (isCorrectCardInfo) {
//             console.log("Card info is correct.");
//         } else {
//             console.log("Wrong card info");
//         }
//     } else {
//         console.log("Can't verify your email");
//     }
// } else {
//     console.log("Login failed");
// }
//
// if (isLoggedIn && isEmailVerified && isCorrectCardInfo) {
//     console.log("Come on ! Man !");
// } else if (!isLoggedIn) {
//     console.log("Login failed");
// } else if (!isEmailVerified) {
//     console.log("Can't verify your email");
// } else {
//     console.log("Wrong card info");
// }














