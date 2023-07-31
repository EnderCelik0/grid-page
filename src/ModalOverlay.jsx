import React from 'react';
import { Tb360View } from 'react-icons/tb';
import { CSSTransition } from 'react-transition-group';
import { GrClose } from 'react-icons/gr';

const ModalOverlay = ({ obj, wholeData, onClose, isOpen }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={200}
      classNames='modal'
      unmountOnExit={true}
    >
      <div className='modal-overlay' onClick={onClose}>
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
              <button className='btn btn-details'>More Details</button>
            </div>
            <button className='btn btn-close' onClick={onClose}>
              <GrClose className='close-icon' />
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ModalOverlay;
