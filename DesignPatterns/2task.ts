interface INotification {
    send(message: String) : void;
}

class Email implements INotification {
    send(message: string): void {        
        console.log(`Send with email: ${message}`);
    }
}

class Sms implements INotification {
    send(message: string): void {
        console.log(`Send with sms: ${message}`);
    }
}

class Push implements INotification {
    send(message: string): void {
        console.log(`Push notification: ${message}`);
    }
}

class SlackNotification implements INotification {
    send(message: string): void {
        console.log(`Отправка SLACK-сообщения: ${message}`);
    }
}

class NotificationFactory {
    static types: Record <string, INotification> =  {};
    static create(type: string): INotification | null {
        return this.types[type] ? this.types[type] : null;
    }
    static register(type: string, cls : INotification): void {
        this.types[type] = cls;        
    }
}

NotificationFactory.register("email", new Email()); 

const notifier = NotificationFactory.create("email");
notifier?.send("Hello World");
console.log(notifier);