import { NavLink } from 'react-router-dom';

const NavBarTop = () => {
  const navLinks = [
    { to: '/vita', id: 'vita', title: 'vita' },
    { to: '/work', id: 'work', title: 'work' },
  ];

  return (
    <>
      <ul className="flex justify-end space-x-8 ">
        {navLinks.map((link) => (
          <li className="text-[3rem] font-black" key={link.id}>
            <NavLink to={link.to}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBarTop;
