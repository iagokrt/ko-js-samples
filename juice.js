console.log('Using lists');

function InventoryViewModel() {
  var self = this;

  var iconTypes = [
    { icon: "icon-melancia", text: "Watermelon" },
    { icon: "icon-laranja", text: "Orange" },
    { icon: "icon-abacaxi", text: "Pineapple" },
  ];

  // self.inventory = ko.observable([]); // possible but not performatic
  self.inventory = ko.observableArray([]); 

  self.addItem = () => {
    var index = Math.floor(Math.random() * iconTypes.length);
  
    self.inventory.push(iconTypes[index])
  }

  self.removeItem = (data, event) => {
    var index = event.target.getAttribute('item-index');
    self.inventory.splice(index, 1);
  }
}

const knockout = document.querySelector("#knockout-app");
ko.applyBindings(new InventoryViewModel(), knockout);