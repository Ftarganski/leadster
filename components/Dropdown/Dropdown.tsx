import React from "react";
import Select from "react-select";
import { DropdownProps } from "../types/types";
import { getTexts } from "../../utils/textUtils";
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
  const t = getTexts();
  const [selectedOption, setSelectedOption] = React.useState<string>("");

  const handleOptionChange = (selected: any) => {
    setSelectedOption(selected.value);
    handleOptionSelect(selected.value);
  };

  return (
    <Container>
      <Navbar>
        <NavbarButton>
          <Text>{t.dropdown.btnAgency}</Text>
        </NavbarButton>
        <NavbarButton>
          <Text>{t.dropdown.btnChatbot}</Text>
        </NavbarButton>
        <NavbarButton>
          <Text>{t.dropdown.btnMarketing}</Text>
        </NavbarButton>
        <NavbarButton>
          <Text>{t.dropdown.btnLeads}</Text>
        </NavbarButton>
        <NavbarButton>
          <Text>{t.dropdown.btnMidia}</Text>
        </NavbarButton>

        <ContainerOrder>
          <TextOrder>{t.dropdown.selTitle}</TextOrder>
          <Select
            options={options}
            onChange={handleOptionChange}
            placeholder={t.dropdown.selPlaceholder}
          />
        </ContainerOrder>
      </Navbar>
      <Line></Line>
    </Container>
  );
};

export default Dropdown;
