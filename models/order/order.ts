import { Products } from "../product/product";

export enum EStatus {
    waiting  = 'WAITING',
    preparation = 'PREPARATION', 
    ready = 'READY', 
    delivered = 'DELIVERED'
}

export class Order {
    id: string;
    clientId: string;
    products: Products[];
    status: EStatus;
    date: Date;
    totalPrice: number;

    constructor(id: string, clientId: string, products: Products[], status: EStatus, date: Date, totalPrice: number) {
        this.id = id;
        this.clientId = clientId;
        this.products = products;
        this.status = status;
        this.date = date;
        this.totalPrice = totalPrice;
    }
}