import Image from "next/image";
import LogoLeadster from "../../public/images/logo.png";

import { Container } from "../HeroLogo/styles";

const HeroLogo = () => {
  return (
    <Container>
      <Image src={LogoLeadster} alt="Logo Leadster" height={50} quality={100} />
    </Container>
  );
};

export default HeroLogo;
