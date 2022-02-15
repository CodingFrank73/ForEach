
// ---------- Aufgabe 1_1 ----------
let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

function myDrinks() {
    getraenke.sort();

    getraenke.forEach(e => {
        console.log(e);
        document.write(`${e}<br>`);
    });
};

myDrinks();

// ---------- Aufgabe 1_2 ----------
function upperDrinks() {
    getraenke.sort();

    const newGetraenke = getraenke.map(e => {
        return e.toUpperCase()
    });

    console.log(newGetraenke);
}

upperDrinks();

// ---------- Aufgabe 1_3 ----------
let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

function mult() {
    let newArray = array.map(e => {
        return e * 2
    })

    newArray.sort(function (a, b) { return a - b });

    console.log(newArray);
}

mult();

// ---------- Aufgabe 1_5 ----------
let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

function manipulate() {

    let newNumbers = [];

    checkNumber.forEach(e => {
        if (e % 3 == 0) {
            let a = Number(e + 100);
            console.log(a);
            newNumbers.push(a);
            // console.log(e + 100);
        } else {
            newNumbers.push(e);
        }
    });

    console.log(newNumbers);
}

manipulate();