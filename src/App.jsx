import { Route, Routes } from 'react-router';

import Header from './components/layouts/Header';
import Signup from './components/pages/Signup';
import Welcome from './components/pages/Welcome';
import Page404 from './components/pages/Page404';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
