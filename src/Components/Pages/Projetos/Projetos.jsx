import "slick-carousel/slick/slick.css";
import { ListaProjetos } from "./Cards";
import { Carousel } from "antd" 
import "./Projetos.css"

export default function Projetos() {
  return (
    <>
      <section className="sectionProjetos">
        <div className="BoxProjetosTitle">
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
            <div key={index} className="boxProjetos">
              <img src={data.imagem} alt=""  className="image"/>
              <h3 className="title">{data.titulo}</h3>
            <div className="BoxDescricao">
              <p className="descricao">{data.tech1}</p>
              <p className="descricao">{data.tech2}</p>
              <p className="descricao">{data.tech3}</p>
              <p className="descricao">{data.tech4}</p>
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