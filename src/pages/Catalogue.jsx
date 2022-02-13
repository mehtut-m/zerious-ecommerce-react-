import React from 'react';
import { useEffect } from 'react';
import FilterItem from '../components/Catalogue/FilterItem';
import ProductList from '../components/Products/ProductList';

const Catalogue = () => {
  useEffect(() => {
    //   Get Brand
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
            <div className="py-2 ">
              <h3 className="font-semibold mb-4">Brand</h3>
              <div className="max-h-56 overflow-scroll">
                <FilterItem label="฿ 0 - 3,000" name value />
                <FilterItem label="฿ 3,000 - 5,000" name value />
                <FilterItem label="฿ 5,000 - 10,000" name value />
                <FilterItem label="฿ 10,000 - 15,000" name value />
                <FilterItem label="฿ 15,000 - Above" name value />
                <FilterItem label="฿ 0 - 3,000" name value />
                <FilterItem label="฿ 3,000 - 5,000" name value />
                <FilterItem label="฿ 5,000 - 10,000" name value />
                <FilterItem label="฿ 10,000 - 15,000" name value />
                <FilterItem label="฿ 15,000 - Above" name value />
                <FilterItem label="฿ 0 - 3,000" name value />
                <FilterItem label="฿ 3,000 - 5,000" name value />
                <FilterItem label="฿ 5,000 - 10,000" name value />
                <FilterItem label="฿ 10,000 - 15,000" name value />
                <FilterItem label="฿ 15,000 - Above" name value />
              </div>
            </div>

            <div className="py-2">
              <h3 className="font-semibold mb-4">Price Range</h3>
              <FilterItem label="฿ 0 - 3,000" name value />
              <FilterItem label="฿ 3,000 - 5,000" name value />
              <FilterItem label="฿ 5,000 - 10,000" name value />
              <FilterItem label="฿ 10,000 - 15,000" name value />
              <FilterItem label="฿ 15,000 - Above" name value />
            </div>
          </div>
        </aside>
        <div style={{ gridArea: 'main' }}>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
