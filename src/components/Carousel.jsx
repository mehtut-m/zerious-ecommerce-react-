import Slider from 'react-slick';

export default function Carousel({ children, settings }) {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
