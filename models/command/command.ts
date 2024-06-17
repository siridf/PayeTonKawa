import { Products } from "../product/product";

export enum EStatus {
    waiting  = 'WAITING',
    preparation = 'PREPARATION', 
    ready = 'READY', 
    delivered = 'DELIVERED'
}

export class Command {
    clientId: string;
    products: Products[];
    status: EStatus;
    date: Date;
    totalPrice: number;

    constructor(clientId: string, products: Products[], status: EStatus, date: Date, totalPrice: number) {
        this.clientId = clientId;
        this.products = products;
        this.status = status;
        this.date = date;
        this.totalPrice = totalPrice;
    }
}