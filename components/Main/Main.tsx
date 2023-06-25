import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import GridVideos from "../GridVideos/GridVideos";

const Main = () => {
  const [selectedOption, setSelectedOption] = React.useState<string>('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Dropdown handleOptionSelect={handleOptionSelect} selectedOption={selectedOption} />
      <GridVideos selectedOption={selectedOption} selectedCategory={""} />
    </>
  );
};

export default Main;
