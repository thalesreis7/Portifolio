import "slick-carousel/slick/slick.css";
import { ListaProjetos } from "./Cards";
import { Carousel } from "antd" 
import "./Projetos.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Projetos() {

  useEffect(()=>{
    AOS.init({duration: "2000"});
  })

  return (
    <>
      <section className="sectionProjetos" 
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <div className="BoxProjetosTitle" 
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            <h3 className="TitleProjetos" id='project'>Projetos</h3>
          </div>
          <Carousel 
            slidesToShow={3}
            autoplay={true}
            pauseOnHover={true}
            speed={4000}
            dots={false}
            className="carrossel"
            responsive={[
            {
              breakpoint: 2600,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1400,
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
          {ListaProjetos.map((data, index) => (
            <div key={index} className="boxProjetos"  
             data-aos="fade-up"
             data-aos-anchor-placement="top-center">
              <img src={data.imagem} alt=""  className="image"/>
              <h3 className="title">{data.titulo}</h3>
              <div className="BoxDescricao">
                <p className="descricao">{data.descricao}</p>
              </div>
              <div className="tecnologias">
                {data.tech.map((tech, index) => (
                  <p key={index}>{tech}</p>
                ))}
              </div>
              <a href={data.url} target="_blank" rel="noopener noreferrer" className="Link">
                Link do projeto
              </a>
            </div>
          ))}
        </Carousel>
      </section>
    </>
  )
}