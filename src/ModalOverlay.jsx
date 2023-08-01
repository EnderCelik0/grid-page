import React, { useState } from 'react';
import { Tb360View } from 'react-icons/tb';
import { CSSTransition } from 'react-transition-group';
import { GrClose } from 'react-icons/gr';
import Card from './Card';

const ModalOverlay = ({
  obj,
  wholeData,
  closeModal,
  isOpen,
  isCardOpen,
  handleCardClick,
}) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={200}
      classNames='modal'
      unmountOnExit={true}
    >
      <div className='modal-overlay' onClick={closeModal}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          <div className='modal-card-img'>
            <p className='modal-card-title'>
              Object Name: {obj?.properties?.General?.Name}
            </p>
            <img
              className='object-image'
              src={`data:image/jpeg;base64,${wholeData?.thumbnail}`}
              alt='object-image'
            />
            <div className='buttons'>
              <button className='btn btn-get-embeded-code'>
                Get Embedded Code {`</>`}
              </button>
              <button className='btn btn-view-3d'>
                <Tb360View className='icon' />
              </button>
              <button className='btn btn-details' onClick={handleCardClick}>
                More Details
              </button>
            </div>
            <button className='btn btn-close' onClick={closeModal}>
              <GrClose className='close-icon' />
            </button>
          </div>
          <Card cardDetailData={obj} isCardOpen={isCardOpen} />
        </div>
      </div>
    </CSSTransition>
  );
};

export default ModalOverlay;
