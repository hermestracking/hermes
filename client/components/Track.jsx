import React from 'react';


const Track = (props) => {

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            props.handleTrack(props.tracking);
            props.setTracking('');
        };
    }

    return (
        <React.Fragment>
            <div className="tracking-input-container">
            <input className="tracking-input-field" type="text" value={props.tracking} onChange={(e) => props.setTracking(e.target.value)}  onKeyDown={handleEnter}required/>
            <div className="floating-container">
                <span className="floating-text">Enter tracking number...</span>
            </div>
            <button className="track-button" onClick={() => {
                props.handleTrack(props.tracking);
                props.setTracking('');
            }}
            >Track</button>
            </div>
        </React.Fragment>
    )
};

export default Track; 