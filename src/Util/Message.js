class Message {

    constructor(from, to, data, time, type) {
      this.from = from;
      this.to =  to;
      this.data = data;
      this.type = type;
      this.time = time;
    }
  }
export default Message;