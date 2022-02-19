import Slider from 'react-slick';

export default function Carousel({ children, settings }) {
  return (
    <div className="w-full">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
