import React from 'react'
import * as S from '../Styles/main_styled'
import { CiLinkedin } from 'react-icons/ci'
import { MdOutlineMail } from 'react-icons/md'
import { SlSocialGithub } from 'react-icons/sl'
import { FaHtml5 } from 'react-icons/fa6'
import { FaCss3Alt } from 'react-icons/fa'
import { RiJavascriptLine } from 'react-icons/ri'
import { TbBrandNextjs, TbBrandVite } from 'react-icons/tb'
import Aos from 'aos'

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
                <MdOutlineMail size={40} style={{color:'#F1742B'}}/>
              </a>
            </div>
           <div>
              <a href="https://www.github.com/thalesreis7" target="_blank" rel="noopener nooreferrer"> 
                  <SlSocialGithub size={35} style={{color:'#F1742B'}}/>
                </a>
           </div>
            <div>
              <a href="https://www.linkedin.com/in/thales-reis-furtado" target="_blank" rel="noopner nooreferrer">
                <CiLinkedin size={40} style={{color:'#F1742B'}}/>
              </a> 
            </div>
          </S.BoxIcons>
      </S.SectionTwo>
      <S.SectionThree>
              <h3>Skills</h3>
            <S.BoxSkills>
              <FaHtml5  size={50} style={{color:'orange'}}/>
              <FaCss3Alt size={50} style={{color:'orange'}}/>
              <RiJavascriptLine size={50} style={{color:'orange'}}/>
              <TbBrandNextjs size={50} style={{color:'orange'}}/>
              <TbBrandVite size={50} style={{color:'orange'}}/>
            </S.BoxSkills>
      </S.SectionThree>
     
    </S.Main>
  )
}
