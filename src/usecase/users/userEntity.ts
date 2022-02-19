export class UserEntity {
  readonly UserId: string;
  readonly LastName: string;
  readonly FirstName: string;
  readonly UserType: string;

  constructor(
    userid: string,
    lastname: string,
    firstname: string,
    usertype: string
  ) {
    this.UserId = userid;
    this.LastName = lastname;
    this.FirstName = firstname;
    this.UserType = usertype;
  }

  get fullName(): string {
    return `${this.LastName} ${this.FirstName}`;
  }
}
