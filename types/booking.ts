export interface Package {
    id: number;
    distance: string;
    route: string;
    grade: string;
    duration: string;
    price: number;
}

export interface UserDetails {
    name: string;
    mobile: string;
}

export interface BookingDetails {
    numberOfUsers: number;
    totalAmount: number;
    users: UserDetails[];
}