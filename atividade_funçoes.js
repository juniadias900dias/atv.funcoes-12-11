
// Exercício 1
function boasVindas() {
    console.log("Bem-vindo ao Sistema Escolar!");
}
boasVindas();
boasVindas();

// Exercício 2
function mostrarCurso() {
    console.log("Curso: Desenvolvimento de Sistemas");
    console.log("Instituição: Escola de Tecnologia");
}
mostrarCurso();
boasVindas();
mostrarCurso();

// Exercício 3
function saudarAluno(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo!`);
}
saudarAluno("Davi");
saudarAluno("Junia");
saudarAluno("Christina");

// Exercício 4
function mostrarAluno(nome, curso) {
    console.log(`Aluno: ${nome}`);
    console.log(`Curso: ${curso}`);
}
mostrarAluno("Cristiano", "Programação");
mostrarAluno("Antônio", "Design");
mostrarAluno("Lucas", "Redes");

// Exercício 5
function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    console.log(`Média do aluno: ${media}`);
}
calcularMedia(80, 60);

// Exercício 6
function adicionarPontos(nota, pontosExtras) {
    let notaAtualizada = nota + pontosExtras;
    console.log(`Nota atualizada: ${notaAtualizada}`);
}
adicionarPontos(65, 10);

// Exercício 7
function verificarAprovacao(media) {
    if (media >= 60) {
        console.log("Aluno aprovado!");
    } else {
        console.log("Aluno reprovado!");
    }
}
verificarAprovacao(85);
verificarAprovacao(45);
verificarAprovacao(60);

// Exercício 8
function classificarAluno(nota) {
    if (nota >= 90 && nota <= 100) {
        console.log("Excelente");
    } else if (nota >= 70 && nota <= 89) {
        console.log("Bom");
    } else if (nota >= 60 && nota <= 69) {
        console.log("Regular");
    } else if (nota >= 0 && nota < 60) {
        console.log("Insuficiente");
    }
}
classificarAluno(95);
classificarAluno(75);
classificarAluno(65);
classificarAluno(50);

// Exercício 9
function calcularMensalidade(valor) {
    let desconto = valor * 0.10;
    return valor - desconto;
}
let valorFinal = calcularMensalidade(500);
console.log(valorFinal);

// Exercício 10
function calcularMediaRetorno(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function avaliarAluno(nome, nota1, nota2) {
    let media = calcularMediaRetorno(nota1, nota2);
    let situacao = media >= 60 ? "Aprovado" : "Reprovado";
    console.log(`Aluno: ${nome}`);
    console.log(`Média: ${media}`);
    console.log(`Situação: ${situacao}`);
}
avaliarAluno("Lucas", 80, 70);
