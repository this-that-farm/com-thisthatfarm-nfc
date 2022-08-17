import React from 'react';
import {Link, useParams} from 'react-router-dom';
import HerdDB from '../data/HerdDB';

function HerdDetail() {
  let params = useParams();
  let row = HerdDB.find((obj) => obj.ID === Number(params.herdID));

  return (
    <React.Fragment>
      <h1>NE{(row?.tagID || '').toString().padStart(4, '0')} Details</h1>
      <table className='table table-stripe table-sm'>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{row?.name}</td>
          </tr>
          <tr>
            <td>Tag ID</td>
            <td>NE{(row?.tagID || '').toString().padStart(4, '0')}</td>
          </tr>
          <tr>
            <td>Sire ID</td>
            <td>
              {!!row?.sireID && (
                <Link to={'/' + row.sireID.toString()}>View #{row.sireID}</Link>
              )}
            </td>
          </tr>
          <tr>
            <td>Dam ID</td>
            <td>
              {!!row?.damID && (
                <Link to={'/' + row.damID.toString()}>View #{row.damID}</Link>
              )}
            </td>
          </tr>
          <tr>
            <td>Born</td>
            <td>
              {new Date(row?.birthTime || '').toLocaleDateString('en-US')}
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              {row?.isMale ? (row?.isSterile ? 'Wether' : 'Male') : 'Female'}
            </td>
          </tr>
        </tbody>
      </table>
      <section>
        <pre className='text-white bg-dark p-2'>
          {JSON.stringify(row, null, 2)}
        </pre>
      </section>
    </React.Fragment>
  );
}

export default React.memo(HerdDetail);
