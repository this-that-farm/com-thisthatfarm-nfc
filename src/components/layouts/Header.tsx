import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className='mb-3'>
      <nav className='navbar navbar-dark bg-dark'>
        <section className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            NFC Demo
          </Link>
        </section>
      </nav>
    </header>
  );
}

export default React.memo(Header);
