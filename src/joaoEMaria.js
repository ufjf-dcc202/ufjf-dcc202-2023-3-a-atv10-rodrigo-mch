let joao = 1;
let maria = 2;

export {getJoao, getMaria, deJoaoParaMaria, deMariaParaJoao}

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
