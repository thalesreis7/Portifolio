import React from 'react'
import * as S from '../Styles/header_styled'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <S.Header>
      <S.BoxPrincipal>
        <S.BoxH1>
          <Link to="/">
            <h1>Thales</h1>
          </Link>
        </S.BoxH1>
          <S.Nav>
              <S.Ul>
                <a href='#about'>Sobre min</a>
                <Link to="/Projetos">
                  <li>Projetos</li>
                </Link>
                <li>Serviços</li>
                <li>Minhas Skills</li>
              </S.Ul>
          </S.Nav>
      </S.BoxPrincipal>
    </S.Header>
  )
}
