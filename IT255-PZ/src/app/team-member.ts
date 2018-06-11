export class TeamMember {
    username: string;
    email: string;
    joined: Date;
    // pictureUrl: string;

    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
        this.joined = new Date();
        // this.pictureUrl = "";
    }

}
