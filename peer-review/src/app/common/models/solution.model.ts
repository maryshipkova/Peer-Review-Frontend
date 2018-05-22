
export class SolutionModel {
  constructor(
    public TextData: string,
    public AuthorId: string,
    public TaskId: string,
    public Posted: Date,
    public Status: boolean,
    public SolutionId?: string,
  ) {
  }
}
