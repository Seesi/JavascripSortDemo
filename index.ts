(() => {
  interface IAnimal {
    name: string;
    price: number;
  }
  enum Order {
    asc,
    desc,
  }

  class Animal implements IAnimal {
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
    name: string;
    price: number;
  }

  function sortByProperty<T>(
    array: T[],
    property: keyof T,
    sortOrder: Order
  ): T[] {
    return array.sort((a, b) => {
      if (a[property] < b[property]) {
        return sortOrder === Order.asc ? -1 : 1;
      }
      if (a[property] > b[property]) {
        return sortOrder === Order.asc ? 1 : -1;
      }
      return 0;
    });
  }

  class PetShop {
    pets = [
      new Animal("Apple", 1200),
      new Animal("Zebra", 230),
      new Animal("Parrot", 4500),
      new Animal("Snake", 20000),
      new Animal("Ostrich", 357),
    ];

    orderBy = (property: keyof Animal, by: Order): Animal[] =>
      sortByProperty(this.pets, property, by);
  }

  const shop = new PetShop();
  const orderedPets = shop.orderBy("name", Order.desc);
  console.log(orderedPets);
})();
