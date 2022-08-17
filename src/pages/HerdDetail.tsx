import React from 'react';
import {useParams} from 'react-router-dom';

function HerdDetail() {
  let params = useParams();
  return <section>Herd Detail for {params.herdID}</section>;
}

export default React.memo(HerdDetail);
