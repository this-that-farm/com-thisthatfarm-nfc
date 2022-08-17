import React from 'react';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import {HashRouter, Routes} from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';

function App() {
  return (
    <HashRouter>
      <section className='container-fluid my-3'>
        <Header />
        <Routes />
        <Footer />
      </section>
    </HashRouter>
  );
}

export default App;
