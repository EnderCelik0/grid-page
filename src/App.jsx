import { useEffect, useState } from 'react';
import png from '../src/assets/folder-icon.png';
import ModalOverlay from './ModalOverlay';
import Card from './Card';

export default function App() {
  const [data, setData] = useState();
  const [modelData, setModelData] = useState();
  const [wholeData, setWholeData] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch('https://jsonserver-uhor.onrender.com/data')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setWholeData(data);
      });
  }, []);

  const openAndSetModal = (obj) => {
    setModelData(obj);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const CardList = () => {
    return (
      <div className='model'>
        {data?.metadata?.map((obj) => (
          <div key={obj.objectId}>
            <div
              className='button modelCard'
              onClick={() => openAndSetModal(obj)}
              key={obj.objectId}
            >
              <img className='card-img' src={png} alt='png' />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='App'>
      {data && <CardList />}

      <ModalOverlay
        obj={modelData}
        isOpen={isOpen}
        onClose={closeModal}
        wholeData={wholeData}
      />
    </div>
  );
}
