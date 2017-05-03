import React from 'react';
import GroupTile from "./GroupTile.jsx";
import Tile from "./Tile.jsx";

class ItemList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      groups: [
          {
              name: "Starters",
              items: [
                {
                  name: "Calamari"
                },
                {
                  name: "Wings"
                },
                {
                  name: "Satay Chicken"
                }
              ]
            },
            {
              name: "Mains",
              items: [
                {
                  name: "Calamari"
                },
                {
                  name: "Steak"
                },
                {
                  name: "Fish"
                }
              ]
            },
            {
              name: "Dessert",
              items: [
                {
                  name: "Ice Cream"
                },
                {
                  name: "Cake"
                },
                {
                  name: "Jelly"
                }
              ]
            }
          ],
      currentGroup: 0
    };
    this.groupOnClick = this.handleGroupClick.bind(this);
    this.itemOnClick = this.handleItemClick.bind(this);
  }
  
  handleGroupClick(index){
    console.log("Group clicked: " + this.state.groups[index].name);
    this.state.currentGroup = index;
    this.setState(this.state);
  }

  handleItemClick(index){
    console.log("Item clicked: " + this.state.groups[this.state.currentGroup].items[index].name);
  }

  render () {
    return (
        <div className="row">
          <div className="col-lg-4 item-group">
            <div className="row">
              <div className="container-fluid my-container">
                  {this.state.groups.map(function(group, index) {
                    return <GroupTile title={ group.name } onClick={() => this.groupOnClick(index)}/>;
                  }, this)}
              </div>
            </div>
          </div>
          <div className="col-lg-8 item">
            <div className="row">
              <div className="container-fluid my-container">
                  {this.state.groups[this.state.currentGroup].items.map(function(item, index){
                    return <Tile title={ item.name } onClick={() => this.itemOnClick(index)}/>;
                  }, this)}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ItemList 