import {UserModel} from './user.model';

export class CourseModel {
  constructor(
    public Title: string,
    public Description: string,
    public Mentor: UserModel,
    public Id= null
  ) {
  }
}
