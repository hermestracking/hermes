import React from 'react';
import moment from 'moment';

const Detail = (props) => {
    return(
        <React.Fragment>
            <div className="detail-view-container">
                <div className="detail-header-wrapper">
                    <h2 className="detail-header">Details</h2>
                </div>
                
                <div className="detail-body">
                    <div className="tracking-number"> {!props.shipments.filter(orders => orders.trackingNumber === props.selectedItem.trackingNumber).length ? null : 'Tracking Number: ' + props.selectedItem.trackingNumber } </div>
                    <div className="expected-delivery">{!props.shipments.filter(orders => orders.deliveryDate === props.selectedItem.deliveryDate).length ? null : 'Expected Delivery: ' + moment(props.selectedItem.deliveryDate).format('MMMM do YYYY') }</div> 
                </div>
                
            </div>
        </React.Fragment>
    )
};

export default Detail; 