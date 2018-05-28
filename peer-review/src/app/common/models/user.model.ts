export class UserModel {
  constructor(
    public Login: string,
    public Email: string,
    public Password: string,
    public FirstName: string,
    public LastName: string,
    public Biography?: string,
    public Id?: string
  ) {
  }
}
