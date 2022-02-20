export class User {
  readonly UserId: string;
  readonly PassWord: string;
  readonly LastName: string;
  readonly FirstName: string;
  readonly UserType: string;
  readonly CreatedUserId: string;
  readonly CreateOn: string;
  readonly UpdateUserId: string;
  readonly UpdatedOn: string;

  constructor(
    userid: string,
    password: string,
    lastname: string,
    firstname: string,
    usertype: string,
    createduserid: string,
    createon: string,
    updateuserid: string,
    updatedon: string
  ) {
    this.UserId = userid;
    this.PassWord = password;
    this.LastName = lastname;
    this.FirstName = firstname;
    this.UserType = usertype;
    this.CreatedUserId = createduserid;
    this.CreateOn = createon;
    this.UpdateUserId = updateuserid;
    this.UpdatedOn = updatedon;
  }

  get fullName(): string {
    return `${this.LastName} ${this.FirstName}`;
  }
}
