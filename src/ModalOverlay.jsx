import React, { useState } from 'react';
import { Tb360View } from 'react-icons/tb';
import { GrClose } from 'react-icons/gr';
import Card from './Card';
import { AnimatePresence, motion } from 'framer-motion';

const animationVariants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0 },
};

const ModalOverlay = ({
  obj,
  wholeData,
  closeModal,
  isOpen,
  isCardOpen,
  handleCardClick,
}) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className='modal-overlay' onClick={closeModal}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
              className='modal-content'
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opactiy: 0, scale: 0 }}
                className='modal-card-img'
              >
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
              </motion.div>
              <motion.div>
                <Card cardDetailData={obj} isCardOpen={isCardOpen} />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalOverlay;
