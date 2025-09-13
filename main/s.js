var SendEmail = /** @class */ (function () {
    function SendEmail() {
        console.log("SendEmail constroctor has been caled");
    }
    return SendEmail;
}());
var User = /** @class */ (function () {
    function User() {
        this.sendEmail = new SendEmail();
    }
    return User;
}());
var Category = /** @class */ (function () {
    function Category() {
        this.sendEmail = new SendEmail();
    }
    return Category;
}());
var Order = /** @class */ (function () {
    function Order() {
        this.sendEmail = new SendEmail();
    }
    return Order;
}());
var Comments = /** @class */ (function () {
    function Comments() {
        this.sendEmail = new SendEmail();
    }
    return Comments;
}());
var user = new User();
var category = new Category();
var oreder = new Order();
var comment = new Comments();
