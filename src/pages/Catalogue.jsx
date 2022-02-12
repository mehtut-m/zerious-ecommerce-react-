import React from 'react';
import { useEffect } from 'react';
import FilterItem from '../components/Catalogue/FilterItem';

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
                    'sidebar main main main'
                    'sidebar main main main'
                    'sidebar main main main'
                `,
        }}
      >
        <aside style={{ gridArea: 'sidebar' }} className="bg-slate-50 p-3">
          {/* Filter Heading */}
          <div>Filter Option</div>
          {/* Filter Body */}
          <div>
            <div className="py-2 max-h-60 overflow-scroll">
              <h3 className="text-lg">Brand</h3>
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

            <div className="py-2">
              <h3 className="text-lg">Price Range</h3>
              <FilterItem label="฿ 0 - 3,000" name value />
              <FilterItem label="฿ 3,000 - 5,000" name value />
              <FilterItem label="฿ 5,000 - 10,000" name value />
              <FilterItem label="฿ 10,000 - 15,000" name value />
              <FilterItem label="฿ 15,000 - Above" name value />
            </div>
          </div>
        </aside>
        <div style={{ gridArea: 'main' }}>hi</div>
      </div>
    </div>
  );
};

export default Catalogue;
