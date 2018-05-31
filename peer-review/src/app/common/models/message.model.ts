export class Message {

  constructor(
    public type: string,
    public text: string
  ) {
  }

  public showMessage(text, type) {
    this.text = text;
    this.type = type;
    window.setTimeout(() => {
      this.text = '';
    }, 5000);
  }
}
