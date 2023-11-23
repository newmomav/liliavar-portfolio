import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import routes from './routes/root';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
