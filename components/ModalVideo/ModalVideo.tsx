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
  ModalButtonContent
} from "../ModalVideo/styles";

import { FiDownloadCloud } from "react-icons/fi";

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
      <button onClick={closeModal}>Close</button>
        <ModalTittle>{item.title}</ModalTittle>
        <ModalPlayer>{item.link}</ModalPlayer>
        <ModalSubTitle>Descrição</ModalSubTitle>
        <ModalDescription>{item.description}</ModalDescription>
        <ModalSubTitle>Downloads</ModalSubTitle>
        <ModalDownloads>
          
          <ModalDownloadButton>
            <FiDownloadCloud/>
            <ModalButtonContent>Spreadsheet.xls<a href={item.spreadsheet}></a></ModalButtonContent>
          </ModalDownloadButton>
          
          <ModalDownloadButton>
            <FiDownloadCloud/>
            <ModalButtonContent>Document.doc<a href={item.document}></a></ModalButtonContent>
          
          </ModalDownloadButton>
          
          <ModalDownloadButton>
            <FiDownloadCloud/>
            <ModalButtonContent>Presentation.ppt<a href={item.presentation}></a></ModalButtonContent>
          
          </ModalDownloadButton>

        </ModalDownloads>
        
      </ModalContent>
    </Modal>
  );
};

export default ModalVideo;
