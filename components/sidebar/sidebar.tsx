import React, { useState } from 'react';
import styled from '@emotion/styled';
import DoubleArrowRight from 'atoms/icons/arrow-right-double.svg';
import { Button } from '@pluto_network/pluto-design-elements';

const DoubleArrow = styled(DoubleArrowRight)`
  position: absolute;
  right: 0;
  top: 0;
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: opacity ease 150ms;
  cursor: pointer;
  transform: ${props => (props.toggled === 'true' ? 'rotate(180deg)' : '')};
`;

const Container = styled.div`
  width: 240px;
  background-color: #f8f9fb;
  position: relative;

  &:hover {
    ${DoubleArrow} {
      opacity: 1;
    }
  }
`;

const SideBar = () => {
  const [toggled, setToggled] = useState(true);

  return (
    <Container>
      <DoubleArrow toggled={toggled.toString()} onClick={() => setToggled(prev => !prev)} />
      <div>
        <Button elementType="anchor">Recent History</Button>
      </div>
    </Container>
  );
};

export default SideBar;
