let num = +prompt('Istalgan sonni kiriting')
let doska = ''

for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
        if (i == 0 || j == 0 || i == j || i == num-1 || j == num-1) {
            doska += '[+]'
        } else {
            doska += '   '
        }
    }

    console.log(doska);
    doska = ''
}