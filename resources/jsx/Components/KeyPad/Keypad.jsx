import React from 'react';

const Keypad = (props) => {
	return (
			<div className="container keypad">
					<div className="row">
						<div className="btn-group btn-group-keys">
							<button className="btn btn-warning btn-key-2" type="button">Clr</button>
							<button className="btn btn-danger btn-key-2" type="button">Back</button>
						</div>
					</div>
					<div className="row">
						<div className="btn-group btn-group-keys">
							<button className="btn btn-info btn-key-3" type="button">7</button>
							<button className="btn btn-info btn-key-3" type="button">8</button>
							<button className="btn btn-info btn-key-3" type="button">9</button>
						</div>
					</div>
					<div className="row">
						<div className="btn-group btn-group-keys">
							<button className="btn btn-info btn-key-3" type="button">4</button>
							<button className="btn btn-info btn-key-3" type="button">5</button>
							<button className="btn btn-info btn-key-3" type="button">6</button>
						</div>
					</div>
					<div className="row">
						<div className="btn-group btn-group-keys">
							<button className="btn btn-info btn-key-3" type="button">1</button>
							<button className="btn btn-info btn-key-3" type="button">2</button>
							<button className="btn btn-info btn-key-3" type="button">3</button>
						</div>
					</div>
					<div className="row">
						<div className="btn-group btn-group-keys">
							<button className="btn btn-info btn-key-3" type="button">.</button>
							<button className="btn btn-info btn-key-3" type="button">0</button>
							<button className="btn btn-warning btn-key-3" type="button">Qty</button>
						</div>
					</div>
			</div>
    );
};

export default Keypad 