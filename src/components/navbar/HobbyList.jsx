import React from 'react';
import HobbyItem from './HobbyItem';

const HobbyList = () => {
  return (
    <div className="grid grid-cols-4 gap-0 lg:border-seperate">
      <HobbyItem title={'All Hobbies'} bsIcon={'bi-pc-display'} />
      <HobbyItem title={'Desktop Gaming'} bsIcon={'bi-pc-display'} />
      <HobbyItem title={'Desk Decorating'} bsIcon={'bi-keyboard'} />
      <HobbyItem title={'Console Gaming'} bsIcon={'bi-controller'} />
      <HobbyItem title={'Entertainment'} bsIcon={'bi-film'} />
      <HobbyItem title={'Collectible'} bsIcon={'bi-puzzle'} />
      <HobbyItem title={'Gadgets'} bsIcon={'bi-smartwatch'} />
      <HobbyItem title={'Photography'} bsIcon={'bi-camera'} />
      {/* <HobbyItem title={'Work Out'} bsIcon={'bi-bicycle'} /> */}
    </div>
  );
};

export default HobbyList;
