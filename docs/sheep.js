let sheep = +prompt("Qo'ylar sonini kiriting:")
let javob = ''
for (i = 1; i <= sheep; i++) {
    javob = (i == 1) ? (i + " qo'y...") : (i + " qo'ylar...")
    console.log(javob);
}