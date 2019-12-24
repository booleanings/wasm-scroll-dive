import React from 'react';
import styled from 'styled-components';

function OceanBlock({ dimensions }) {
  const { height, width } = dimensions;
  const SizedDiv = styled.div`
    height: ${height};
    width: ${width};
  `;  

  return (
    <SizedDiv className="ocean-block"> 
      {height}
      <br />
      {width}
    </SizedDiv>
  );
}

export default OceanBlock;