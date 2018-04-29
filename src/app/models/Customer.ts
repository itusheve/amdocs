export class Geo {
    lat: string='';
    lng: string='';
}

export class Address {
    street: string='';
    suite: string='';
    city: string='';
    zipcode: string='';
    geo: Geo;
}

export class Company {
    name: string='';
    catchPhrase: string='';
    bs: string='';
}
export class Customer {
    id: number;
    gender: string='';
    name: string='';
    username: string='';
    email: string='';
    address: Address;
    phone: string='';
    website: string='';
    company: Company;

    static counter = 0;

    constructor(_customer:Customer) {
        if(_customer){
            this.id = _customer.id;
            this.gender = _customer.gender;
            this.name = _customer.name;
            this.email = _customer.email;
            this.address = _customer.address;

            this.phone = _customer.phone;
            this.website =_customer. website;
            this.company = _customer.company;
        }
        else{
            this.address= new Address();
            this.company= new Company();
        }



    }
}