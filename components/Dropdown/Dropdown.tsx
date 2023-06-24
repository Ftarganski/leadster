import React from "react";

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
            <MdArrowDropDown style={{ fontSize: "25px" }} />
          </ContentDatePublication>
        </ContainerOrder>
      </Navbar>
      <Line></Line>
    </Container>
  );
};

export default Dropdown;