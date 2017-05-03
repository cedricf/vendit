import React from 'react';
import GroupTile from "./GroupTile.jsx";
import Tile from "./Tile.jsx";

const ItemList = (props) => {
	return (
        <div className="row">
          <div className="col-lg-4 item-group">
            <div className="row">
              <div className="container-fluid my-container">
                <GroupTile />
                <GroupTile />
                <GroupTile />
                <GroupTile />
                <GroupTile />
                <GroupTile />
                <GroupTile />
              </div>
            </div>
          </div>
          <div className="col-lg-8 item">
            <div className="row">
              <div className="container-fluid my-container">
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
              </div>
            </div>
          </div>
        </div>
    );
};

export default ItemList 