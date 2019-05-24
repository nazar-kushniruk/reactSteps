import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  display: ${props => props.count !== props.currentValue ? 'none' : 'block'}
  width : 800px;
  heigth: 300px;
  border: 1px solid red;
  margin: auto;
  padding: 20px;
`;

const Step = ({ count, stepValue , currentValue, children }) => {
  console.log(count, stepValue, currentValue)
  return (
    <div className="Step">
      <h1>{stepValue}</h1>
      <Block count={count} currentValue={currentValue}>
        {children}
      </Block>
    </div>
  );
};

export default Step;
