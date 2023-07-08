(function () {
    var Order;
    (function (Order) {
        Order[Order["asc"] = 0] = "asc";
        Order[Order["desc"] = 1] = "desc";
    })(Order || (Order = {}));
    var Animal = /** @class */ (function () {
        function Animal(name, price) {
            this.name = name;
            this.price = price;
        }
        return Animal;
    }());
    function sortByProperty(array, property, sortOrder) {
        return array.sort(function (a, b) {
            if (a[property] < b[property]) {
                return sortOrder === Order.asc ? -1 : 1;
            }
            if (a[property] > b[property]) {
                return sortOrder === Order.asc ? 1 : -1;
            }
            return 0;
        });
    }
    var PetShop = /** @class */ (function () {
        function PetShop() {
            var _this = this;
            this.pets = [
                new Animal("Apple", 1200),
                new Animal("Zebra", 230),
                new Animal("Parrot", 4500),
                new Animal("Snake", 20000),
                new Animal("Ostrich", 357),
            ];
            this.orderBy = function (property, by) {
                return sortByProperty(_this.pets, property, by);
            };
        }
        return PetShop;
    }());
    var shop = new PetShop();
    var orderedPets = shop.orderBy("name", Order.desc);
    console.log(orderedPets);
})();
