import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import GridVideos from "../GridVideos/GridVideos";

const Main = () => {
  const [selectedOption, setSelectedOption] = React.useState<string>("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Dropdown
        handleOptionSelect={handleOptionSelect}
        handleCategorySelect={handleCategorySelect}
        selectedOption={selectedOption}
        selectedCategory={selectedCategory}
      />
      <GridVideos
        selectedOption={selectedOption}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export default Main;
