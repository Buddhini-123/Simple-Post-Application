// LoadingComponent.js
import React from 'react';
import { CircularProgress } from '@mui/material';

function LoadingComponent() {
    return (
        <div className="loading-overlay">
            <CircularProgress />
        </div>
    );
}

export default LoadingComponent;
