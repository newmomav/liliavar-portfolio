import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  const [language, setLanguage] = useState('eng');

  const contactData = {
    eng: {
      intro: 'lili avar',
      description:
        'as a former stage and costume designer, my focus is on unique and original designs. nonehtless i am also eager to develop performant and        user-friendly website with an appealing design.',
      email: '✴lili@avar.online',
      github: '✴github:newmomav',
      linkedIn: '✴linkedIn',
    },
    de: {
      intro: 'lili avar',
      description:
        'als ehemalige bühnen- und kostümbildnerin liegt mein Fokus auf einzigartigen und originellen Designs. Trotzdem bin ich auch bestrebt, leistungsstarke und benutzerfreundliche Webseiten mit ansprechendem Design zu entwickeln.',
      email: '↗lili@avar.online',
      github: '↗github:newmomav',
      linkedIn: '↗linkedIn',
    },
  };

  const handleLanguage = () => {
    setLanguage(language === 'eng' ? 'de' : 'eng');
  };

  return (
    <div className="w-full h-full flex justify-end relative">
      <NavLink to="/" className="absolute top-1 right-4 font-bold z-10">
        x
      </NavLink>
      <div
        className=" w-1/2 overflow-y-auto "
        style={{
          backgroundColor: 'var(--bg-blur)',
        }}
      >
        <div className="component-container p-4 pl-1">
          <div className="text-5xl text-left mb-8">
            <button className="mb-2" onClick={handleLanguage}>
              {language === 'eng' ? '[de]' : '[eng]'}
            </button>

            <blockquote>{contactData[language].description}</blockquote>
          </div>
          <div className="text-5xl text-justify">
            <a className="cursor-pointer " href="mailto:lili@avar.online">
              {contactData[language].email}
            </a>
            <br />
            <a className="cursor-pointer" href="https://github.com/newmomav">
              {contactData[language].github}
            </a>
            <br />
            <a
              className="cursor-pointer"
              href="https://www.linkedin.com/in/liliavar/"
            >
              {contactData[language].linkedIn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
