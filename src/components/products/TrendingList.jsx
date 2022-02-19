import Carousel from '../Carousel';
import ProductItem from '../Products/ProductItem';

function TrendingList() {
  return (
    <div>
      <div className="container m-auto bg-black rounded py-4">
        <h2 className="flex font-medium text-white text-xl">
          Top Selling Product
        </h2>
        <div className="overflow-hidden px-8 py-8">
          <Carousel
            settings={{
              dots: true,
              centerMode: true,
              infinite: true,
              speed: 500,
              slidesToShow: 5,
              slidesToScroll: 5,
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
  );
}

export default TrendingList;
