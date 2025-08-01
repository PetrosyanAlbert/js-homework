//  class EmailService {
//   send(message) {
//     console.log(`Sending email: ${message}`);
//   }
// }

// class MessageSender {
//   constructor() {
//     this.emailService = new EmailService();
//   }

//   sendMessage(message) {
//     this.emailService.send(message);
//   }
// }

class MessageService {
  send() {
    throw new Error("Метод send() должен быть реализован.");
  }
}
class EmailService extends MessageService {
    constructor(){
        super();
    }    
    send(message) {
        console.log(`📧 Sending email: ${message}`);
    }
}
class MessageSender {
  constructor(service) {
    this.service = service;
  }

  sendMessage(message) {
    this.service.send(message);
  }
}
const emailService = new EmailService();
const sender = new MessageSender(emailService);

sender.sendMessage("Hello from DIP!");

