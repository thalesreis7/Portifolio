import React from 'react'
import * as S from '../Styles/header_styled'

export default function Header() {
  return (
    <S.Header>
      <S.BoxPrincipal>
        <S.BoxH1>
          <h1>Thales</h1>
        </S.BoxH1>
          <S.Nav>
              <S.Ul>
                <li>Sobre min</li>
                <li>Projetos</li>
                <li>Serviços</li>
                <li>Minhas Skills</li>
              </S.Ul>
          </S.Nav>
      </S.BoxPrincipal>
    </S.Header>
  )
}
