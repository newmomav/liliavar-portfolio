import Background from './components/Background';
import Footer from './components/Footer';
import NavBarSide from './components/NavBarSide';
import NavBarTop from './components/NavBarTop';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <Background>
      <div className="p-2 pr-6 grid grid-rows-6 grid-cols-1 md:grid-cols-12 h-screen w-screen relative z-[100]">
        <aside className="hidden md:block md:row-span-6 md:col-span-1">
          <NavBarSide />
        </aside>
        <header className=" hidden md:block md:row-span-1 md:col-span-11">
          <NavBarTop />
        </header>
        <main className=" row-span-5 md:col-span-11 md:row-span-4">
          {children}
        </main>
        <footer className="row-span-1 md:col-span-11">
          <Footer />
        </footer>
      </div>
    </Background>
  );
};

export default Layout;
