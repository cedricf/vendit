import React from 'react';

const Order = (props) => {
	return (
			<div className="order-pane">
        <div className="order-title">
          Order #12345
        </div>
        <div className="order-detail">
          order detail
        </div>
        <div className="order-buttons">
          <div className="btn-group btn-group-vertical">
            <button className="btn btn-info btn-order">New Order</button>
            <button className="btn btn-info btn-order">Close Order</button>
            <button className="btn btn-info btn-order">List Orders</button>
          </div>
        </div>
			</div>
    );
};

export default Order 