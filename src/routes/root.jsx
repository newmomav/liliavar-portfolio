import Landing from '../components/Landing';
import Vita from '../components/Vita';
import Work from '../components/Work';
import Imprint from '../components/Imprint';
import Contact from '../components/Contact';
import ErrorPage from '../pages/ErrorPage';

const routes = [
  { path: '/', element: <Landing />, id: 1, title: 'Landing' },
  { path: '/vita', element: <Vita />, id: 2, title: 'Vita' },
  { path: '/work', element: <Work />, id: 3, title: 'Work' },
  { path: '/imprint', element: <Imprint />, id: 4, title: 'Imprint' },
  { path: '/contact', element: <Contact />, id: 5, title: 'Contact' },
  { path: '*', element: <ErrorPage />, id: 6, title: 'Error' },
];

export default routes;
