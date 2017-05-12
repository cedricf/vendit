class OrderManager {
  constructor(){
    this.orders = [];
  }

  getAllOrders(callback){
    callback(this.orders);
  }

  loadOrder(orderId, callback){
    var i=0;
    var order = null;
    while(i<this.orders.length && order == null){
      if(this.orders[i].orderId == orderId){
        callback(orders[i]);
        order = orders[i];
      }
      ++i;
    }
    callback(order);
  }

  newOrder(callback){
    var order = { 
      orderNumber: this.orders.length + 1,
      orderItems: [],
      total: 0
    }
    this.orders.push(order);
    callback( order );
  }

  adjustOrderItemQuantity(order, orderItem, quantity, callback){
    orderItem.quantity = quantity;
    this.recalculateOrder(order);
    callback(order);
  }

  addItemToOrder(order, item, callback){
    var i=0;
    var orderItem = null;
    while(i<order.orderItems.length && orderItem == null){
      if(order.orderItems[i].code == item.code){
        orderItem = order.orderItems[i];
        orderItem.quantity = orderItem.quantity + 1;
      }
      ++i;
    }
    if(orderItem == null){
      var orderItem = { code: item.code, quantity: 1, name: item.name, price: item.price, total: item.price };
      order.orderItems.push(orderItem);
    }
    this.recalculateOrder(order);
    callback(order);
  }

  deleteOrderItem(order, orderItem, callback){
    orderItem.quantity = 0;
    this.recalculateOrder(order);
    callback(order);
  }

  recalculateOrder(order){
    var total = 0;
    var newOrderItems = [];
    for(var i=0; i<order.orderItems.length; ++i){
      var orderItem = order.orderItems[i];
      if(orderItem.quantity > 0){
        orderItem.total = orderItem.price * orderItem.quantity;
        newOrderItems.push(orderItem);
        total = total + orderItem.total;
      }
    }
    order.orderItems = newOrderItems;
    order.total = total;
  }
}

export default OrderManager