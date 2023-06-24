import React from 'react';
import {
  Modal,
  ModalContent,
  ModalTittle,
  ModalPlayer,
  ModalSubTitle,
  ModalDescription,
  ModalDownloads,
  ModalDownloadButton,
  ModalButtonContent,
  Icon
} from "../ModalVideo/styles";

import { FiDownloadCloud } from "react-icons/fi";
import { GrClose } from "react-icons/gr";


interface GridItemModalProps {
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

const ModalVideo : React.FC<GridItemModalProps>  = ({ item, closeModal }) => {
  return (
    <Modal>
      <ModalContent>
        <GrClose onClick={closeModal}/>
        <ModalTittle>{item.title}</ModalTittle>
        <ModalPlayer>{item.link}</ModalPlayer>
        <ModalSubTitle>Descrição</ModalSubTitle>
        <ModalDescription>{item.description}</ModalDescription>
        <ModalSubTitle>Downloads</ModalSubTitle>
        <ModalDownloads>
          
          <ModalDownloadButton href={item.spreadsheet}>
            <Icon><FiDownloadCloud/></Icon>
            <ModalButtonContent>Spreadsheet.xls</ModalButtonContent>
          </ModalDownloadButton>
          
          <ModalDownloadButton href={item.document}>
            <Icon><FiDownloadCloud/></Icon>
            <ModalButtonContent>Document.doc</ModalButtonContent>
          </ModalDownloadButton>
          
          <ModalDownloadButton href={item.presentation}>
            <Icon><FiDownloadCloud/></Icon>
            <ModalButtonContent>Presentation.ppt</ModalButtonContent>
         </ModalDownloadButton>

        </ModalDownloads>
        
      </ModalContent>
    </Modal>
  );
};

export default ModalVideo;
