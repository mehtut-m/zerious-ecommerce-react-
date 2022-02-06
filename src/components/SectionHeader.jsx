import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="user-header">
      <div className="user-pg-header flex justify-between pb-4">
        <div>
          <h2 className="user-pg-title ">{title}</h2>
          <p className="text-base">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
