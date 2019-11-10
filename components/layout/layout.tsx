import React, { FC } from 'react';
import styled from '@emotion/styled';
import Header from 'components/header/header';
import SideBar from 'components/sidebar/sidebar';
import { useRouter } from 'next/router';

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  min-height: 100vh;
  padding: 16px;
`;

const Layout: FC = ({ children }) => {
  const router = useRouter();
  const onHomePage = router.pathname === '/';

  return (
    <>
      <Header />
      <Container>
        {!onHomePage && <SideBar />}
        <Content>{children}</Content>
      </Container>
    </>
  );
};

export default Layout;
