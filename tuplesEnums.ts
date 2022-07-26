//Creating an array of fixed len of 2 that must contain 3 numbers 
const color: [number, number, number] = [1, 2, 3];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
//goodRes[0] = "200"

//An array of HTTPResponses 
const responses: HTTPResponse[] = [[200, "OK"], [404, "Not Found"]];

//See how each value is set equal to a number 
enum OrderStatus {
    PENDING = 10,
    SHIPPED,
    DELIVERED,
    RETURNED
};

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
};

isDelivered(OrderStatus.RETURNED)

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
};