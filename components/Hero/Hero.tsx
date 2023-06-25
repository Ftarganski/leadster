import Image from "next/image";
import { getTexts } from "../../utils/textUtils";
import Dots from "../../public/images/asset-header.png";
import {
  Container,
  Content,
  Line,
  Subtitle,
  Slogan,
  Title,
  TitleBalloon,
} from "../Hero/styles";

const Hero = () => {
  const t = getTexts();
  return (
    <Container>
      <TitleBalloon>{t.hero.titleBalloon}</TitleBalloon>
      <Subtitle>{t.hero.subtitle}</Subtitle>
      <Content>
        <Title>{t.hero.title}</Title>
        <Image src={Dots} alt={t.hero.altDots} height={25} quality={75} />
      </Content>
      <Line></Line>
      <Slogan dangerouslySetInnerHTML={{ __html: t.hero.slogan }} />
    </Container>
  );
};
export default Hero;
