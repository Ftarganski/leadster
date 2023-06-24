import { useState } from "react";
import Image from "next/image";
import ImgChart from "../../public/images/comparativo_img_CTA.png";
import ImgRDStation from "../../public/images/selo_RD.png";
import Card from "../../public/images/no-card-dark.webp";
import Rating from "../../public/images/rating.webp";
import { useRouter } from "next/router";
import {
  Container,
  Chart,
  Demo,
  DemoTop,
  DemoBottom,
  DemoButton,
  LogoRDStation,
} from "../Advertise/styles";

const Advertise = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    router.push("/");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Container>
        <Chart>
          <Image src={ImgChart} height={600} alt="RD Station" />
        </Chart>
        <Demo>
          <DemoTop>
            <h2>
              Pronto para triplicar sua
              <br /> Geração de Leads?
            </h2>
            <p>
              Criação e ativação em <span>4 minutos.</span>
            </p>
          </DemoTop>

          <DemoBottom>
            <div>
              <DemoButton
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {isHovered ? "CLIQUE PARA VER" : "VER DEMONSTRAÇÃO"}
              </DemoButton>
              <LogoRDStation>
                <Image src={ImgRDStation} height={70} alt="RD Station" />
              </LogoRDStation>
            </div>

            <div>
              <Image src={Card} alt="Credit Card" height={15} />
              <span>
                <p>Não é necessário cartão de crédito | </p>
              </span>
              <Image src={Rating} alt="Rating" height={15} />
              <span>
                <p> 4.9/5 - Média de Satisfação</p>
              </span>
            </div>
          </DemoBottom>
        </Demo>
      </Container>
    </>
  );
};

export default Advertise;
