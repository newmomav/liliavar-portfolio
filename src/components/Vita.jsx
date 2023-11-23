import { NavLink } from 'react-router-dom';

const Vita = () => {
  const vitaData = [
    {
      year: '*1993',
      description: 'in berlin',
    },
    {
      year: '2013-2019',
      description: 'costume & stage design @kunsthochschule berlin weißensee',
    },
    {
      year: '2018',
      description: 'erasmus @royal academy of antwerp',
    },
    {
      year: '2019-2021',
      description: 'stage assistent @deutsche oper berlin',
    },
    {
      year: '2023-2024',
      description: 'full stack developer course @digital career institute',
    },
  ];

  return (
    <div className="w-full h-full flex justify-center relative component-container">
      <NavLink to="/" className="absolute top-1 left-2 font-bold">
        x
      </NavLink>

      <div
        className="w-[40%] overflow-y-auto p-4 pt-8 pr-1 text-right text-xl md:text-4xl lg:text-5xl xl:text-6xl"
        style={{
          backgroundColor: 'var(--bg-blur)',
          wordBreak: 'break-word',
        }}
      >
        {vitaData.map((item, index) => (
          <p className="mb-6" key={index}>
            <strong>{item.year}</strong> {item.description}
          </p>
        ))}
      </div>
      <div
        className="h-full w-[60%]"
        style={{
          backgroundImage: 'var(--profil_img2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          opacity: '0.7',
        }}
      ></div>
    </div>
  );
};

export default Vita;
