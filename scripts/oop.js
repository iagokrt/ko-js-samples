console.log('Using lists v1.0')

/* ViewModels */
function InventoryViewModel() {
  // knockout convention to apply this called as self
  var self = this;

  // define the data format to js objects inside an array
  var iconTypes = [
    { icon: "oid1", "icon-melancia", text: "Watermelon" },
    { icon: "oid2", "icon-laranja", text: "Orange" },
    { icon: "oid3", "icon-abacaxi", text: "Pineapple" },
  ];

  /* Observables */
  // self.inventory = ko.observable([]); // possible but not performatic
  self.inventory = ko.observableArray([]); 

  /* Methods */
  self.addItem = () => {
    var index = Math.floor(Math.random() * iconTypes.length);
  
    self.inventory.push(iconTypes[index])
  }

  self.removeItem = (data, event) => {
    var index = event.target.getAttribute('item-index')
    // var index = /
    self.inventory.splice(index, 1)
  }
}

const view = document.querySelector("#knockout-app")
ko.applyBindings(new InventoryViewModel(), view)

console.log('Refactor')

/*class Transformers {
  constructor(rounds, winsL, winsR) {
    this.rounds = rounds;
    this.winsL = winsL;
    this.winsR = winsR;
  }

  get totalWins() {
    return this.winsL + this.winsR;
  } 
}

const greatest = new Transformers(2, 2, 2);
console.log(greatest.totalWins); */