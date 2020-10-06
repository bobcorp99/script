let humanSpeed = 5
let sharkSpeed = 15

alert('Insonning tezligi = 5\nAkulaning tezligi = 15')

let pontoonDistance = +prompt('Insondan qirgoqqacha masofani kiriting')

alert('Insonning tezligi = 5\nAkulaning tezligi = 15\nInsondan qirgoqqacha masofa = ' + pontoonDistance)

let sharkDistance = +prompt('Akulaning odamgacha masofasi')

alert('Insonning tezligi = 5\nAkulaning tezligi = 15\nInsondan qirgoqqacha masofa = ' + pontoonDistance + '\nAkulaning odamgacha masofasi = ' + sharkDistance)

let dolphin = +prompt('Delfin bormi, yoqmi')

alert('Insonning tezligi = 5\nAkulaning tezligi = 15\nInsondan qirgoqqacha masofa = ' + pontoonDistance + '\nAkulaning odamgacha masofasi = ' + sharkDistance + '\nDelfin bormi, yoqmi: ' + dolphin)

if (dolphin == true) {
    humanSpeed = humanSpeed * 2
} else {
    humanSpeed = humanSpeed
}

let timeOne = pontoonDistance / humanSpeed
let timeTwo = sharkDistance / sharkSpeed

let javob = (timeOne > timeTwo) ?'Shark bait':'Alive';
alert(javob)