import React from 'react';
import SimpleGuide from '../../components/SimpleGuide/index.jsx';
import { getMixingListUrl } from './settings.js';

const MixList = () => {
  return (
    <SimpleGuide
      pageTitle="Mix List"
      pageDescription={ (
        <div>
          Item Mixing is the art of inserting valuable sheltoms into your items in order to improve their quality!
          <br/>
          In order to do that, you need to visit <b>Mixing Craftsman, Morald in Ricarten Town</b>.
          <br/>
          But before going there, make sure you know the mix formula you are going to use,
          because if you make a mistake, all sheltoms will be lost!
        </div>
      ) }
      guideTitle="Mix List"
      guideContent={ (
        <div>
          <iframe src={ getMixingListUrl() } width="100%" height="2000px"/>
        </div>
      ) }
    />
  );
};

export default MixList;