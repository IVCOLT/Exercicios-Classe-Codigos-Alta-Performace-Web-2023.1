/*
Kawã Vinicius Viana - 01536599
Osvaldo Queiroz - 01523854
Lívia Maria - 01520238
Gabryel Santana - 01529087
Leonardo Schneider - 01522463
Luís Mendonça - 01537098 
*/
class Produto {
    constructor(nome, descricao, preco) {
      this.nome = nome;
      this.descricao = descricao;
      this.preco = preco;
    }
  
    aumentarPreco(valor) {
      this.preco += valor;
    }
  }
  
  function aumentarPreco() {
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const aumento = parseFloat(document.getElementById('aumento').value);
  
    const produto1 = new Produto(nome, descricao, preco);
    produto1.aumentarPreco(aumento);
  
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Novo preço do produto: R$${produto1.preco.toFixed(2)}`;
  }