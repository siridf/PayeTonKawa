export class Products {
    id: string; 
    creationDate: Date;
    name: string;
    price: number;
    description: string;
    color: string;
    stock: number;

    constructor(id: string, creationDate: Date, name: string, price: number, description: string, color: string, stock: number) {
        this.id = id, 
        this.creationDate = creationDate;
        this.name = name;
        this.price = price;
        this.description = description;
        this.color = color;
        this.stock = stock;
    }
}
