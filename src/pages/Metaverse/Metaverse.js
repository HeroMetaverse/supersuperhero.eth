import React from 'react';
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
// import { InfoSection, Pricing } from '../../components';
import {metaverseObjOne,metaverseObjTwo,metaverseObjThree,metaverseObjFour} from './Data';
import {InfoSection} from '../../components'

function Metaverse() {
  return (
    <>
      {/* <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} /> */}
      {/* <h1>Welecome to Metavers SuperSuperHero</h1> */}

      <InfoSection {...metaverseObjOne} />
      <InfoSection {...metaverseObjTwo} />
      <InfoSection {...metaverseObjThree} />
      <InfoSection {...metaverseObjFour} />


    </>
  );
}

export default Metaverse;
