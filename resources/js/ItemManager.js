class ItemManager {
  constructor(){

  }

  getGroupsAndItems(callback){
    if(this.groupsAndItems == undefined){
      this.reloadGroupsAndItems();
    }
    callback(this.groupsAndItems);
  }

  reloadGroupsAndItems(){
    this.groupsAndItems = 
      [
        {
          groupCode: "0",
          name: "Starters",
          items: [
            {
              code: "1", 
              name: "Calamari Starter",
              price: 40.00
            },
            {
              code: "2", 
              name: "Wings",
              price: 42.00
            },
            {
              code: "3", 
              name: "Satay Chicken",
              price: 41.00
            }
          ]
        },
        {
          groupCode: "1",
          name: "Mains",
          items: [
            {
              code: "4", 
              name: "Calamari Main",
              price: 80.00
            },
            {
              code: "5", 
              name: "Steak",
              price: 100.00
            },
            {
              code: "6", 
              name: "Fish",
              price: 90.00
            }
          ]
        },
        {
          groupCode: "2",
          name: "Dessert",
          items: [
            {
              code: "7", 
              name: "Ice Cream",
              price: 35.00
            },
            {
              code: "8", 
              name: "Cake",
              price: 40.00
            },
            {
              code: "9", 
              name: "Jelly",
              price: 30.00
            }
          ]
        }
      ];
  }
}

export default ItemManager