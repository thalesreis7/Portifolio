import React from 'react'
import * as S from '../Styles/main_styled'
import { CiLinkedin } from 'react-icons/ci'
import { MdOutlineMail } from 'react-icons/md'
import { SlSocialGithub } from 'react-icons/sl'
import html from "../../assets/img/icones/html.png"
import css from "../../assets/img/icones/css.png"
import javascript from "../../assets/img/icones/javascript.svg"
import next from "../../assets/img/icones/next-js.svg"
import reactjs from "../../assets/img/icones/reactjs.png"
import stylee from "../../assets/img/icones/styled-components.svg"
import vite from "../../assets/img/icones/vite-js-logo.svg"


export default function Main() {
  return (
    <S.Main>
      <S.Section>
        <S.BoxOne >
          <h1>Olá, eu sou o Thales Reis ;)</h1>
          <p>Front-End Web Developer</p>
        </S.BoxOne>
        <S.BoxTwo>
            <img src="" alt="Foto de perfil" />
            <figcaption>"Transformando o design em realidade com código."</figcaption>
        </S.BoxTwo>
      </S.Section>
      <S.SectionTwo>
        <S.BoxSobre>
          <h2 id='about'>Sobre min</h2>
          <p>Apaixonado por tecnologia e programação, tenho conhecimentos em Design Gráfico como: Illustrator,
           Photoshop e InDesign, decidi mudar de carreira e seguir com a programação e fazer o que gosto. 
           Tenho formação em  Análise e Desenvolvimento de Sistemas e atualmente estou realizando um curso de 
           Front-End pela Vai na Web.</p>
        </S.BoxSobre>
        <S.BoxIcons>
            <div>
              <a href="mailto:thalesreis.praia@gmail.com" target="_blank"  rel="noopener nooreferrer">
                <MdOutlineMail size={40} style={{color:'#d7263d'}}/>
              </a>
            </div>
           <div>
              <a href="https://www.github.com/thalesreis7" target="_blank" rel="noopener nooreferrer"> 
                  <SlSocialGithub size={35} style={{color:'#d7263d'}}/>
                </a>
           </div>
            <div>
              <a href="https://www.linkedin.com/in/thales-reis-furtado" target="_blank" rel="noopner nooreferrer">
                <CiLinkedin size={40} style={{color:'#d7263d'}}/>
              </a> 
            </div>
          </S.BoxIcons>
      </S.SectionTwo>
      <S.SectionThree>
             <h3 id='skills'>Skills</h3>
            <S.BoxSkills>
                <S.Skills>
                    <figure>
                      <img src={html} alt="" />
                    </figure>
                    <figure>
                      <img src={css} alt="" />
                    </figure>
                    <figure>
                      <img src={javascript} alt="" />
                    </figure>
                    <figure>
                      <img src={next} alt="" />
                    </figure>
                </S.Skills>
                <S.Skills>
                    <figure>
                      <img src={reactjs} alt="" />
                    </figure>
                    <figure>
                      <img src={stylee} alt="" />
                    </figure>
                    <figure>
                      <img src={vite} alt="" />
                    </figure>
                </S.Skills>
            </S.BoxSkills>
      </S.SectionThree>
    </S.Main>
  )
}
