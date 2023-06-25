import Image from "next/image"
import { Container, Content, Line, Subtitle, Text, Title, TitleBalloon } from "../Hero/styles"
import { getTexts } from "../../utils/textUtils";
import Dots from "../../public/images/asset-header.png"

const Hero = () => {
    const t = getTexts();
    return (
        <Container>
            <TitleBalloon>{t.hero.titleBalloon}</TitleBalloon>
            <Subtitle>{t.hero.subtitle}</Subtitle>
            <Content>
                <Title>{t.hero.title}</Title>
                <Image
                    src={Dots}
                    alt={t.hero.altDots}
                    height={25}
                    quality={75}
                />
            </Content>
            <Line></Line>
            <Text>{t.hero.slogan}</Text>
        </Container>
    )
}
export default Hero;