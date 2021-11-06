import React from 'react';

const Item = (props) => {
    
    return (
        <React.Fragment>
            <div className="item-container" onClick={() => {props.setSelectedItem(props.order)}}>
                <div className="color-code"></div>
                <div className="shipment">Shipment</div>
                <div className="check-button"></div>
                <div className="remove-button"></div>
            </div>
        </React.Fragment>
    )
};

export default Item; 