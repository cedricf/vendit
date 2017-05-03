import React from 'react';

const Tile = (props) => {
	return (
        <button type="button" className="btn btn-primary btn-lg btn-lg-item" onClick={() => props.onClick()}>
          {props.title}
        </button>
    );
};

export default Tile 