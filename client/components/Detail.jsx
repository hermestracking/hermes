import React from 'react';
import moment from 'moment';

const Detail = (props) => {


    let city = "";
    let state ="";
    if (Object.keys(props.selectedItem).length){
        city = props.selectedItem.recentActivity[0].location.address.city;
        state = props.selectedItem.recentActivity[0].location.address.stateProvince;
    }
    return(
        <React.Fragment>
            <div className="detail-view-container">
                <div className="detail-header-wrapper">
                    <h2 className="detail-header">Details</h2>
                </div>
                
                
                <div className="detail-body">
                   <div className="tracking-number"> {!props.shipments.filter(orders => orders.trackingNumber === props.selectedItem.trackingNumber).length ? null : 'Tracking Number: ' + props.selectedItem.trackingNumber } </div>
                   <div className="expected-delivery">{!props.shipments.filter(orders => orders.deliveryDate === props.selectedItem.deliveryDate).length ? null : 'Expected Delivery: ' + moment(props.selectedItem.deliveryDate).format('MMMM do YYYY')}</div>

                    {Object.keys(props.selectedItem).length > 0 && <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${city},${state}&zoom=11&size=1000x1000&markers=size:small%7Ccolor:blue%7C${city},${state}&key=AIzaSyBJxF1BhB_ITohgRDtOc2AUErTYRcYkEjU`}></img>}


                </div>
                
            </div>
        </React.Fragment>
    )
};

export default Detail; 