import React from 'react';
import data from '../Main/videos.json';
import ModalVideo from '../ModalVideo/ModalVideo';
import Image from 'next/image';
import Thumb from '../../public/images/thumbnail.png'
import { FaPlay } from 'react-icons/fa'
import {
 Container,
 Grid,
 VideoItem,
 VideoImage,
 VideoTitle,
 PlayIcon

} from "../GridVideos/styles";

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
    <Container>
      <Grid>
        {data.map((item, index) => (
          <VideoItem
            key={index}
            className="grid-item"
            onClick={() => handleClick(item)}
          >
            <VideoImage>
            <Image src={Thumb} alt="Thumb Vídeo"/> 
            <PlayIcon>
                <FaPlay />
              </PlayIcon>
              
              </VideoImage>
            <VideoTitle>{item.title}</VideoTitle>
          </VideoItem>
        ))}
      </Grid>

      {selectedItem && (
        <ModalVideo item={selectedItem} closeModal={closeModal} />
      )}

    </Container>
  );
};

export default GridVideos;