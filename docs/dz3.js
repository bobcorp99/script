var a = +prompt('1 - sonni kiriting ')
var b = +prompt('2 - sonni kiriting ')
var c = +prompt('3 - sonni kiriting ')

if( b < a < c && c < a < b) {
    alert("o'rta qiymat " + a);
} else if(b < c < a && a < c < b) {
    alert("o'rta qiymat " + c) 
} else if(a < b < c && c < b < a) {
    alert("o'rta qiymat " + b)
}