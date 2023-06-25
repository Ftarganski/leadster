import Image from "next/image";
import LogoLeadster from "../../public/images/logo.png";
import { getTexts } from "../../utils/textUtils";
import { Container } from "../HeroLogo/styles";

const HeroLogo = () => {
  const t = getTexts();
  return (
    <Container>
      <Image src={LogoLeadster} alt={t.heroLogo.altLogo} height={50} quality={100} />
    </Container>
  );
};

export default HeroLogo;
