import React from 'react';
import { useEffect, useState } from 'react';
import FilterItem from '../components/Catalogue/FilterItem';
import ProductList from '../components/Products/ProductList';
import { motion } from 'framer-motion';
import 'rc-slider/assets/index.css';

const initialFilter = {
  brand: [],
  sort: 'newest',
};

const Catalogue = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState(initialFilter);
  const brand = products
    .map((item, index, array) => {
      return item.brand;
    })
    .filter(
      (item, index, array) =>
        array.findIndex((ele, index) => ele.id === item.id) === index
    );

  // Sorting
  useEffect(() => {
    const filterByBrand = products.filter(
      (item) =>
        filter.brand.length === 0 || filter.brand.includes(String(item.brandId))
    );
    let filtered = [...filterByBrand];

    switch (filter.sort) {
      case 'newest': {
        filtered = filterByBrand.sort((a, b) => {
          return new Date(a.createdAt) - new Date(b.createdAt);
        });
        break;
      }
      case 'desc': {
        filtered = filterByBrand.sort((a, b) => {
          return Number(b.price) - Number(a.price);
        });
        break;
      }
      case 'asc': {
        filtered = filterByBrand.sort((a, b) => {
          return Number(a.price) - Number(b.price);
        });
        break;
      }
      default:
      // code block
    }

    setFilteredProducts(filtered);
  }, [products, filter]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="container flex justify-center items-center"
      style={{ padding: 0 }}
    >
      <div
        className="grid rounded header w-full p-3"
        style={{
          gridTemplateColumns: 'minmax( 320px ,1fr) 4fr',
        }}
      >
        <aside className="bg-slate-50 p-3 rounded-md max-w-xs">
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
                    setFilter={setFilter}
                  />
                ))}
              </div>
            </div>

            <div className="py-2">
              <h3 className="font-semibold pb-1 mb-3 border-b">
                Sort Products
              </h3>
              <select
                onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
              >
                <option value="newest">Newest</option>
                <option value="desc">Price (High to Low)</option>
                <option value="asc">Price (Low to High)</option>
              </select>
            </div>
          </div>
        </aside>
        <div
          className="px-2"
          style={
            {
              // gridArea: 'main'
            }
          }
        >
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </motion.div>
  );
};

export default Catalogue;
