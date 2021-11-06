import React from 'react';

const Track = (props) => {
    return (
        <React.Fragment>
            <div className="tracking-input-container">
            <input className="tracking-input-field" type="text" value={props.tracking} onChange={(e) => props.setTracking(e.target.value)} required/>
            <div className="floating-container">
                <span className="floating-text">Enter tracking number...</span>
            </div>
            <button className="track-button">Track</button>
            </div>
        </React.Fragment>
    )
};

export default Track; 