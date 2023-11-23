// import BackgroundSvg from './BackgroundSvg';

// eslint-disable-next-line react/prop-types
function Background({ children }) {
  return (
    <div
      className="h-screen w-screen -z-50"
      style={{
        backgroundImage: 'var(--background_image)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {children}
    </div>
  );
}

export default Background;
