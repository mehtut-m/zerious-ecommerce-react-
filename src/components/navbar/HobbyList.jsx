import { Link } from 'react-router-dom';
import HobbyItem from './HobbyItem';
import './Hobby.css';

const HobbyList = () => {
  const hobbies = [
    { title: 'All Hobbies', bsIcon: 'bi-pc-display', path: '/product/' },
    {
      id: '1',
      title: 'Desktop Gaming',
      bsIcon: 'bi-pc-display',
      path: '/hobby/1',
    },
    {
      id: '2',
      title: 'Desk Decorating',
      bsIcon: 'bi-keyboard',
      path: '/hobby/2',
    },
    {
      id: '7',
      title: 'Console Gaming',
      bsIcon: 'bi-controller',
      path: '/hobby/7',
    },
    {
      id: '4',
      title: 'Entertainment',
      bsIcon: 'bi-film',
      path: '/hobby/4',
    },
    {
      id: '5',
      title: 'Collectible',
      bsIcon: 'bi-puzzle',
      path: '/hobby/5',
    },
    {
      id: '3',
      title: 'Gadgets',
      bsIcon: 'bi-smartwatch',
      path: '/hobby/3',
    },
    {
      id: '8',
      title: 'Photography',
      bsIcon: 'bi-camera',
      path: '/hobby/8',
    },
    {
      id: '9',
      title: 'Work Out',
      bsIcon: 'bi-bicycle',
      path: '/hobby/9',
    },
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
