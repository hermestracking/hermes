import React from "react";
// import moment from "moment";

const Day = (props) => {
  const divArr = [];
  for (let shipment of props.shipments){
    if (shipment.deliveryDate === props.tag){
      divArr.push(<div className="day-body" style={{ color: shipment.color }}>
        •
      <div style={{marginLeft: '5px'}}>Delivery</div>
      </div>
      )
    }
  }
  return (
    <React.Fragment>
      <div className="day-header">
        <div>{props.name}</div>
        <div>{divArr}</div>
      </div>
    </React.Fragment>
  );
};

export default Day;