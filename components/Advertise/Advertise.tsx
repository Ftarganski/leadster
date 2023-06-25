import { useState } from "react";
import Image from "next/image";
import ImgChart from "../../public/images/comparativo_img_CTA.png";
import ImgRDStation from "../../public/images/selo_RD.png";
import Card from "../../public/images/no-card-dark.webp";
import Rating from "../../public/images/rating.webp";
import { useRouter } from "next/router";
import { getTexts } from "../../utils/textUtils";
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
  const t = getTexts();
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
          <Image src={ImgChart} height={600} alt={t.advertise.altChart} />
        </Chart>
        <Demo>
          <DemoTop>
            <h2 dangerouslySetInnerHTML={{ __html: t.advertise.title }} />
            <p dangerouslySetInnerHTML={{ __html: t.advertise.subtitle }} />
          </DemoTop>

          <DemoBottom>
            <div>
              <DemoButton
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {isHovered ? t.advertise.buttonHover : t.advertise.button}
              </DemoButton>
              <LogoRDStation>
                <Image src={ImgRDStation} height={70} alt={t.advertise.altRDStation} />
              </LogoRDStation>
            </div>

            <div>
              <Image src={Card} alt={t.advertise.altCreditCard} height={15} />
              <span>
                <p>{t.advertise.credit}</p>
              </span>
              <Image src={Rating} alt={t.advertise.altRating} height={15} />
              <span>
                <p>{t.advertise.satisfaction}</p>
              </span>
            </div>
          </DemoBottom>
        </Demo>
      </Container>
    </>
  );
};

export default Advertise;
