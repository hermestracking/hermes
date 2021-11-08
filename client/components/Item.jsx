import React, { useState, useRef } from 'react';
import ContentEditable from 'react-contenteditable';
import X from '../public/images/thin x mark.png';

const Item = (props) => {
    const color = props.shipments.color;
    console.log('Order: ', props.order)

    const [reload, setReload] = useState(false);

    const text = useRef('Click to name shipment');

    const handleChange = (e) => {
        text.current = e.target.value;
    }

    const renameItem = () => {
        if (text.current === 'Click to name shipment') {
            text.current = ''; 
            setReload(!reload);
        }
    }    

    const enter = (e) => {
        if (text.current.length > 48) {
            if (e.key !== 'Backspace') e.preventDefault();
        }
        if (e.key === 'Enter') {
            e.target.blur();
            e.preventDefault();
            props.order.userLabel = text.current;
        }
    }

    const resetItem = () => {
        const defaultHtml = 'Click to name shipment';
        if (text.current === '') {
            text.current = defaultHtml;
            setReload(!reload);
        }
    }
    let boxColor = {
        backgroundColor: `${props.order.color}`
    }
    
    return (
        <React.Fragment>
            <div className="item-container"  onClick={(e) => props.setSelectedItem(props.order)}>
                <div className="color-code" style={boxColor}></div>
                <ContentEditable className="shipment-label" html={text.current} onChange={handleChange} onClick={renameItem} onKeyDown={enter} onBlur={resetItem} spellCheck="false" />
                <div className="item-buttons">
                    <img className="remove-button" src={X} onClick={() => props.setShipments(props.shipments.filter(item => item.id !== props.order.id))} />
                </div>
            </div>
        </React.Fragment>
    )
};

export default Item; 