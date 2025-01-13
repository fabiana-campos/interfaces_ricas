import { NewCar, UsedCar } from "./Vehicle";

describe("Testando a classe NewCar", () => {
    it("Deve retornar os detalhes do carro novo corretamente", () => {
        const newCar = new NewCar("Toyota", "Corolla", 125000);
        expect(newCar.displayDetails()).toBe(
            "Novo Carro - Marca: Toyota, Modelo: Corolla, Preço: R$125000.00"
        );
    });

    it("Deve alterar o preço do carro novo e refletir nos detalhes", () => {
        const newCar = new NewCar("Toyota", "Corolla", 125000);
        newCar.price = 120000;
        expect(newCar.displayDetails()).toBe(
            "Novo Carro - Marca: Toyota, Modelo: Corolla, Preço: R$120000.00"
        );
    });
});

describe("Testando a classe UsedCar", () => {
    it("Deve retornar os detalhes do carro usado corretamente", () => {
        const usedCar = new UsedCar("Honda", "Civic", 80000, 60000);
        expect(usedCar.displayDetails()).toBe(
            "Carro Usado - Marca: Honda, Modelo: Civic, Quilometragem: 80000 km, Preço: R$60000.00"
        );
    });

    it("Deve alterar quilometragem e preço do carro usado e refletir nos detalhes", () => {
        const usedCar = new UsedCar("Honda", "Civic", 80000, 60000);
        usedCar.mileage = 85000;
        usedCar.price = 58000;
        expect(usedCar.displayDetails()).toBe(
            "Carro Usado - Marca: Honda, Modelo: Civic, Quilometragem: 85000 km, Preço: R$58000.00"
        );
    });
});

