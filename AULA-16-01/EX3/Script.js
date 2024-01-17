/*3. Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos.*/


let aluno1 = {
    nome: "jader",
    nota1: 10,
    nota2:7,
}
let aluno2 = {
    nome: "Arthur",
    nota1: 8 ,
    nota2: 9,
}

console.log(aluno1, aluno2);

let mediaAluno1 = (aluno1.nota1 + aluno1.nota2) / 2;
console.log(mediaAluno1);

let mediaAluno2 = (aluno2.nota1 + aluno2.nota2) / 2;
console.log(mediaAluno2);

let mediaTurma = (mediaAluno1 + mediaAluno2) / 2;
console.log(mediaTurma)




