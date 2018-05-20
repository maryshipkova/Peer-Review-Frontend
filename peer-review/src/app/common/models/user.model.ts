export class UserModel {
  constructor(
    public Id: string,
    public Login: string,
    public Email: string,
    public Password: string,
    public FirstName: string,
    public LastName: string,
    public Biography: string,
  ) {
  }
}
