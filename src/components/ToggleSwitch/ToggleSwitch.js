import React from 'react';
import './toggleSwitch.css';

const ToggleSwitch = ({ isChecked, onToggle }) => {
    return (
        <label className="toggle-switch">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onToggle}
            />
            <span className="slider"></span>
        </label>
    );
};

export default ToggleSwitch;
