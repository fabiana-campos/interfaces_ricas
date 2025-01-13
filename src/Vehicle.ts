// Interface
export interface Vehicle {
    displayDetails(): string;
}

// Classe carros novos
export class NewCar implements Vehicle {
    constructor(
        public brand: string,
        public model: string,
        public price: number
    ) {}

    // Implementação do método
    displayDetails(): string {
        return `Novo Carro - Marca: ${this.brand}, Modelo: ${this.model}, Preço: R$${this.price.toFixed(2)}`;
    }
}

// Classe carros usados
export class UsedCar implements Vehicle {
    constructor(
        public brand: string,
        public model: string,
        public mileage: number,
        public price: number
    ) {}

    // Implementação do método
    displayDetails(): string {
        return `Carro Usado - Marca: ${this.brand}, Modelo: ${this.model}, Quilometragem: ${this.mileage} km, Preço: R$${this.price.toFixed(2)}`;
    }
}
