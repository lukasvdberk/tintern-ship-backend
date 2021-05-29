export class UserDTO {
  public _id: string;
  public email: string;


  constructor(id: string, email: string) {
    this._id = id;
    this.email = email;
  }
}
