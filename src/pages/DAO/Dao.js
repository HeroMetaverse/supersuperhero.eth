import React from 'react';
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection } from '../../components';
import {daoObjOne,daoObjTwo,daoObjThree} from './Data';

function Dao() {
  return (
    <>
      <InfoSection {...daoObjOne} />
      <InfoSection {...daoObjTwo} />
      <InfoSection {...daoObjThree} />


    </>
  );
}

export default Dao;
