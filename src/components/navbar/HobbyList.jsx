import React from 'react';
import HobbyItem from './HobbyItem';
import './Hobby.css';

const HobbyList = () => {
  const hobbies = [
    { title: 'All Hobbies', bsIcon: 'bi-pc-display' },
    { title: 'Desktop Gaming', bsIcon: 'bi-pc-display' },
    { title: 'Desk Decorating', bsIcon: 'bi-keyboard' },
    { title: 'Console Gaming', bsIcon: 'bi-controller' },
    { title: 'Entertainment', bsIcon: 'bi-film' },
    { title: 'Collectible', bsIcon: 'bi-puzzle' },
    { title: 'Gadgets', bsIcon: 'bi-smartwatch' },
    { title: 'Photography', bsIcon: 'bi-camera' },
    { title: 'Work Out', bsIcon: 'bi-bicycle' },
  ];

  return (
    <div className="grid hobby-grid lg:border-seperate w-full md:flex md:justify-center">
      {hobbies.map(({ title, bsIcon }) => (
        <HobbyItem key={title} title={title} bsIcon={bsIcon} />
      ))}
    </div>
  );
};

export default HobbyList;
