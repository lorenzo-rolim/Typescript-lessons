/* eslint-disable */
let x = 0; //eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100;

const pessoa = {
  nome: 'Lorenzo' as const,
  sobrenome: 'Rolim',
};

function escolheCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolheCor('Amarelo'));

export default 1;
