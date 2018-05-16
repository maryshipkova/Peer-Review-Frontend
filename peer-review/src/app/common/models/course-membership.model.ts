
export class CourseMembershipModel {
  constructor(
    public userId: number,
    public courseId: number,
    public permission: number
  ) {
  }
}
