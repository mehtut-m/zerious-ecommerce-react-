import React from 'react';
import { useEffect, useState } from 'react';
import FilterItem from '../components/Catalogue/FilterItem';
import ProductList from '../components/Products/ProductList';
import { getAllProduct } from '../api/product';

const Catalogue = () => {
  const [products, setProducts] = useState([]);

  const [filterByBrand, setFilterByBrand] = useState([]);

  const brand = products
    .map((item, index, array) => {
      return item.brand;
    })
    .filter(
      (item, index, array) =>
        array.findIndex((ele, index) => ele.id === item.id) === index
    );

  const filteredProduct = products.filter((item) => {
    return (
      filterByBrand.length === 0 || filterByBrand.includes(String(item.brandId))
    );
  });

  // Fetch product on load
  useEffect(() => {
    getAllProduct()
      .then((res) => setProducts([...res.data.products]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container flex justify-center items-center">
      <div
        className="grid bg-slate-100 w-full p-3"
        style={{
          gridTemplateAreas: `
                    'sidebar main main'
                    'sidebar main main'
                    'sidebar main main'
                `,
        }}
      >
        <aside
          style={{ gridArea: 'sidebar' }}
          className="bg-slate-50 p-3 rounded-md"
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
                    setFilterByBrand={setFilterByBrand}
                  />
                ))}
              </div>
            </div>

            <div className="py-2">
              <h3 className="font-semibold pb-1 mb-3 border-b">Price Range</h3>
              <FilterItem label="฿ 0 - 3,000" name value />
              <FilterItem label="฿ 3,000 - 5,000" name value />
              <FilterItem label="฿ 5,000 - 10,000" name value />
              <FilterItem label="฿ 10,000 - 15,000" name value />
              <FilterItem label="฿ 15,000 - Above" name value />
            </div>
          </div>
        </aside>
        <div style={{ gridArea: 'main' }}>
          <ProductList products={filteredProduct} />
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
