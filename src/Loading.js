import React from 'react';
import { RotateLoader } from 'react-spinners';
import './Loading.css'; // Import CSS file for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <RotateLoader color="blue" size={20} />
      </div>
    </div>
  );
};

export default Loading;
