import React from "react";
import data from "../../server/videos.json";
import ModalVideo from "../ModalVideo/ModalVideo";
import Image from "next/image";
import Thumb from "../../public/images/thumbnail.png";
import { FaPlay } from "react-icons/fa";
import { Item, GridVideosProps } from "../types/types";
import {
  Container,
  Grid,
  VideoItem,
  VideoImage,
  VideoTitle,
  PlayIcon,
  CountPages,
  CountPagesButton,
} from "../GridVideos/styles";

const GridVideos: React.FC<GridVideosProps> = ({
  selectedOption,
  selectedCategory,
}) => {
  const [selectedItem, setSelectedItem] = React.useState<Item | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);

  const videosPerPage = 9;
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;

  //FILTRO
  const filteredVideos = React.useMemo(() => {
    if (selectedCategory) {
      return data.filter((item) => item.category === selectedCategory);
    } else {
      return data;
    }
  }, [selectedCategory]);
  
  const currentVideos = React.useMemo(() => {
    return filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);
  }, [filteredVideos, indexOfFirstVideo, indexOfLastVideo]);

  const sortedVideos = React.useMemo(() => {
    if (selectedOption === "date") {
      return [...currentVideos].sort((a, b) => (a.date > b.date ? -1 : 1));
    } else if (selectedOption === "title") {
      return [...currentVideos].sort((a, b) => (a.title > b.title ? 1 : -1));
    } else {
      return currentVideos;
    }
  }, [currentVideos, selectedOption]);

  const handleClick = (item: Item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Grid>
        {sortedVideos.map((item, index) => (
          <VideoItem
            key={index}
            className="grid-item"
            onClick={() => handleClick(item)}
          >
            <VideoImage>
              <Image src={Thumb} alt={item.title} />
              <PlayIcon>
                <FaPlay />
              </PlayIcon>
            </VideoImage>
            <VideoTitle>{item.title}</VideoTitle>
          </VideoItem>
        ))}
      </Grid>

      {totalPages > 1 && (
        <CountPages>
          Página
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <CountPagesButton
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                disabled={currentPage === pageNumber}
              >
                {pageNumber}
              </CountPagesButton>
            )
          )}
        </CountPages>
      )}

      {selectedItem && (
        <ModalVideo item={selectedItem} closeModal={closeModal} />
      )}
    </Container>
  );
};

export default GridVideos;
