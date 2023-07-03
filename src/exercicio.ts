function multiplicacao(a: number, b: number): number{
    return a * b;
}

function saudacao(nome: string): string{
    return "Olá " + nome;
}

const resultado = multiplicacao(10, 5);
const mensagem = saudacao("Eduardo");

console.log(resultado);
console.log(mensagem);
