import React from 'react';

const GroupTile = (props) => {
	return (
        <button type="button" className="btn btn-primary btn-lg btn-lg-group" onClick={() => props.onClick()}>
          {props.title}
        </button>
    );
};

export default GroupTile 