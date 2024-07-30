import React from 'react';
import Svg, { Rect } from 'react-native-svg';

const DownToClose = ({ color = '#FFFFFF' }) => (
    <Svg width="41" height="5" viewBox="0 0 41 5" fill="none">
        <Rect
            x="0.5"
            width="40"
            height="5"
            rx="2.5"
            fill={color}
            fillOpacity="0.2"
        />
    </Svg>
);

export default DownToClose;
