import React from 'react'
import * as S from '../Styles/main_styled'
import { CiLinkedin } from 'react-icons/ci'
import { MdOutlineMail } from 'react-icons/md'
import { SlSocialGithub } from 'react-icons/sl'


export default function Main() {
  return (
    <S.Main>
      <S.Section>
        <S.BoxOne>
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
          <h2>Sobre min</h2>
          <p>Apaixonado por tecnologia e programação, tenho conhecimentos em Design Gráfico como: Illustrator,
           Photoshop e InDesign, decidi mudar de carreira e seguir com a programação e fazer o que gosto. 
           Tenho formação em  Análise e Desenvolvimento de Sistemas e atualmente estou realizando um curso de 
           Front-End pela Vai na Web.</p>
        </S.BoxSobre>
        <S.BoxIcons>
            <a href="mailto:thalesreis.praia@gmail.com" target="_blank"  rel="noopener nooreferrer">
            <MdOutlineMail size={70} style={{color:'yellowgreen'}}/>
            </a>
            <a href="https://www.github.com/thalesreis7" target="_blank" rel="noopener nooreferrer"> 
            <SlSocialGithub size={60} style={{color:'yellowgreen'}}/>
            </a>
            <a href="https://www.linkedin.com/in/thales-reis-furtado" target="_blank" rel="noopner nooreferrer">
            <CiLinkedin size={70} style={{color:'yellowgreen'}}/>
            </a> 
          </S.BoxIcons>
      </S.SectionTwo>
    </S.Main>
  )
}
