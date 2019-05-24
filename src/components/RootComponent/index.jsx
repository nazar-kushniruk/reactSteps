import React from 'react';
import Step1 from '../Step1';
import Step2 from '../Step2';
import withComponent from '../App';

const RootComponent = (props) => {
  return (
    <div className="RootComponent">
      <Step1 {...props}/>
      <Step2 {...props}/>
    </div>
  );
};

export default withComponent(RootComponent);
