export class UserDto {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    constructor(id: number, first_name: string, last_name: string, email: string) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }
}
