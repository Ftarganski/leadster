import React from 'react';
import data from '../Main/videos.json';
import ModalVideo from '../ModalVideo/ModalVideo';

interface Item {
  title: string;
  link: string;
  description: string;
  spreadsheet: string;
  document: string;
  presentation: string;
}

const GridVideos = () => {
  const [selectedItem, setSelectedItem] = React.useState<Item | null>(null);

  const handleClick = (item: Item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="grid-container">
        {data.map((item, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handleClick(item)}
          >
            <div>{item.title}</div>
            <div>{item.link}</div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <ModalVideo item={selectedItem} closeModal={closeModal} />
      )}
    </div>
  );
};


export default GridVideos;