import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  console.log({ location });

  let title;
  switch (location.pathname) {
    case '/':
      title = 'coucou ❤ hi there coucou ❤ hi there';
      break;
    case '/vita':
      title = 'web development web development';
      break;
    case '/work':
      title = 'work work work work work work';
      break;
    case '/imprint':
      title = '© liliavar © liliavar © liliavar © liliavar';
      break;
    case '/contact':
      title = 'contact me contact me';
      break;
    default:
      title = 'web development web development';
  }
  return (
    <div className="fixed left-0 bottom-0 w-full ">
      <div className="marquee overflow-hidden">
        <div className="whitespace-nowrap font-iawriter">
          <span className="marquee-content text-[3rem] md:text-[6rem] lg:text-[7rem]">
            {title}
          </span>

          <span className="marquee-content text-[3rem] md:text-[6rem] lg:text-[7rem]">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
