import React from "react";

import Body from "./Body.jsx";
import Header from "./Header.jsx";
import Order from "./Order.jsx";
import Keypad from "./Keypad/Keypad.jsx";
import ItemList from "./ItemList.jsx";

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container-fluid main-container">
					<div className="row">
						<div className="col-lg-4">
							<div className="row">
								<Order />
								<Keypad />
							</div>
						</div>
						<div className="col-lg-8">
							<ItemList />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
