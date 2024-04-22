import React from 'react'
import * as S from '../Styles/header_styled'
import icon from "../../assets/img/icones/iconBar.png"

export default function Header() {
  return (
    <S.Header>
      <S.BoxPrincipal>
        <S.BoxH1>
            <img src={icon} alt="" />
            <h1>Thales</h1>
        </S.BoxH1>
          <S.Nav>
              <S.Ul>
                <a href='#about'>Sobre min</a>
                <a href='#project'>Projetos</a>
                {/* <a>Contato</a> */}
                <a href='#skills'>Minhas Skills</a>
              </S.Ul>
          </S.Nav>
      </S.BoxPrincipal>
    </S.Header>
  )
}
