import React, { useState } from "react";
import data from "../Main/videos.json";

import {
  Container,
  ContainerOrder,
  Navbar,
  ContentDatePublication,
  NavbarButton,
  Line,
  Text,
  TextDate,
  TextOrder,
} from "./styles";

import { MdArrowDropDown } from "react-icons/md";

const Dropdown: React.FC = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterByDate = () => {
    const currentDate = new Date();
    const filteredVideos = data.filter((video) => {
      const videoDate = new Date(video.date);
      return videoDate <= currentDate;
    });
    setFilteredData(filteredVideos);
  };

  const handleFilterByTitle = (title: string) => { 
    const filteredVideos = data.filter((video) => {
      return video.title.toLowerCase().includes(title.toLowerCase());
    });
    setFilteredData(filteredVideos);
  };

  return (
    <Container>
      <Navbar>
        <NavbarButton>
          <Text>Agências</Text>
        </NavbarButton>
        <NavbarButton>
          <Text>Chatbot</Text>
        </NavbarButton>
        <NavbarButton>
          <Text>Marketing Digital</Text>
        </NavbarButton>
        <NavbarButton>
          <Text>Geração de Leads</Text>
        </NavbarButton>
        <NavbarButton>
          <Text>Mídia Paga</Text>
        </NavbarButton>


        <ContainerOrder>
          <TextOrder>Ordenar por</TextOrder>
          <ContentDatePublication>
            <TextDate>Data de Publicação</TextDate>
            <MdArrowDropDown
              style={{ fontSize: "25px" }}
              onClick={handleFilterByDate}
            />
          </ContentDatePublication>
        </ContainerOrder>

        

      </Navbar>
      <Line></Line>
    </Container>
  );
};

export default Dropdown;
