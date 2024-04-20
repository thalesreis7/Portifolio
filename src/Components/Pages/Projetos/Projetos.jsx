import "slick-carousel/slick/slick.css";
import { ListaProjetos } from "./Cards";
import * as S from "../../Styles/projetos_styled";
import Slider from "react-slick";

export default function Projetos() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>

        <Slider {...settings} className="Carousel">
          {ListaProjetos.map((data, index) => (
            <S.BoxCard key={index}>
              {/* <img src={data.imagem} alt="" /> */}
              <h3>{data.titlo}</h3>
              <p>{data.descricao}</p>
            </S.BoxCard>
          ))}
        </Slider>
      </>
  )
}