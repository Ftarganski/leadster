export interface Item {
    title: string;
    link: string;
    description: string;
    spreadsheet: string;
    document: string;
    presentation: string;
  }
  
  export interface GridVideosProps {
    selectedOption: string;
    selectedCategory: string;
  }
 
  export interface DropdownProps {
    handleOptionSelect: (option: string) => void;
    selectedOption: string;
  }
  
  export interface Option {
    value: string;
    label: string;
  }

  export interface GridItemModalProps {
    item: {
      title: string;
      link: string;
      description: string;
      spreadsheet: string;
      document: string;
      presentation: string;
    };
    closeModal: () => void;
  }