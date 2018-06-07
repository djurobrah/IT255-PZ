export class TeamMember
{
    name: string;
    bio: string;
    joined: Date;
    pictureUrl: string;

    constructor(name: string, bio: string)
    {
        this.name = name;
        this.bio = bio;
        this.joined = new Date();
        this.pictureUrl = "";
    }
}
