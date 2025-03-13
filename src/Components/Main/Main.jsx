import * as S from "../Styles/main_styled";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { SlSocialGithub } from "react-icons/sl";
import html from "../../assets/img/icones/html.png";
import css from "../../assets/img/icones/css.png";
import javascript from "../../assets/img/icones/javascript.svg";
import next from "../../assets/img/icones/next-js.svg";
import reactjs from "../../assets/img/icones/reactjs.png";
import stylee from "../../assets/img/icones/styled-components.svg";
import vite from "../../assets/img/icones/vite-js-logo.svg";
import curriculo from "../../assets/img/curriculo/CV_Thalesreisfurtado.pdf.pdf"
import foto from "../../assets/img/icones/perfil.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Main() {
  
  const downloadCurriculo = () =>{
    window.open(curriculo, "_blank");
  }
  useEffect(() => {
    AOS.init({ duration: "1000" });
  });


  return (
    <S.Main>
      <S.Section>
        <S.BoxOne data-aos="zoom-out-right">
          <h1>Olá, eu sou o Thales Reis ;)</h1>
          <p>Front-End Web Developer</p>
        </S.BoxOne>
          <button data-aos="fade-left" data-aos-offset="200" data-aos-duration="5000" onClick={downloadCurriculo}>Download CV &#8659;</button>
        <S.BoxTwo data-aos="zoom-out-left">
          <img src={foto} alt="Foto de perfil" />
          <figcaption>
            "Transformando o design em realidade com código."
          </figcaption>
        </S.BoxTwo>
      </S.Section>
      <S.SectionTwo data-aos="fade-left" data-aos-offset="200" data-aos-duration="5000">
        <S.BoxSobre data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h2 id="about">Sobre min</h2>
          <p>
            Apaixonado por tecnologia e programação, tenho conhecimentos em
            Design Gráfico como: Illustrator, Photoshop e InDesign. Decidi mudar
            de carreira e seguir com a programação e fazer o que gosto. Tenho
            formação em Análise e Desenvolvimento de Sistemas e atualmente estou
            realizando um curso de Front-End pela Vai na Web.
          </p>
        </S.BoxSobre>
        <S.BoxIcons>
          <div data-aos="flip-left">
            <a href="mailto:thalesreis.praia@gmail.com" target="_blank" rel="noopener nooreferrer">
              <MdOutlineMail size={40} style={{ color: "#d7263d" }} />
            </a>
          </div>
          <div data-aos="flip-left">
            <a href="https://www.github.com/thalesreis7" target="_blank" rel="noopener nooreferrer">
              <SlSocialGithub size={35} style={{ color: "#d7263d" }} />
            </a>
          </div>
          <div data-aos="flip-right">
            <a href="https://www.linkedin.com/in/thales-reis-furtado" target="_blank" rel="noopner nooreferrer">
              <CiLinkedin size={40} style={{ color: "#d7263d" }} />
            </a>
          </div>
        </S.BoxIcons>
      </S.SectionTwo>
      <S.SectionThree data-aos="fade-right" data-aos-offset="200" data-aos-duration="5000">
         <h3 id="skills">Skills</h3>
        <S.BoxSkills data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <S.Skills>
            <figure data-aos="fade-up" data-aos-duration="2000">
              <img src={html} alt="" />
            </figure>
            <figure data-aos="fade-up" data-aos-duration="2000">
              <img src={css} alt="" />
            </figure>
            <figure data-aos="fade-up" data-aos-duration="2000">
              <img src={javascript} alt="" />
            </figure>
            <figure data-aos="fade-up" data-aos-duration="2000">
              <img src={next} alt="" />
            </figure>
          </S.Skills>
          <S.Skills>
            <figure data-aos="fade-up" data-aos-duration="2000">
              <img src={reactjs} alt="" />
            </figure>
            <figure data-aos="fade-up" data-aos-duration="2000">
              <img src={stylee} alt="" />
            </figure>
            <figure data-aos="fade-up" data-aos-duration="2000">
              <img src={vite} alt="" />
            </figure>
          </S.Skills>
        </S.BoxSkills>
      </S.SectionThree>
    </S.Main>
  );
}
