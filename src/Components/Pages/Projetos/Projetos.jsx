import React from 'react'
import { Carousel } from "antd";
import { ListaProjetos } from './Cards';
import * as S from "../../Styles/projetos_styled"


export default function Projetos() {

  const contentStyle = {
    // height: '160px',
    color: '#fff',
    // lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    border: 'solid red'
  };

  return (
    <>
     <Carousel
        autoplay
        pauseOnHover
        dots={false}
        style={contentStyle}
        responsive={[
          {
            breakpoint: 2600,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
      {ListaProjetos.map((item,index)=>(
        <S.BoxCard>
          <img src={item.imagem} alt="" />
          <h3>{item.titlo}</h3>
          <p>{item.descricao}</p>
          <a href={item.url} target='_blank' rel="noopener noreferrer">ver projeto</a>
        </S.BoxCard>
      ))}
      </Carousel>
    
      </>
  )
}
