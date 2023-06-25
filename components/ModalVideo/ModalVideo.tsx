import React from "react";
import { FiDownloadCloud } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { GridItemModalProps } from "../types/types";
import { getTexts } from "../../utils/textUtils";
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
  Icon,
} from "../ModalVideo/styles";

const ModalVideo: React.FC<GridItemModalProps> = ({ item, closeModal }) => {
  const t = getTexts();
  return (
    <Modal>
      <ModalContent>
        <GrClose onClick={closeModal} />
        <ModalTittle>{item.title}</ModalTittle>

        <ModalPlayer
          width="560"
          height="315"
          src={`${item.link}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope"
        ></ModalPlayer>

        <ModalSubTitle>{t.modalVideo.subDescription}</ModalSubTitle>
        <ModalDescription>{item.description}</ModalDescription>
        <ModalSubTitle>{t.modalVideo.sbDownload}</ModalSubTitle>
        <ModalDownloads>
          <ModalDownloadButton href={item.spreadsheet}>
            <Icon>
              <FiDownloadCloud />
            </Icon>
            <ModalButtonContent>{t.modalVideo.btnSpread}</ModalButtonContent>
          </ModalDownloadButton>

          <ModalDownloadButton href={item.document}>
            <Icon>
              <FiDownloadCloud />
            </Icon>
            <ModalButtonContent>{t.modalVideo.btnDoc}</ModalButtonContent>
          </ModalDownloadButton>

          <ModalDownloadButton href={item.presentation}>
            <Icon>
              <FiDownloadCloud />
            </Icon>
            <ModalButtonContent>{t.modalVideo.btnPresent}</ModalButtonContent>
          </ModalDownloadButton>
        </ModalDownloads>
      </ModalContent>
    </Modal>
  );
};

export default ModalVideo;
