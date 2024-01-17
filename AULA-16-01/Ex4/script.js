
let desempregadas = []
let salarioMenor2500 = []
let salarioMaior2500 = []
let pessoa = {}



do {
    var pessoaNova = {...pessoa}
    pessoaNova.nome = String(prompt('Digite o nome'))
    pessoaNova.idade = Number(prompt('Digite a idade'))
    pessoaNova.trabalho = (confirm('Está trabalhando?'))
if (pessoaNova.trabalho === true) {
    pessoaNova.salario = Number(prompt('Digite o salario')) 
}

if (pessoaNova.trabalho === false) {
    desempregadas.push(pessoaNova)
} else if (pessoaNova.trabalho === true && pessoaNova.salario > 0 && pessoaNova.salario <= 2500) {
    salarioMenor2500.push(pessoaNova)
} else {
    salarioMaior2500.push(pessoaNova)
}
} while (confirm('Deseja continuar?') === true);

console.log("Pessoas desempregadas:", desempregadas)
console.log("Pessoas empregadas com salários menores que 2500:" , salarioMenor2500)
console.log("Pessoas empregadas com salários maiores que 2500:" , salarioMaior2500)