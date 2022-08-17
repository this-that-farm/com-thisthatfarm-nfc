import 'bootswatch/dist/sketchy/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import HerdDetail from './pages/HerdDetail';
import HerdList from './pages/HerdList';

function App() {
  return (
    <HashRouter>
      <section className='container-fluid my-3'>
        <Header />
        <Routes>
          <Route path='/' element={<HerdList />} />
          <Route path=':herdID' element={<HerdDetail />} />
        </Routes>
        <Footer />
      </section>
    </HashRouter>
  );
}

export default React.memo(App);
