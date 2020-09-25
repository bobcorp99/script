var a = +prompt('1 - sonni kiriting ')
var b = +prompt('2 - sonni kiriting ')
var c = +prompt('3 - sonni kiriting ')

if((a > c && a < b) || (a > b && a < c)) {
    alert("o'rta qiymat " + a);
} else if((c > a && c < b) || (c > b && c < a)) {
    alert("o'rta qiymat " + c) 
} else if((b > c && b < a) || (b > a && b < c)) {
    alert("o'rta qiymat " + b)
}