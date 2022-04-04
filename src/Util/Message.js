class Message {
    constructor(data, time, type, isLeft) {
      this.data = data;
      this.type = type;
      this.time = time;
      this.isLeft = isLeft;
    }
  }
export default Message;