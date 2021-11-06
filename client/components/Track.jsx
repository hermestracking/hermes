import React from 'react';

const Track = () => {
    renturn (
        <React.Fragement>
            <div className="tracking-input-container">
            <input className="tracking-input-field" type="text" value={tracking} onChange={(e) => setTracking(e.target.value)} required/>
            <div className="floating-container">
                <span className="floating-text">Enter tracking number...</span>
            </div>
            <button className="track-button">Track</button>
            </div>
        </React.Fragement>
    )
};

export default Track; 