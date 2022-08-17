import React from 'react';
import HerdListItem from '../components/HerdListItem';
import HerdDB from '../data/HerdDB';

function HerdList() {
  return (
    <React.Fragment>
      <h1>Sample Herd</h1>
      <section className='list-group'>
        {HerdDB.map((row) => (
          <HerdListItem key={row.ID} herdID={row.ID} />
        ))}
      </section>
    </React.Fragment>
  );
}

export default React.memo(HerdList);
