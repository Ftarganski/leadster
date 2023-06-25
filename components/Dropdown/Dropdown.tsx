import React from "react";
import Select from "react-select";
import { DropdownProps } from "../types/types";
import { getTexts } from "../../utils/textUtils";
import {
  Container,
  ContainerOrder,
  Navbar,
  NavbarButton,
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

  const [selectedCategory, setSelectedCategory] = React.useState<string>("");
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    handleOptionSelect(selectedCategory);
  };

  return (
    <Container>
      <Navbar>
        <NavbarButton onClick={() => handleCategorySelect("agency")}>
          <Text>{t.dropdown.btnAgency}</Text>
        </NavbarButton>
        <NavbarButton onClick={() => handleCategorySelect("chatbot")}>
          <Text>{t.dropdown.btnChatbot}</Text>
        </NavbarButton>
        <NavbarButton onClick={() => handleCategorySelect("marketing")}>
          <Text>{t.dropdown.btnMarketing}</Text>
        </NavbarButton>
        <NavbarButton onClick={() => handleCategorySelect("leads")}>
          <Text>{t.dropdown.btnLeads}</Text>
        </NavbarButton>
        <NavbarButton onClick={() => handleCategorySelect("media")}>
          <Text>{t.dropdown.btnMidia}</Text>
        </NavbarButton>
      </Navbar>
      <ContainerOrder>
          <TextOrder>{t.dropdown.selTitle}</TextOrder>
          <Select
            options={options}
            onChange={handleOptionChange}
            placeholder={t.dropdown.selPlaceholder}
          />
      </ContainerOrder>
      
    </Container>
  );
};

export default Dropdown;
