import { getMaria, getJoao, deJoaoParaMaria, deMariaParaJoao } from "./joaoEMaria.js";

console.log("MAIN");
let maria = getMaria();
let joao = getJoao();
console.log(maria, joao);

deJoaoParaMaria ();

maria = getMaria();
joao = getJoao();
console.log(maria, joao);
