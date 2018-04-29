export class Store {
    id: number;
    name: string;
    address: string;


    constructor(_id: number, _name: string, _address: string) {
        this.id = _id;
        this.name = _name;
        this.address = _address;
    }
}