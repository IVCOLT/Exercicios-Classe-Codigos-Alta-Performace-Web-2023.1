/*
Kawã Vinicius Viana - 01536599
Osvaldo Queiroz - 01523854
Lívia Maria - 01520238
Gabryel Santana - 01529087
Leonardo Schneider - 01522463
Luís Mendonça - 01537098 
*/
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  class Cachorro extends Animal {
    latir() {
      const resultado = document.getElementById('resultado');
      resultado.textContent = `${this.nome} está latindo: Au au!`;
    }
  }
  
  const cachorro1 = new Cachorro("O cachorro");