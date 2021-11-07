import React from 'react';

const Detail = (props) => {
    return(
        <React.Fragment>
            <div className="detail-view-container">
                <div className="detail-header-wrapper">
                    <h2 className="detail-header">Details:</h2>
                </div>
                <div>
                    {props.selectedItem.trackingNumber}
                </div>
            </div>
        </React.Fragment>
    )
};

export default Detail; 