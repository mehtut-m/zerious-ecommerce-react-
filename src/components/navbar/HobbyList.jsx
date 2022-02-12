import { Link } from 'react-router-dom';
import HobbyItem from './HobbyItem';
import './Hobby.css';

const HobbyList = () => {
  const hobbies = [
    { title: 'All Hobbies', bsIcon: 'bi-pc-display', path: '/' },
    {
      title: 'Desktop Gaming',
      bsIcon: 'bi-pc-display',
      path: '/desktop-gaming',
    },
    {
      title: 'Desk Decorating',
      bsIcon: 'bi-keyboard',
      path: '/desk-decorating',
    },
    {
      title: 'Console Gaming',
      bsIcon: 'bi-controller',
      path: '/console-gaming',
    },
    { title: 'Entertainment', bsIcon: 'bi-film', path: '/entertainment' },
    { title: 'Collectible', bsIcon: 'bi-puzzle', path: '/collectible' },
    { title: 'Gadgets', bsIcon: 'bi-smartwatch', path: '/gadgets' },
    { title: 'Photography', bsIcon: 'bi-camera', path: '/photography' },
    { title: 'Work Out', bsIcon: 'bi-bicycle', path: '/work-out' },
  ];

  return (
    <div className="grid hobby-grid lg:border-seperate w-full md:flex md:justify-center">
      {hobbies.map(({ title, bsIcon, path }, index) => (
        <Link key={index} to={path}>
          <HobbyItem key={index} title={title} bsIcon={bsIcon} />
        </Link>
      ))}
    </div>
  );
};

export default HobbyList;
