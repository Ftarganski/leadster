import Image from "next/image"
import { Container, Content, Line, Subtitle, Text, Title, TitleBalloon } from "../Hero/styles"

import Dots from "../../public/images/asset-header.png"

const Hero = () => {
    return (
        <Container>
            <TitleBalloon>WEBNARS EXCLUSIVOS</TitleBalloon>
            <Subtitle>Menos Conversinha,</Subtitle>
            <Content>
                <Title>Mais Conversão</Title>
                <Image
                    src={Dots}
                    alt="Três tracejados em cima do da vogal ó"
                    height={25}
                    quality={75}
                />
            </Content>
            <Line></Line>
            <Text>Conheça as estratégias que <span>mudaram o jogo</span> e como aplicá-las no seu negócio</Text>
        </Container>
    )
}
export default Hero;