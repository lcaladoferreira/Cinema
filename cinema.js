const moment = require('moment')

console.log(moment().format('MMMM DD YYYY, h:mm:ss a') )
let mensagem = "Olá, imundo"
console.log(mensagem);

let filmeA = {
    codigo: 001,
    titulo: "Batman",
    duracao: 2.5,
    atores: ["Regina Caze", "Gloria Maria"],
    anoDeLancamento: 2020,
    emCartaz: true, 

};

let filmeB = {
    codigo: 002,
    titulo: "Super Man",
    duracao: 1.5,
    atores: ["Bussunda", "Didi Mocó"],
    anoDeLancamento: 2021,
    emCartaz: false, 

};

let catalogo = [filmeA, filmeB];

catalogo.push({
    codigo: 003,
    titulo: "Super Trem",
    duracao: 1.3,
    atores: ["Ator Doido", "Ator Normal"],
    anoDeLancamento: 2028,
    emCartaz: false, 

})


console.log(catalogo)

function buscarFilme (codigo){
    return catalogo.find(filme => filme.codigo == codigo)
}
let filmeDesejado = buscarFilme(003)

console.log(filmeDesejado)

function alterarStatusEmCartaz(codigo, novoStatus) {
    let index = catalogo.findIndex (filme => filme.codigo == codigo)
    catalogo [index].emCartaz = novoStatus
    return catalogo[index]
}

let altera = alterarStatusEmCartaz(002, true);

console.log(altera)