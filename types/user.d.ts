export interface AuthUser {
    address: ResponseAddress;
    age: number;
    bank: Bank;
    birthDate: string;
    bloodGroup: string;
    company: Company;
    crypto: Crypto;
    ein: string;
    email: string;
    eyeColor: string;
    firstName: string;
    gender: string;
    hair: Hair;
    height: number;
    id: number;
    image: string;
    ip: string;
    lastName: string;
    macAddress: string;
    maidenName: string;
    password: string;
    phone: string;
    role: string;
    ssn: string;
    university: string;
    userAgent: string;
    username: string;
    weight: number;
}

export interface ResponseAddress {
    address: string;
    city: string;
    coordinates: PurpleCoordinates;
    country: string;
    postalCode: string;
    state: string;
    stateCode: string;
}

export interface PurpleCoordinates {
    lat: number;
    lng: number;
}

export interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

export interface Company {
    address: CompanyAddress;
    department: string;
    name: string;
    title: string;
}

export interface CompanyAddress {
    address: string;
    city: string;
    coordinates: FluffyCoordinates;
    country: string;
    postalCode: string;
    state: string;
    stateCode: string;
}

export interface FluffyCoordinates {
    lat: number;
    lng: number;
}

export interface Crypto {
    coin: string;
    network: string;
    wallet: string;
}

export interface Hair {
    color: string;
    type: string;
}