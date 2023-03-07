export class Survey {
    id: number;
    email!: string;
    style!: number;
    constructor(id: number,
                email: string,
                style: number,) {
                                    this.id = id;
                                    this.email = email;
                                    this.style = style;
                                }
}
