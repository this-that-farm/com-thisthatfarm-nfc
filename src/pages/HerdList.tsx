import React from 'react';
import HerdListItem from '../components/HerdListItem';
import HerdDB from '../data/HerdDB';

function HerdList() {
  const canReadNFC = 'NDEFReader' in window;
  const [filter, setFilter] = React.useState('');

  function decodeNFC(record: any) {
    if (record.recordType !== 'text') return '';
    const textDecoder = new TextDecoder(record.encoding);
    return textDecoder.decode(record.data);
  }

  function readNFC(event: React.MouseEvent<HTMLButtonElement>) {
    if (!canReadNFC) return;

    // @ts-ignore: experimental browser feature
    const reader = new NDEFReader();

    reader
      .scan()
      .then(() => {
        reader.onreading = (event: any) => {
          const message = event.message;
          for (const record of message.records) {
            if (record.recordType !== 'text') continue;
            setFilter(decodeNFC(record));
          }
        };
      })
      .catch(() => {});
  }

  return (
    <React.Fragment>
      <h1>Sample Herd</h1>
      <section className='input-group mb-3'>
        <span className='input-group-text'>NE</span>
        <input
          type='search'
          className='form-control'
          placeholder='0000'
          onInput={(event) => setFilter(event.currentTarget.value)}
          value={filter}
          autoFocus
        />
        {canReadNFC && (
          <button type='button' className='btn-btn-outline' onClick={readNFC}>
            <i className='bi bi-wifi-2 fs-2' />
            <i className='bi bi-tag fs-4' />
          </button>
        )}
      </section>
      <section className='list-group'>
        {HerdDB.map((row) => (
          <HerdListItem key={row.ID} herdID={row.ID} />
        ))}
      </section>
    </React.Fragment>
  );
}

export default React.memo(HerdList);
