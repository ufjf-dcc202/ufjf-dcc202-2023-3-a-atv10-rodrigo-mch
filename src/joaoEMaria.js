let joao = 1;
let maria = 2;

export {getJoao, getMaria, deJoaoParaMaria, deMariaParaJoao}

function setJoao(valor) {
    if (valor >= 0) {
        joao = valor;
} else {
    joao=0;
}
function setMaria(valor) {
    if (valor>= 0) {
        maria = valor;
} else {
    maria = 0;
}

function getMaria (){
    return maria;
}

function getJoao (){
    return joao;
}

function deJoaoParaMaria() {
    joao = 0;
    maria = maria + joao;
}
function deMariaParaJoao() {
    joao = joao + maria;
    maria = 0;
}
