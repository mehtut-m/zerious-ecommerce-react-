import Carousel from '../Carousel';
import { useEffect, useState } from 'react';
import './Product.css';
import ProductItem from '../Products/ProductItem';
import { getTrendingProduct } from '../../api/product';

function TrendingList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getTrendingProduct()
      .then((res) => setProducts(res.data.trendingProduct))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container m-auto bg-black rounded-md py-4 mt-16">
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
          {products.map((item) => (
            <ProductItem product={item} key={item.id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default TrendingList;
