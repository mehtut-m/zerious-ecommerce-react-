import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero/Hero';
import HobbyWrapper from '../components/Navbar/HobbyWrapper';
import ProductItem from '../components/Products/ProductItem';
import ProductList from '../components/Products/ProductList';

function Home() {
  const [products, setProducts] = useState([]);

  return (
    <main className="w-full">
      <div>
        <Hero />
      </div>
      <HobbyWrapper />
      {/* Top trending */}
      <div>
        <div className="container m-auto bg-black rounded">
          <h2 className="flex font-medium text-white text-xl mb-6">
            Top Selling Product
          </h2>
          <div className="overflow-hidden px-16">
            {/*  */}
            <Carousel
              settings={{
                dots: true,
                centerMode: true,
                infinite: true,
                speed: 500,
                slidesToShow: 5,
              }}
            >
              <div>
                <ProductItem
                  product={{ id: '1', name: 'temp', productImg: [] }}
                />
              </div>
              <div>
                <ProductItem
                  product={{ id: '1', name: 'temp', productImg: [] }}
                />
              </div>
              <div>
                <ProductItem
                  product={{ id: '1', name: 'temp', productImg: [] }}
                />
              </div>
              <div>
                <ProductItem
                  product={{ id: '1', name: 'temp', productImg: [] }}
                />
              </div>
              <div>
                <ProductItem
                  product={{ id: '1', name: 'temp', productImg: [] }}
                />
              </div>
              <div>
                <ProductItem
                  product={{ id: '1', name: 'temp', productImg: [] }}
                />
              </div>
              <div>
                <ProductItem
                  product={{ id: '1', name: 'temp', productImg: [] }}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      {/* <ProductList /> */}
    </main>
  );
}

export default Home;
