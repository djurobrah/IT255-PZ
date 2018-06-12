export class TeamMember {
    username: string;
    email: string;
    joined: Date;
    pictureURL: string;

    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
        this.joined = new Date();
        this.pictureURL = "https://firebasestorage.googleapis.com/v0/b/it255-pz.appspot.com/o/nopicture.png?alt=media&token=cdf138f3-840e-49e4-aa05-b8b9de0ca9fa"; //nopictureurl
    }

}
