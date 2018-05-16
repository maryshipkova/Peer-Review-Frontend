
export class SolutionModel {
  constructor(
    public solutionId: number,
    public authorId: number,
    public taskId: number,
    public textData: string,
    public posted: Date,
    public status: boolean
  ) {
  }
}
