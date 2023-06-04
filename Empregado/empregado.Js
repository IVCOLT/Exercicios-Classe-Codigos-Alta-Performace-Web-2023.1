/*
Kawã Vinicius Viana - 01536599
Osvaldo Queiroz - 01523854
Lívia Maria - 01520238
Gabryel Santana - 01529087
Leonardo Schneider - 01522463
Luís Mendonça - 01537098 
*/
class Empregado {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  
    aumentarSalario() {
      this.salario *= 1.1;
    }
  
    exibirSalario() {
      return `Novo salário de ${this.nome}: R$${this.salario.toFixed(2)}`;
    }
  }
  
  function aumentarSalario() {
    const nome = document.getElementById('nome').value;
    const salario = parseFloat(document.getElementById('salario').value);
  
    const empregado = new Empregado(nome, salario);
    empregado.aumentarSalario();
  
    const resultado = document.getElementById('resultado');
    resultado.textContent = empregado.exibirSalario();
  }