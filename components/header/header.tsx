import React, { FC } from 'react';
import styled from '@emotion/styled';
import Logo from 'atoms/icons/scinapse-logo.svg';
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from 'graphql-client/user';
import { GetCurrentUser } from 'components/authForm/types/GetCurrentUser';

const Nav = styled.nav`
position: fixed;
top: 0;
z-index: 100;
width: 100%;
height: 64px;
background-color: white;
border-bottom: 1px solid $gray300;
transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);k
`;

const Header: FC = () => {
  const { data: user } = useQuery<GetCurrentUser>(CURRENT_USER, { fetchPolicy: 'network-only' });

  return (
    <Nav>
      <Logo style={{ width: 122, height: 30 }} />
    </Nav>
  );
};

export default Header;
