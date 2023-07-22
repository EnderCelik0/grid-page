import React, { useState, useEffect } from 'react';

const ModalOverlay = ({ obj, wholeData, openModal }) => {
  return (
    <div>
      {openModal && (
        <div className='modal-overlay'>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <div className='card-img'>
              <h2 className='card-title'>
                Object Name: {obj.properties.General.Name}
              </h2>
              <img
                className='object-image'
                src={`data:image/jpeg;base64,${wholeData.thumbnail}`}
                alt='object-image'
              />
              <button className='view-360-btn'>Go 360 View</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalOverlay;
