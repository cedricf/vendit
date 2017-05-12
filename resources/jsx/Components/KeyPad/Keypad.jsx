import React from 'react';



const Keypad = (props) => {
	return (
			<div className="container keypad">
					<div className="row">
						<div className="btn-group btn-group-keys">
							<button className="btn btn-warning btn-key-2" type="button" onClick={() => props.keyClicked('Clr')}>Clr</button>
							<button className="btn btn-danger btn-key-2" type="button" onClick={() => props.keyClicked('Back')}>Back</button>
						</div>
					</div>
					<div className="row">
						<div className="btn-group btn-group-keys">
							<button className="btn btn-info btn-key-3" type="button" onClick={() => props.keyClicked(7)}>7</button>
							<button className="btn btn-info btn-key-3" type="button" onClick={() => props.keyClicked(8)}>8</button>
							<button className="btn btn-info btn-key-3" type="button" onClick={() => props.keyClicked(9)}>9</button>
						</div>
					</div>
					<div className="row">
						<div className="btn-group btn-group-keys">
							<button className="btn btn-info btn-key-3" type="button" onClick={() => props.keyClicked(4)}>4</button>
							<button className="btn btn-info btn-key-3" type="button" onClick={() => props.keyClicked(5)}>5</button>
							<button className="btn btn-info btn-key-3" type="button" onClick={() => props.keyClicked(6)}>6</button>
						</div>
					</div>
					<div className="row">
						<div className="btn-group btn-group-keys">
							<button className="btn btn-info btn-key-3" type="button" onClick={() => props.keyClicked(1)}>1</button>
							<button className="btn btn-info btn-key-3" type="button" onClick={() => props.keyClicked(2)}>2</button>
							<button className="btn btn-info btn-key-3" type="button" onClick={() => props.keyClicked(3)}>3</button>
						</div>
					</div>
					<div className="row">
						<div className="btn-group btn-group-keys">
							<button className="btn btn-info btn-key-3" type="button" onClick={() => props.keyClicked('.')}>.</button>
							<button className="btn btn-info btn-key-3" type="button" onClick={() => props.keyClicked(0)}>0</button>
							<button className="btn btn-warning btn-key-3" type="button" onClick={() => props.keyClicked('Qty')}>Qty</button>
						</div>
					</div>
			</div>
    );
};

export default Keypad 