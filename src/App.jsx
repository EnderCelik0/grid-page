import { useEffect, useState } from 'react';
import { Card } from './Card';
import png from '../src/assets/folder-icon.png';
import ModelOverlay from './ModalOverlay';

function App() {
  const [data, setData] = useState([]);
  const [wholeData, setWholeData] = useState([]);
  const [selectedObj, setSelectedObj] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setWholeData(data);
      });
  }, []);

  const handleClick = (obj) => {
    setData(obj);
    setSelectedObj(true);
  };

  const handleCloseModal = () => {
    setSelectedObj(null);
  };

  const CardList = () => {
    return (
      <div className='model'>
        {data.metadata &&
          data.metadata.map((obj) => (
            <div key={obj.objectId}>
              <div
                className='button modelCard'
                onClick={() => handleClick(obj)}
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
      {selectedObj ? (
        <ModelOverlay
          openModal={selectedObj}
          obj={data}
          wholeData={wholeData}
        />
      ) : (
        <CardList />
      )}
    </div>
  );
}

export default App;
