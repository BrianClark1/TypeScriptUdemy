//Creating an array of fixed len of 2 that must contain 3 numbers 
var color = [1, 2, 3];
var goodRes = [200, "OK"];
//goodRes[0] = "200"
//An array of HTTPResponses 
var responses = [[200, "OK"], [404, "Not Found"]];
//See how each value is set equal to a number 
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 10] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 11] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 12] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 13] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
;
var myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
;
isDelivered(OrderStatus.RETURNED);
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
;
