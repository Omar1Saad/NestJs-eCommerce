class SendEmail{
    constructor(){
        console.log("SendEmail constroctor has been caled")
    }
}

class User{
    private sendEmail: SendEmail = new SendEmail();
}
class Category {
    private sendEmail: SendEmail = new SendEmail()
}
class Order {
    private sendEmail: SendEmail = new SendEmail()
}
class Comments {
    private sendEmail: SendEmail = new SendEmail()
}


const user = new User()
const category = new Category()
const oreder = new Order()
const comment = new Comments()