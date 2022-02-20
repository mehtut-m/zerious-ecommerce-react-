import Carousel from '../Carousel';
import './Product.css';
import ProductItem from '../Products/ProductItem';

function TrendingList() {
  return (
    // <div>
    <div className="container m-auto bg-black rounded py-4">
      <h2 className="flex font-medium text-primary text-xl">
        Top Selling Product
      </h2>
      <div className="trending-product px-8 py-8">
        <Carousel
          settings={{
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          }}
        >
          <div>
            <ProductItem product={{ id: '1', name: 'temp', productImg: [] }} />
          </div>
          <div>
            <ProductItem product={{ id: '1', name: 'temp', productImg: [] }} />
          </div>
          <div>
            <ProductItem product={{ id: '1', name: 'temp', productImg: [] }} />
          </div>
          <div>
            <ProductItem product={{ id: '1', name: 'temp', productImg: [] }} />
          </div>
          <div>
            <ProductItem product={{ id: '1', name: 'temp', productImg: [] }} />
          </div>
          <div>
            <ProductItem product={{ id: '1', name: 'temp', productImg: [] }} />
          </div>
          <div>
            <ProductItem product={{ id: '1', name: 'temp', productImg: [] }} />
          </div>
        </Carousel>
      </div>
    </div>
    // </div>
  );
}

export default TrendingList;
