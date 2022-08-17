import React from 'react';
import {Link} from 'react-router-dom';
import HerdDB from '../data/HerdDB';

interface props {
  herdID: number;
}

function HerdListItem({herdID}: props) {
  let row = HerdDB.find((obj) => obj.ID === herdID);

  return (
    <Link
      to={(row?.ID || '/').toString()}
      className='list-group-item flex-column align-items-start'
    >
      <section className='d-flex w-100 justify-content-between'>
        <section>
          <section className='text-info fw-bold mb-1'>
            <i
              className={`bi bi-gender-${row?.isMale ? 'male' : 'female'} me-2`}
            />
            {row?.name}
          </section>
          <small>
            Born: {new Date(row?.birthTime || '').toLocaleDateString('en-US')}
          </small>
        </section>
        <section>
          <span className='badge bg-info rounded-pill'>
            NE{row?.tagID?.toString().padStart(4, '0')}
          </span>
        </section>
      </section>
    </Link>
  );
}

export default React.memo(HerdListItem);
