//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Definição da classe ItemMagico
class ItemMagico {
    constructor(tipoItem, danoItem, resistenciaItem) {
        this.tipoItem = tipoItem;
        this.danoItem = danoItem;
        this.resistenciaItem = resistenciaItem;
    }

    calcularDano() {
        if (this.tipoItem === 'arma') {
            this.danoItem * 2;
        }
        return this.danoItem;
    }
}

// Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
const tipoItem = gets();
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());

//TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
let itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// TODO: Imprima os atributos do item personalizado
print("Tipo: " + itemPersonalizado.tipoItem);
print("Dano: " + itemPersonalizado.danoItem);
print("Resistencia: " + itemPersonalizado.resistenciaItem);

// Calcula e imprime o dano causado pelo item personalizado em um combate simulado
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);
