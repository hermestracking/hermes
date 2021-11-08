import React from "react";
// import moment from "moment";

const Day = (props) => {
  const divArr = [];
  for (let shipment of props.shipments){
    if (shipment.deliveryDate === props.tag){
      divArr.push(
        <div className="bullet-body" style={{ color: shipment.color }}>
           ▢ <div className="day-body">Delivery</div>
        </div>
      );
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