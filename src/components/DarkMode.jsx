import { useEffect, useState } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    console.log('Button clicked!');
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <button className="z-50 cursor-pointer" onClick={toggleTheme}>
        {isDarkMode === false ? (
          <em className="md:text-xs lg:text-sm">moon</em>
        ) : (
          <em className="md:text-xs lg:text-sm">sun</em>
        )}
      </button>
    </div>
  );
};

export default DarkMode;
