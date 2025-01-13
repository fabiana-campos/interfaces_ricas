// Classe abstrata comum
export abstract class Clothing {
    constructor(public brand: string, public price: number) {}

    // Método abstrato
    abstract getDescription(): string;

    // Método estático que utiliza o método abstrato
    static comparePrices(clothing1: Clothing, clothing2: Clothing): string {
        if (clothing1.price === clothing2.price) {
            return "Ambas as peças têm o mesmo preço.";
        }
        return clothing1.price > clothing2.price
            ? `${clothing1.getDescription()} é mais cara.`
            : `${clothing2.getDescription()} é mais cara.`;
    }
}

// Subclasse 
export class CasualClothing extends Clothing {
    constructor(
        brand: string,
        price: number,
        public material: string 
    ) {
        super(brand, price);
    }

    // Implementação do método abstrato
    getDescription(): string {
        return `Roupa Casual - Marca: ${this.brand}, Material: ${this.material}, Preço: R$${this.price.toFixed(2)}`;
    }
}

// Subclasse 
export class FormalClothing extends Clothing {
    constructor(
        brand: string,
        price: number,
        public occasion: string 
    ) {
        super(brand, price);
    }

    // Implementação do método abstrato
    getDescription(): string {
        return `Roupa Formal - Marca: ${this.brand}, Ocasião: ${this.occasion}, Preço: R$${this.price.toFixed(2)}`;
    }
}
