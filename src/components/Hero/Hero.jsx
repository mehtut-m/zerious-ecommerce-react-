import { Link } from 'react-router-dom';
import Carousel from '../Carousel';

const Hero = () => {
  return (
    <div className="m-auto container" style={{ padding: 0 }}>
      <Carousel
        settings={{
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
        }}
      >
        <Link to="/">
          <img
            src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/01/AMD-Always-On-JAN22-1240x350-03.jpg"
            alt="promo"
          />
        </Link>
        <Link to="">
          <img
            src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2021/11/Hobby%20station-17.jpg"
            alt="promo"
          />
        </Link>
      </Carousel>
    </div>
  );
};

export default Hero;
