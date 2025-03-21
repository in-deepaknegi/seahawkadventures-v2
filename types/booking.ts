export interface Package {
    id: number;
    title: string
    price: number;
    route: string;
    grade: string;
    duration: string;
    link: string;
}

export interface UserDetails {
    name: string;
    mobile: string;
    email: string;
}

export interface BookingDetails {
    numberOfUsers: number;
    totalAmount: number;
    users: UserDetails[];
}