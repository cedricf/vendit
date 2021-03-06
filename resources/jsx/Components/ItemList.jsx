import React from 'react';

import ItemManager from '../../js/ItemManager';

class ItemList extends React.Component {
  constructor(props){
    super(props);
    this.itemManager = new ItemManager();
    this.state = {
      groups: [{items:[]}],
      currentGroup: 0
    };
    this.addItemCallback = props.addItemCallback;
    this.groupOnClick = this.handleGroupClick.bind(this);
    this.itemOnClick = this.handleItemClick.bind(this);
  }

  componentDidMount(){
    this.itemManager.getGroupsAndItems((groups) => {
      this.setState( {
        groups: groups,
        currentGroup: 0
      });
    });
  }
  
  handleGroupClick(index){
    console.log("Group clicked: " + this.state.groups[index].name);
    this.state.currentGroup = index;
    this.setState(this.state);
  }

  handleItemClick(index){
    console.log("Item clicked: " + this.state.groups[this.state.currentGroup].items[index].name);
    this.addItemCallback(this.state.groups[this.state.currentGroup].items[index]);
  }

  render () {
    return (
        <div className="row">
          <div className="col-lg-4 item-group">
            <div className="row">
              <div className="container-fluid my-container">
                  {this.state.groups.map(function(group, index) {
                    return (<button type="button" className="btn btn-primary btn-lg btn-lg-group" onClick={() => this.groupOnClick(index)}>
                          {group.name}
                          </button>)
                  }, this)}
              </div>
            </div>
          </div>
          <div className="col-lg-8 item">
            <div className="row">
              <div className="container-fluid my-container">
                  {this.state.groups[this.state.currentGroup].items.map(function(item, index){
                    return (
                      <button type="button" className="btn btn-primary btn-lg btn-lg-item" onClick={() => this.itemOnClick(index)}>
                      {item.name}
                      </button>
                    )
                  }, this)}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ItemList 