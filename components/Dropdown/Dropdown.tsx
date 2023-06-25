import React from "react";
import Select from "react-select";
import { MdArrowDropDown } from "react-icons/md";
import { DropdownProps, Option } from "../types/types";
import {
  Container,
  ContainerOrder,
  Navbar,
  NavbarButton,
  Line,
  Text,
  TextOrder,
} from "./styles";

const options = [
  { value: "date", label: "Data de Publicação" },
  { value: "title", label: "Título do Vídeo" },
];

const Dropdown: React.FC<DropdownProps> = ({ handleOptionSelect }) => {
  const [selectedOption, setSelectedOption] = React.useState<string>('');

  const handleOptionChange = (selected: any) => {
    setSelectedOption(selected.value);
    handleOptionSelect(selected.value);
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
          <Select
              options={options}
              onChange={handleOptionChange}
              placeholder="Data de Publicação"
          />
        </ContainerOrder>
      </Navbar>
      <Line></Line>
    </Container>
  );
};

export default Dropdown;
