var pt = { x: 213, y: 414 };
var pts = { x: 213, y: 414, z: 3 };
var thomas = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 32423,
    sayHi: function () {
        return "Hello!";
    }
};
thomas.first = "Kaivon";
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
var elton = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark: function () {
        return "WOOF WOOF!";
    }
};
var chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark: function () {
        return "Bark!";
    },
    job: "guide dog"
};
var pierre = {
    name: "Pierre",
    id: 12334,
    email: "p@mail.com",
    level: "senior",
    languages: ["JS", "Python"]
};
