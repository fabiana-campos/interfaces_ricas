import { CasualClothing, FormalClothing, Clothing } from "./Clothes";

describe("Testando roupas e a classe abstrata Clothing", () => {
    it("Deve criar e descrever uma roupa casual", () => {
        const casual = new CasualClothing("H&M", 120, "Algodão");
        expect(casual.getDescription()).toBe(
            "Roupa Casual - Marca: H&M, Material: Algodão, Preço: R$120.00"
        );
    });

    it("Deve criar e descrever uma roupa formal", () => {
        const formal = new FormalClothing("Armani", 500, "Casamento");
        expect(formal.getDescription()).toBe(
            "Roupa Formal - Marca: Armani, Ocasião: Casamento, Preço: R$500.00"
        );
    });

    it("Deve comparar preços entre roupas", () => {
        const casual = new CasualClothing("H&M", 120, "Algodão");
        const formal = new FormalClothing("Armani", 500, "Casamento");

        const result = Clothing.comparePrices(casual, formal);
        expect(result).toBe("Roupa Formal - Marca: Armani, Ocasião: Casamento, Preço: R$500.00 é mais cara.");
    });

    it("Deve informar que ambas as roupas têm o mesmo preço", () => {
        const casual = new CasualClothing("H&M", 120, "Algodão");
        const formal = new FormalClothing("Zara", 120, "Trabalho");

        const result = Clothing.comparePrices(casual, formal);
        expect(result).toBe("Ambas as peças têm o mesmo preço.");
    });
});
