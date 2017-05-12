import React from "react";

import Body from "./Body.jsx";
import Header from "./Header.jsx";
import OrderPane from "./Order/OrderPane.jsx";
import Keypad from "./Keypad/Keypad.jsx";
import ItemList from "./ItemList.jsx";

export default class Layout extends React.Component {
  constructor(props){
    super(props);
		self = this;
	}

	addItemSelected(item) {
		self.orderPane.addItemToCurrentOrder(item);
	}

	keyClicked(key) {
		self.orderPane.keypadKeyPressed(key);
		console.log("Keypad: clicked " + key);
	}
	
	render() {
		return (
			<div>
				<Header />
				<div className="container-fluid main-container">
					<div className="row">
						<div className="col-lg-5">
							<div className="row">
								<OrderPane ref={(orderPane) => {this.orderPane=orderPane}} />
								<Keypad keyClicked = {this.keyClicked}/>
							</div>
						</div>
						<div className="col-lg-7">
							<ItemList addItemCallback={this.addItemSelected}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
