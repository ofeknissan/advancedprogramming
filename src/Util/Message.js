class Message {
    constructor(data, time, type, isLeft, seconds) {
      this.data = data;
      this.type = type;
      this.time = time;
      this.isLeft = isLeft;
      this.seconds = seconds;
    }
  }
export default Message;