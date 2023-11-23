import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Work = () => {
  const [hoveredTitle, setHoveredTitle] = useState(null);

  return (
    <div className="w-full relative flex">
      <NavLink to="/" className="absolute top-1 left-2 font-bold z-10">
        x
      </NavLink>

      <div
        className="w-2/3 overflow-y-auto p-4 pt-8 pr-1 text-right text-6xl component-container"
        style={{
          backgroundColor: 'var(--bg-blur)',
          wordBreak: 'break-word',
        }}
      >
        <p>website for artist </p>
        <p
          className="text-[var(--body_color)] font-calabrese text-8xl border-b-2 border-[var(--body-color)]"
          onMouseEnter={() => setHoveredTitle('123456789')} // Set hovered title
          onMouseLeave={() => setHoveredTitle(null)}
        >
          123456789
        </p>
        <p>javascript project </p>
        <p
          className="text-[var(--body_color)] font-immortal text-8xl border-b-2 border-[var(--body-color)]"
          onMouseEnter={() => setHoveredTitle('sassyCryptoTeens')}
          onMouseLeave={() => setHoveredTitle(null)}
        >
          sassy crypto teens
        </p>
      </div>
      <div
        className="w-1/3 overflow-y-auto p-4 pt-8 pr-1 text-right text-6xl component-container"
        style={{
          backgroundColor: 'var(--bg-blur)',
          wordBreak: 'break-word',
        }}
      >
        {hoveredTitle === '123456789' && (
          <img
            src="/Screenshot from 2023-09-03 17-59-01.png"
            alt="Description of first image"
          />
        )}
        {hoveredTitle === 'sassyCryptoTeens' && (
          <img
            src="/Screenshot from 2023-09-03 18-22-17.png"
            alt="Description of second image"
          />
        )}
      </div>
    </div>
  );
};

export default Work;
