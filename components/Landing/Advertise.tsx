import React, { useState } from "react";
import styles from "@/styles/Landing.module.css";
import Image from "next/image";
import Card from "../../public/images/no-card-dark.webp";
import Rating from "../../public/images/rating.webp";
import { useRouter } from "next/router";

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
      <section className={styles.advertise}>
        <div className={styles.advertiseData}></div>

        <div className={styles.advertiseDemo}>
          <div className={styles.advertiseDemoTop}>
            <h2>
              Pronto para triplicar sua
              <br /> Geração de Leads?
            </h2>
            <p>Criação e ativação em 4 minutos.</p>
          </div>

          <div className={styles.advertiseDemoBottom}>
            <div>
              <button onClick={handleClick} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} 
                className={styles.advertiseButton}>
                {isHovered ? "CLIQUE PARA VER" : "VER DEMONSTRAÇÃO"}
              </button>
              <div className={styles.advertiseRDStation}></div>
            </div>

            <div>
                <Image
                src={Card}
                alt="Credit Card"
                height={15}
                />
                <span><p>Não é necessário cartão de crédito | </p></span>
                <Image
                src={Rating}
                alt="Rating"
                height={15}
                />
                <span><p> 4.9/5 - Média de Satisfação</p></span>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Advertise;
