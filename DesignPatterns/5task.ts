interface IAlert {
    send(message: string): void;
}

class EmailAlert implements IAlert {
    send(message: string): void {
        console.log(`Email: ${message}`);
    }
}

class SmsAlert implements IAlert {
    send(message: string): void {
        console.log(`SMS: ${message}`);
    }
}

class SlackAlert implements IAlert {
    send(message: string): void {
        console.log(`Slack: ${message}`);
    }
}

class HealthMonitor {
        private alertServices: IAlert[];
        constructor(alertServices: IAlert[]){
            this.alertServices = alertServices;
        }
        checkServer(): void {
            console.log(`HealthMonitor: Обнаружена проблема`);
            this.notifyAll("Обнаружена проблема");
        }
        notifyAll(message: string): void{
            for (const item of this.alertServices) {
            item.send(message);
            }
        }
}        
const monitor = new HealthMonitor([
    new EmailAlert(),
    new SmsAlert(),
    new SlackAlert()
]);

monitor.notifyAll("All is good")