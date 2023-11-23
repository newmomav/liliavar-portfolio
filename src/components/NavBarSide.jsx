import DarkMode from './DarkMode';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/imprint', id: 'imprint', title: 'imprint' },
  { to: '/contact', id: 'contact', title: 'contact' },
];

const NavBarSide = () => {
  return (
    <>
      <ul className="h-[40%] w-[50%] flex flex-col mx-left space-y-14 pt-10">
        <li className="-rotate-90">
          <DarkMode />
        </li>

        {navLinks.map((link) => (
          <li className="-rotate-90 md:text-xs lg:text-sm" key={link.id}>
            <NavLink to={link.to}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBarSide;
