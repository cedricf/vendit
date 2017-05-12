import React from 'react';
import OrderManager from '../../../js/OrderManager';

class Order extends React.Component {
  constructor(props){
    super(props);
    this.orderManager = new OrderManager();
    this.state = {
      currentOrder: {
        orderNumber: "-----",
        orderItems: [],
        total: 0
      }
    };
  }

  componentDidMount(){

  }

  handleNewOrderOnClick() {
    this.orderManager.newOrder( (order) => {
      this.state.currentOrder = order;
      this.setState(this.state);
    });
  }

  orderItemClassName(orderItem){
    if(orderItem == this.state.selectedOrderItem){ 
      return 'order-detail-selected'
    }else{
      return '';
    }
  }

  handleCloseOrderOnClick() {
    console.log("Close Order Clicked");
  }
  handleListOrderOnClick() {
    console.log("List Order Clicked");
  }

  handleSelectItemOnClick(orderItem) {
    if(this.state.selectedOrderItem == orderItem){
      this.state.selectedOrderItem = null;
    }else{
      this.state.selectedOrderItem = orderItem;
    }
    this.setState(this.state);
  }

  addItemToCurrentOrder(item){
    this.orderManager.addItemToOrder(this.state.currentOrder, item, (order) => {
      this.state.currentOrder = order;
      this.setState(this.state);
    });
    console.log("Item added");
  }

  keypadKeyPressed(key){
    if(this.state.selectedOrderItem != null){
      switch(key){
        case 'Back':
          var orderItem = this.state.selectedOrderItem;
          this.orderManager.adjustOrderItemQuantity(this.state.currentOrder, orderItem, orderItem.quantity -1, (order) => {
            this.state.currentOrder = order;
            this.setState(this.state);
          });
          break;
        case 'Clr':
          this.orderManager.deleteOrderItem(this.state.currentOrder, this.state.selectedOrderItem, (order) => {
            this.state.currentOrder = order;
            this.setState(this.state);
          });
          break;
      }

    }
  }

  render () {
    return (
			<div className="order-pane">
        <div className="order-title">
          Order #{this.state.currentOrder.orderNumber}
        </div>
        <div className="order-detail">
            {this.state.currentOrder.orderItems.map(function(orderItem, index) {
              var priceStr = Number(orderItem.price).toFixed(2);
              var totalStr = Number(orderItem.total).toFixed(2);
              return (
                <div onClick={() => this.handleSelectItemOnClick(orderItem)}>
                  <div className={"order-detail-items " + this.orderItemClassName(orderItem)}>{orderItem.name}</div>
                  <div className={"order-detail-quantity " + this.orderItemClassName(orderItem)}>{orderItem.quantity}</div>
                  <div className={"order-detail-price " + this.orderItemClassName(orderItem)}>{priceStr}</div>
                  <div className={"order-detail-total " + this.orderItemClassName(orderItem)}>{totalStr}</div>
                </div>
              )}, this)}
            <div className="order-total"> Total {Number(this.state.currentOrder.total).toFixed(2)}</div>
        </div>
        <div className="order-buttons">
          <div className="btn-group btn-group-vertical">
            <button className="btn btn-info btn-order" onClick={() => this.handleNewOrderOnClick()}>New Order</button>
            <button className="btn btn-info btn-order" onClick={() => this.handleCloseOrderOnClick()}>Close Order</button>
            <button className="btn btn-info btn-order" onClick={() => this.handleListOrderOnClick()}>List Orders</button>
          </div>
        </div>
			</div>
    );
  };
}

export default Order 