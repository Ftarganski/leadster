import Logo from "../../public/images/logo.png";
import Image from "next/image";
import { getTexts } from "../../utils/textUtils";
import {
  Container,
  Title,
  TitleSlogan,
  Links,
  Link,
  BlockLinks,
  FooterBar,
} from "../Footer/styles";

const Footer = () => {
  const t = getTexts();
  return (
    <Container>
      <Title>
        <Image src={Logo} alt={t.footer.logoAlt} width={300} />

        <TitleSlogan>{t.footer.slogan}</TitleSlogan>
      </Title>

      <Links>
        <BlockLinks>
          <h5>{t.footer.mainLinkTitle}</h5>
          <ul>
            <li>
              <Link href="/">{t.footer.mainLinkHome}</Link>
            </li>
            <li>
              <Link href="/">{t.footer.mainLinkTool}</Link>
            </li>
            <li>
              <Link href="/">{t.footer.mainLinkPricing}</Link>
            </li>
            <li>
              <Link href="/">{t.footer.mainLinkContact}</Link>
            </li>
          </ul>
        </BlockLinks>

        <BlockLinks>
          <h5>{t.footer.caseLinkTitle}</h5>
          <ul>
            <li>
              <Link href="/">{t.footer.caseLinkB2B}</Link>
            </li>
            <li>
              <Link href="/">{t.footer.caseLinkSoftware}</Link>
            </li>
            <li>
              <Link href="/">{t.footer.caseLinkRealState}</Link>
            </li>
            <li>
              <Link href="/">{t.footer.caseLinkSuccess}</Link>
            </li>
          </ul>
        </BlockLinks>

        <BlockLinks>
          <h5>{t.footer.materialsLinkTitle}</h5>
          <ul>
            <li>
              <Link href="/">{t.footer.materialsLinkBlog}</Link>
            </li>
            <li>
              <Link href="/">{t.footer.materialsLinkPartner}</Link>
            </li>
            <li>
              <Link href="/">{t.footer.materialsLinkGuide}</Link>
            </li>
            <li>
              <Link href="/">{t.footer.materialsLinkFreeMaterial}</Link>
            </li>
          </ul>
        </BlockLinks>

        <BlockLinks>
          <h5>{t.footer.contactLinkTitle}</h5>
          <ul>
            <li>
              <Link href="/">ICONS</Link>
            </li>
            <li>
              {t.footer.contactEmailTitle}
              <Link
                href="mailto:contato@leadster.com.br"
                title="Email"
                target="_blank"
                rel="noreferrer"
              >
                {t.footer.contactEmail}
              </Link>
            </li>
            <li>
              {t.footer.contactPhoneTitle}
              <Link
                href="tel:+554298828-9851"
                title="Leadster"
                target="_blank"
                rel="noreferrer"
              >
                {t.footer.contactPhone}
              </Link>
            </li>
          </ul>
        </BlockLinks>
      </Links>

      <FooterBar>
        <ul>
          <li>
            {t.footer.footerText}
            <Link href="/"> {t.footer.footerTextLink}</Link>
          </li>
          <li>
            {t.footer.addressText}
            <Link href="/">{t.footer.addressTextLink}</Link>
          </li>
        </ul>
      </FooterBar>
    </Container>
  );
};

export default Footer;
