class NotificationService {
    send(message: string) {
        console.log("Sending generic notification:", message);
    }
}

class EmailNotification extends NotificationService {
    send(message: string) {
        console.log("Sending email:", message);
    }
}

class DisabledNotification extends NotificationService {
    send(message: string) {
        console.log("Notifications are disabled. No action taken.");
    }
}