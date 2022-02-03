import React from 'react';

const TrackingItem = ({ item }) => {
  const {
    status_description,
    status_date,
    status,
    delivery_description,
    receiver_name,
  } = item;

  const orderComplete = status.startsWith('5');

  return (
    <div
      className="grid grid-cols-3 mb-2"
      style={{ gridTemplateColumns: '0.25fr 1fr 1fr 0.25fr' }}
    >
      <span className="col-start-2 col-span-1 text-right mr-8">
        {status_date}
      </span>
      <div className="ml-10">
        <span>{status_description}</span>
        {orderComplete && (
          <>
            <p>{delivery_description}</p>
            <p>{receiver_name}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TrackingItem;