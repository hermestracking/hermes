import React from 'react';
import Item from './Item';
// import { v4 as uuidv4 } from 'uuid';

const List = (props) => {

    const shipArray = [];
    if (props.shipments){
        for (let order of props.shipments){
            shipArray.push(<Item shipments={props.shipments} setShipments={props.setShipments} setSelectedItem={props.setSelectedItem} order={order} />);
        }
    }

    return (
        <React.Fragment>
            <div className="list-view-container">
                <div className="list-header-wrapper">
                    <h2 className="list-header">Deliveries</h2>
                    <div className="items-list">
                        {shipArray}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default List; 