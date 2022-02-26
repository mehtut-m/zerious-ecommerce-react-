import React from 'react';
import { useEffect, useState } from 'react';
import FilterItem from '../components/Catalogue/FilterItem';
import ProductList from '../components/Products/ProductList';
import { getAllProduct } from '../api/product';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const initialFilter = {
  brand: [],
  price: { min: 0, max: '' },
};

const Catalogue = () => {
  const [products, setProducts] = useState([]);

  const [filter, setFilter] = useState(initialFilter);

  const [filterByBrand, setFilterByBrand] = useState([]);

  const brand = products
    .map((item, index, array) => {
      return item.brand;
    })
    .filter(
      (item, index, array) =>
        array.findIndex((ele, index) => ele.id === item.id) === index
    );

  // const filteredProduct = products.filter((item) => {
  //   return (
  //     filterByBrand.length === 0 || filterByBrand.includes(String(item.brandId))
  //   );
  // });

  // Fetch product on load
  useEffect(() => {
    getAllProduct()
      .then((res) => {
        setProducts([...res.data.products]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container flex justify-center items-center">
      <div
        className="grid rounded header w-full p-3"
        style={{
          gridTemplateAreas: `
                    'sidebar main main main'
                    'sidebar main main main'
                    'sidebar main main main'
                `,
        }}
      >
        <aside
          style={{ gridArea: 'sidebar' }}
          className="bg-slate-50 p-3 rounded-md max-w-xs"
        >
          {/* Filter Heading */}
          <div>
            <h3 className="p-2 font-semibold">Filter Option</h3>
          </div>
          {/* Filter Body */}
          <div className="p-2">
            <div className="py-2">
              <h3 className="font-semibold pb-1 border-b">Brand</h3>
              <div className="max-h-56 overflow-scroll">
                {brand.map((el) => (
                  <FilterItem
                    key={el.id}
                    label={el.name}
                    value={el.id}
                    filter={filter}
                    setFilterByBrand={setFilterByBrand}
                    setFilter={setFilter}
                  />
                ))}
              </div>
            </div>

            <div className="py-2">
              <h3 className="font-semibold pb-1 mb-3 border-b">Price Range</h3>
              {/* <label>From :</label>
              <input
                type="number"
                min="0"
                onChange={(e) =>
                  setFilter({ ...filter, min: Number(e.target.value) })
                }
              />
              <label>To :</label>
              <input
                type="number"
                min={filter.min}
                onChange={(e) =>
                  setFilter({ ...filter, max: Number(e.target.value) })
                }
              /> */}
            </div>
          </div>
        </aside>
        <div className="p-2" style={{ gridArea: 'main' }}>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
