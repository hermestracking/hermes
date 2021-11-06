import React from 'react';
import Item from './Item';

const List = (props) => {

    const shipArray = [];
    if (props.shipments){
        for (let order of props.shipments){
            shipArray.push(<Item setSelectedItem={props.setSelectedItem} order={order}/>);
        }
    }



    return (
        <React.Fragment>
            <div className="list-view-container">
                <div className="list-header-wrapper">
                    <h2 className="list-header">Current Deliveries:</h2>
                    <div className="items-list">
                        {shipArray}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default List; 