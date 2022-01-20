import React from 'react';
import { InfoSection } from '../../components';
import {chainObjOne,chainObjTwo,chainObjThree} from './Data';

function Chain() {
  return (
    <>
      <InfoSection {...chainObjOne} />
      <InfoSection {...chainObjTwo} />
      <InfoSection {...chainObjThree} />
    </>
  );
}

export default Chain;
