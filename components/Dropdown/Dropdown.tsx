import React from "react";
import Select from "react-select";
import { MdArrowDropDown } from "react-icons/md";

import {
  Container,
  ContainerOrder,
  Navbar,
  NavbarButton,
  Line,
  Text,
  TextOrder,
} from "./styles";

interface DropdownProps {
  handleOptionSelect: (option: string) => void;
}

const options = [
  { value: "date", label: "Data de Publicação" },
  { value: "title", label: "Título do Vídeo" },
];

interface DropdownProps {
  handleOptionSelect: (option: string) => void;
  selectedOption: string; // Adicione a prop "selectedOption"
}


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
