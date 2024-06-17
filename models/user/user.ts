export enum ERoles {
    admin = 'Admin',
    client = 'Client', 
    seller = 'Vendeur'
}

export class User {
    id : string; 
    firstName : string; 
    lastName: string; 
    email: string; 
    password: string; 
    role: ERoles; 
    keyAdmin? : string; 

    constructor(id : string, firstName: string, lastName: string, email: string, password: string, role: ERoles) {
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
    }}