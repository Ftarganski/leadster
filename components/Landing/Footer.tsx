import React from "react";
import styles from "@/styles/Landing.module.css";
import Logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.footerBrand}>
          <Image
            src={Logo}
            alt="Logo Leadster"
            width={300}
            className={styles.footerLogo}
          />

          <h6 className={styles.footerSlogan}>
            Transformando visitantes em clientes.
          </h6>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.footerLinksBlock}>
            <h5>Links Principais</h5>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Ferramenta</Link>
              </li>
              <li>
                <Link href="/">Preços</Link>
              </li>
              <li>
                <Link href="/">Contato</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerLinksBlock}>
            <h5>Cases</h5>
            <ul>
              <li>
                <Link href="/">Geração de Leads B2B</Link>
              </li>
              <li>
                <Link href="/">Geração de Leads em Software</Link>
              </li>
              <li>
                <Link href="/">Geração de Leads em Imobiliária</Link>
              </li>
              <li>
                <Link href="/">Cases de Sucesso</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerLinksBlock}>
            <h5>Materiais</h5>
            <ul>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Parceria com Agências</Link>
              </li>
              <li>
                <Link href="/">Guia Definitivo do Marketing</Link>
              </li>
              <li>
                <Link href="/">Materiais Gratuitos</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerLinksBlock}>
            <h5>Siga a Leadster</h5>
            <ul>
              <li>
                <Link href="/">ICONS</Link>
              </li>
              <li>
                E-mail:
                <a
                  href="mailto:contato@leadster.com.br"
                  title="Email"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  contato@leadster.com.br
                </a>
              </li>
              <li>
                Telefone:
                <a
                  href="tel:+554298828-9851"
                  title="Leadster"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  (42) 98828-9851
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBar}>
          <ul>
            <li>
              Copyright © 2015 - 2022 Todos os direitos reservados |{" "}
              <Link href="/">Leadster</Link>
            </li>
            <li>
              Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{" "}
              <Link href="/">Termos de uso</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
